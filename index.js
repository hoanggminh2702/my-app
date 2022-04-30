const express = require("express");
const hbs = require("express-hbs");
const app = express();

const port = 8080;

// Set view engine
app.set("view engine", "hbs");

// Set Partial trong trường hợp include file khác vào
app.engine(
  "hbs",
  hbs.express4({
    partialsDir: __dirname + "\\views\\partials",
  })
);

// View được lấy trong folder view
app.set("views", __dirname + "\\views");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Web của tôi",
    name: "Hoàng Minh",
  });
});

app.listen(port, () => {
  console.log("Listening on port: ", port);
});
