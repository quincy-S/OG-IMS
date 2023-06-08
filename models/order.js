const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  date: Date,
  item: String,
  vendor: String,
  channel: String,
  order: String,
  amount: Number,
  price: Number,
  note: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

orderSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Order", orderSchema);
