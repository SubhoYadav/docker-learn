const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

console.log(path.join(__dirname, "config", "app-congig.env"));
const envPath = path.join(__dirname, "config", "app-congig.env");
dotenv.config({
  path: envPath,
});

console.log(process.env.PORT);

const app = express();
const PORT = process.env.PORT || 6060;
app.get("/", (request, response) => {
  response.send(
    "<h1>Docker Devops tools Hey There I am a SOftware Engineer !!</h1>"
  );
});
app.listen(PORT, () => {
  console.log(`Server listening on port:${PORT}`);
});
