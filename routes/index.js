var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi",
    user: "Rycer",
    added: new Date(),
  },
  {
    text: "Hello",
    user: "Syrax",
    added: new Date(),
  },
];
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { messages });
});

router.get("/new", function(req, res, next) {
  res.render("form");
});
router.post("/new", function(req, res, next) {
  const message = req.body;
  messages.push({ text: message.text, user: message.user, added: new Date() });
  res.redirect("/");
});
module.exports = router;
