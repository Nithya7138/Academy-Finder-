import dbconnect from "../../../utils/connectMongos";
import Academic from "../academics.model";

export default async function handler(req, res) {
  await dbconnect();

  try {
    const academies = await Academic.find({});
    res.status(200).json(academies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
