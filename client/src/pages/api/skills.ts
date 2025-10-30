import type { NextApiRequest, NextApiResponse } from 'next';
import { storage } from 'server/storage';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const portfolio = await storage.getPortfolio();
  res.status(200).json(portfolio.skills);
}
