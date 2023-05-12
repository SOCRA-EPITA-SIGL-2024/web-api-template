import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", function (request, response) {
  response.send({ status: "healthy" });
});

app.listen(port, function () {
  console.log(`Server started on localhost:${port}`);
});
