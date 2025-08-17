import { NextApiRequest, NextApiResponse } from "next";
import data from "@/app/data/academies.json";

export default function handler(req, res) {
  res.status(200).json(data);
}
