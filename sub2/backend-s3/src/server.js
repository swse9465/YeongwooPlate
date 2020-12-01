import "./env";
import logger from "morgan";
import { uploadMiddleware, uploadController } from "./upload";
const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 4000;

const server = express();
server.use(logger("dev"));
server.use(cors()); // CORS 에러 해결
server.post("/api/upload", uploadMiddleware, uploadController);
server.listen({ port: PORT }, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
