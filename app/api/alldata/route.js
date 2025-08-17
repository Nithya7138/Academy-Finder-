import type { NextApiRequest, NextApiResponse } from "next";
import data from "@/app/data/academies.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(data);
}
