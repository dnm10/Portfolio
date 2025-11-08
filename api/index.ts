// api/index.ts
import express from "express";
import { registerRoutes } from "../server/routes";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, _res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

registerRoutes(app);

// ✅ Export a request handler for Vercel
export default app;
