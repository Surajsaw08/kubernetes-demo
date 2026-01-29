import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Hello, from container",
    service: "hello-world",
    pod: process.env.POD_NAME || "unknown",
    time: new Date().toISOString(),
  });
});

app.get("/readyz", (req, res) => {
  res.status(200).send("ready");
});

app.get("/healthz", (req, res) => {
  res.status(200).send("ok");
});

app.listen(port, () => {
  console.log(`Kubernetes demo app listening at ${port}`);
});
