const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send('Hello world!')
  });

  console.log('something')
  console.log('something else')
  console.log('something else again')
  console.log('hello again world!')

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });