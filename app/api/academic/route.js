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


import academiccontroller from "../../controller/academiccontroller.js";

export default function(app){
  app.post("/api/academic/add", academiccontroller.addacademi);
}