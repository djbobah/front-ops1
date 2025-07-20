const express = require("express");
const os = require("node:os");

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();

const DATE_SERVER_HOST =
  process.env.DATE_SERVER_HOST || "http://localhost:3005";

os.platform();

app.get("/", (req, res) => {
  fetch(DATE_SERVER_HOST)
    .then((res) => res.json())
    .then((date) =>
      res.send(
        `Hello! Current date i: ${date}\n ${os.platform()}\n ${os.version()}\n`
      )
    );
});

app.listen(3000, () => {
  console.log("ready");
});
