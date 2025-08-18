import academie from "../../models/AcademicDetails.js";

const addacademi = async (req, res) => {

const academicData = {
  name: req.body.name,
  type: req.body.type,
  address: req.body.address,
  phone: req.body.phone,
  trainers: req.body.trainers,
  achievements: req.body.achievements,
  average_rating: req.body.average_rating,
  created_at: new Date(),
  updated_at: new Date(),
  art_programs: req.body.art_programs,
  sports_programs: req.body.sports_programs,
};
  try {
    const Academi = await academie.create(academicData);
    res.status(201).json({ message: "Academic details added successfully", data: Academi });
  } catch (error) {
    console.error("Error adding academic details:", error);
    res.status(500).json({ message: "Error adding academic details", error: error.message });
  }

}

export default { addacademi };