import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

// Import normal (ESM import)
import { app } from "./index.js";

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.all("/", (req, res) => {
  app(req, res);
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`⚡ Cloud Function running locally at http://localhost:${PORT}`);
});
