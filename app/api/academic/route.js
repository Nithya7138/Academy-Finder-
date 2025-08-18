// import connectMongo from "../../../utils/connectMongos";
// import academicmodel from "../../../models/AcademicDetails";

// export async function GET() {
//   try {
//     await connectMongo();
//     const result = await academicmodel.find({});   
//     return Response.json(result);
//   } catch (error) {
//     return Response.json({ message: error.message });
//   }
// }


// import { addacademi } from "../../controller/academiccontroller.js";

// export default function academicRoutes(app){
//   app.post("/api/academic/add", addacademi);
// }

// export default function academicRoutes(app){
//   app.get("/api/academic/getAll", getacademi);
// }


import { addacademi, getAcademicDetails, getAcademyTypes, getAcademyType,getAcademyById,getAcademyByArt,getAcademyBySport,getAcademyByCity,getAcademyByRating } from "../../controller/academiccontroller.js";

export default function academicRoutes(app) {
  
  app.post("/api/academic/add", addacademi);

  
  app.get("/api/academic/getAll", getAcademicDetails);


  app.get("/api/academic/getTypes", getAcademyTypes);

  app.get("/api/academic/getType/:typename", getAcademyType);

  app.get("/api/academic/getById/:id", getAcademyById);

  app.get("/api/academic/getByArt/:art", getAcademyByArt);

  app.get("/api/academic/getBySport/:sport", getAcademyBySport);

  app.get("/api/academic/getByCity/:city", getAcademyByCity);

  app.get("/api/academic/getByRating/:rating", getAcademyByRating);
}
