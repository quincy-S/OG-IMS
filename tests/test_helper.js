const User = require("../models/user");

async function usersInDb() {
  const users = await User.find({});
  return users.map((u) => u.toJSON());
}

module.exports = {
  usersInDb,
};
