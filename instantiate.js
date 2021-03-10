const express = require("express");
const { Router } = express; //import

const router = new Router(); //

const app = express(); //create an express server
app.use(router); //register as middleware with an express server

router.get("/", (req, res) => {
  res.send("welcome to home!");
});

const port = 4000;
app.listen(port);

module.exports = router;
