// api/index.ts
import express from "express";
import { registerRoutes } from "../server/routes"; // path relative to api/
import bodyParser from "body-parser";

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Logging middleware (optional)
app.use((req, _res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Register routes from server
registerRoutes(app);

// Export handler for Vercel
export default function handler(req: any, res: any) {
  return app(req, res);
}
