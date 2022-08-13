const express = require("express");
const app = express();
app.use(express.json());
const { User } = require("./server/db");
const path = require("path");

app.use("/dist", express.static("dist"));

const isLoggedIn = async (req, res, next) => {
  try {
    req.user = await User.findByToken(req.headers.authorization);
    next();
  } catch (ex) {
    next(ex);
  }
};

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.use("/api/orders", require("./server/routes/orders"));
app.use("/api/sessions", require("./server/routes/sessions"));

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send({ error: err });
});

module.exports = app;
