// // import { addacademi, getAcademicDetails, getAcademyTypes, getAcademyType, getAcademyById, getAcademyByArt, getAcademyBySport, getAcademyByCity, getAcademyByRating } from "../../controller/academiccontroller.js";

// // export default function academicRoutes(app) {
  
// //   app.post("/api/academic/add", addacademi);

// //   app.get("/api/academic/getAll", getAcademicDetails);

// //   app.get("/api/academic/getTypes", getAcademyTypes);

// //   app.get("/api/academic/getType/:typename", getAcademyType);

// //   app.get("/api/academic/getById/:id", getAcademyById);

// //   app.get("/api/academic/getByArt/:art", getAcademyByArt);

// //   app.get("/api/academic/getBySport/:sport", getAcademyBySport);

// //   app.get("/api/academic/getByCity/:city", getAcademyByCity);

// //   app.get("/api/academic/getByRating/:rating", getAcademyByRating);
// // }

// // controller/academiccontroller.js

// import Academic from "../models/Academic.js";  // make sure this path is correct

// export async function getAcademicDetails(req, res) {
//   try {
//     const academics = await Academic.find();
//     res.json({ message: "Academics retrieved successfully", data: academics });
//   } catch (error) {
//     console.error("❌ getAcademicDetails error:", error); // <--- log error
//     res.status(500).json({ error: "Failed to fetch academics", details: error.message });
//   }
// }
