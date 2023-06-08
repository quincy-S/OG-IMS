const express = require("express");
const Joi = require("joi");
const router = express.Router();
const Order = require("../models/order");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

//GET REQUESTS
router.get("/", async (req, res) => {
  const orders = await Order.find({}).populate("user", {
    username: 1,
    name: 1,
  });
  res.json(orders);
});

router.get("/:id", (req, res, next) => {
  Order.findById(req.params.id)
    .then((order) => {
      if (!order) {
        return res
          .status(404)
          .send("The course with the given ID does not exist");
      }
      res.json(order);
    })
    .catch((error) => {
      next(error);
    });
});

//POST REQUESTS
router.post("/", async (req, res) => {
  const { error } = validateOrder(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const decodedToken = jwt.verify(getTokenFrom(req), process.env.SECRET);
  if (!decodedToken.id) {
    return res.status(401).json({ error: "token invalid" });
  }
  const user = await User.findById(decodedToken.id);

  const order = new Order({
    date: new Date(),
    item: req.body.item,
    vendor: req.body.vendor,
    channel: req.body.channel,
    order: req.body.order,
    note: req.body.note,
    amount: Number(req.body.amount),
    price: Number(req.body.price),
    user: user._id,
  });
  const savedOrder = await order.save();
  user.orders = user.orders.concat(savedOrder._id.toString());
  await user.save();
  res.json(savedOrder);
});

function getTokenFrom(request) {
  const authorization = request.get("authorization");
  if (authorization && authorization.startsWith("Bearer ")) {
    return authorization.replace("Bearer ", "");
  }
  return null;
}

function validateOrder(order) {
  const schema = Joi.object({
    item: Joi.string().min(5),
    vendor: Joi.string().min(3),
    channel: Joi.string().min(3),
    order: Joi.string().min(4),
    amount: Joi.number(),
    note: Joi.string().allow(),
    price: Joi.number(),
    userId: Joi.string(),
  });
  return schema.validate(order);
}

module.exports = router;
