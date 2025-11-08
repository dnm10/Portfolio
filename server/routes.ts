
import { Express } from "express";
import storage from "./storage"; 

export function registerRoutes(app: Express) {
  app.get("/api/portfolio", async (_req, res) => {
    try {
      const portfolio = await storage.getPortfolio();
      res.json(portfolio);
    } catch (error) {
      console.error("Error fetching portfolio:", error);
      res.status(500).json({ error: "Failed to fetch portfolio data" });
    }
  });

  // register more routes here...
}
