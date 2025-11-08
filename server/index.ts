// server/index.ts
import express from "express";
import bodyParser from "body-parser";
import { registerRoutes } from "./routes"; // adjust path if needed

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Logging middleware (optional)
app.use((req, _res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Register your app routes
registerRoutes(app);

// Start the server for local dev
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
