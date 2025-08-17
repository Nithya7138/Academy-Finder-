import connectMongo from "../../../utils/connectMongos";
import academicmodel from "../../../models/AcademicDetails";

export async function GET() {
  try {
    await connectMongo();
    const result = await academicmodel.find({});   
    return Response.json(result);
  } catch (error) {
    return Response.json({ message: error.message }, { status: 500 });
  }
}
