require("dotenv").config();
//require db connections
const establishConnection = require("./server/config/connect");
//require app
const app = require("./server/app");

const PORT = process.env.PORT || 5000;

establishConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`Using environment: ${process.env.NODE_ENV}`);
    console.log(`Server successfully started and listening on port ${PORT}`);
  });
}).catch(err => {
  console.log(err);
}).finally(() => {
  console.log("Server started");
})

module.exports = app //used for testing purposes