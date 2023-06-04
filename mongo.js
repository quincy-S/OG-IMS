const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(`give password as argument `);
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://quincy:${password}@cluster0.svptgkp.mongodb.net/production?retryWrites=true&w=majority`;
// Y55PcufH8BKN6kR7

mongoose.set(`strictQuery`, false);
mongoose.connect(url);

const orderSchema = new mongoose.Schema({
  date: Date,
  item: String,
  vendor: String,
  channel: String,
  order: String,
  amount: Number,
  price: Number,
});

const Order = mongoose.model("Order", orderSchema);

const order = new Order({
  date: new Date(),
  item: "water bag",
  vendor: "Sadiq",
  channel: "Grandpa",
  order: "Sale",
  amount: 15,
  price: 3.5,
});

// order
//   .save()
//   .then((result) => {
//     console.log("note saved");
//     mongoose.connection.close();
//   })
//   .catch((err) => console.log(err));

Order.find({}).then((result) => {
  result.forEach((order) => {
    console.log(order);
  });
  mongoose.connection.close();
});
