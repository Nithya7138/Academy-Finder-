import { NextApiRequest, NextApiResponse } from "next";
import { Academic } from "@/app/type";
import data from "academies.json"; 

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id || Array.isArray(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  const academy = data.find((a: Academic) => a._id === id);

  if (academy) {
    res.status(200).json(academy);
  } else {
    res.status(404).json({ message: "Academy not found" });
  }
}
