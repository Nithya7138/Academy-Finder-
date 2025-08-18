import academie from "../../models/AcademicDetails.js";

export const addacademi = async (req, res) => {

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
  } 
  catch (error) {
    console.error("Error adding academic details:", error);
    res.status(500).json({ message: "Error adding academic details", error: error.message });
  }

}


//? get the data

export const getAcademicDetails = async (req, res) => {
  try {
    // const academicQuery = {};
    const Academi = await academie.find({});
    res.status(200).json({ message: "Academic details retrieved successfully", data: Academi });
  } 
  catch (error) {
    console.error("Error retrieving academic details:", error);
    res.status(500).json({ message: "Error retrieving academic details", error: error.message });
  }
};

//* get academy type
export const getAcademyTypes = async (req, res) => {
  try {
    const academyTypes = await academie.distinct('type');
    res.status(200).json({ message: "Academy types retrieved successfully", data: academyTypes });
  } 
  catch (error) {
    console.error("Error retrieving academy types:", error);
    res.status(500).json({ message: "Error retrieving academy types", error: error.message });
  }
};

//? get the type name
export const getAcademyType = async (req, res) => {
  const { typename } = req.params;
  try {
    const Academy = await academie.findOne({ type: typename });
    if (!Academy) {
      return res.status(404).json({ message: "Academy type not found" });
    }
    res.status(200).json({ message: "Academy type retrieved successfully", data: Academy });
  } catch (error) {
    console.error("Error retrieving academy type:", error);
    res.status(500).json({ message: "Error retrieving academy type", error: error.message });
  }
};

export const getAcademyById = async (req, res) => {
  const { id } = req.params;
  try {
    const Academy = await academie.findById(id);
    if (!Academy) {
      return res.status(404).json({ message: "Academy not found" });
    }
    res.status(200).json({ message: "Academy retrieved successfully", data: Academy });
  } catch (error) {
    console.error("Error retrieving academy:", error);
    res.status(500).json({ message: "Error retrieving academy", error: error.message });
  }
};

export const getAcademyByRating = async (req, res) => {
  const { rating } = req.params;
  try {
    const Academy = await academie.find({ average_rating: rating });
    if (!Academy) {
      return res.status(404).json({ message: "Academy not found" });
    }
    res.status(200).json({ message: "Academy retrieved successfully", data: Academy });
  } catch (error) {
    console.error("Error retrieving academy:", error);
    res.status(500).json({ message: "Error retrieving academy", error: error.message });
  }
};

export const getAcademyByCity = async (req, res) => {
  const { city } = req.params;
  try {
    const Academy = await academie.find({ city });
    if (!Academy) {
      return res.status(404).json({ message: "Academy not found" });
    }
    res.status(200).json({ message: "Academy retrieved successfully", data: Academy });
  } catch (error) {
    console.error("Error retrieving academy:", error);
    res.status(500).json({ message: "Error retrieving academy", error: error.message });
  }
};




export const getAcademyBySport = async (req, res) => {
  const { sport } = req.params;
  try {
    const Academy = await academie.find({ sports_programs: sport });
    if (!Academy) {
      return res.status(404).json({ message: "Academy not found" });
    }
    res.status(200).json({ message: "Academy retrieved successfully", data: Academy });
  } catch (error) {
    console.error("Error retrieving academy:", error);
    res.status(500).json({ message: "Error retrieving academy", error: error.message });
  }
};

export const getAcademyByArt = async (req, res) => {
  const { art } = req.params;
  try {
    const Academy = await academie.find({ art_programs: art });
    if (!Academy) {
      return res.status(404).json({ message: "Academy not found" });
    }
    res.status(200).json({ message: "Academy retrieved successfully", data: Academy });
  } catch (error) {
    console.error("Error retrieving academy:", error);
    res.status(500).json({ message: "Error retrieving academy", error: error.message });
  }
};