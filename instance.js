const express = require("express");

const { Router } = express;

const router = new Router();

const app = express();
app.use(router);

router.get("/hi/:name", (request, response) => {
  const name = request.params.name;
  response.send(`Hi ${name}`);
});

module.exports = router;

const port = 4002;
app.listen(port, () => console.log("listening on port " + port));

//npx nodemon instance.js
//another terminal: http -v :4002/Hi/jessy
