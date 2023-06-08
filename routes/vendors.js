const express = require("express");
const router = express.Router();
const Vendor = require("../models/vendor");
const Joi = require("joi");

router.get("/", async (req, res) => {
  const vendors = await Vendor.find({});
  res.json(vendors);
});

router.post("/", async (req, res) => {
  const { error } = validateVendor(req.body);
  const { name, type } = req.body;

  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const vendorExists = await Vendor.find({ name });
  if (vendorExists) {
    return res.status(400).json("Vendor already exists");
  }
  const vendor = new Vendor({
    name: name,
    type: type,
  });

  const savedVendor = await vendor.save();
  res.json(savedVendor);
});

function validateVendor(vendor) {
  const schema = Joi.object({
    name: Joi.string().min(3),
    type: Joi.string(),
  });
  return schema.validate(vendor);
}

module.exports = router;
