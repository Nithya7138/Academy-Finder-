import connectMongo from "../../../utils/connectMongos.js";
import academicmodel from "../../../models/AcademicDetails.js";

export default function academicRoute(app) {
  // GET /api/academic -> list all academies
  app.get('/api/academic', async (req, res) => {
    try {
      await connectMongo();
      const result = await academicmodel.find({});
      res.json(result);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to fetch academies";
      res.status(500).json({ message });
    }
  });

  // POST /api/academic -> create a new academy
  app.post('/api/academic', async (req, res) => {
    try {
      const body = req.body;
      await connectMongo();

      const created = await academicmodel.create({
        name: body.name,
        type: body.type,
        address: body.address,
        phone: body.phone,
        trainers: body.trainers,
        achievements: body.achievements,
        average_rating: body.average_rating,
        art_programs: body.art_programs,
        sports_programs: body.sports_programs,
      });

      res.status(201).json({ 
        message: "Academic details added successfully", 
        data: created 
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to create academy";
      res.status(500).json({ message });
    }
  });
}