const bcrypt = require("bcryptjs");
const users = [
  {
    name: "Amar Admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("a12345", 10),
    isAdmin: true,
  },
  {
    name: "AmarDon",
    email: "don@gmail.com",
    password: bcrypt.hashSync("u12345", 10),
  },
  {
    name: "amarsingh",
    email: "singh@gmail.com",
    password: bcrypt.hashSync("u12345", 10),
  },
];
module.exports = users;
