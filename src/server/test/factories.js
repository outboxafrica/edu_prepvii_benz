const faker = require("faker");

exports.validUser = () => ({
  username: faker.name.firstName().toLowerCase(),
  email: faker.internet.email(),
  password: "password",
});
