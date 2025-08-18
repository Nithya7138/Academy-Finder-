import connectMongo from "../../../utils/connectMongos";
import academicmodel from "../../../models/AcademicDetails";

export async function GET() {
  try {
    await connectMongo();
    const result = await academicmodel.find({});   
    return Response.json(result);
  } catch (error) {
    return Response.json({ message: error.message });
  }
}

export async function POST(request) {
  try {
    await connectMongo();
    const body = await request.json();
    
    const academicData = {
      name: body.name,
      type: body.type,
      address: body.address,
      phone: body.phone,
      trainers: body.trainers,
      achievements: body.achievements,
      average_rating: body.average_rating,
      created_at: new Date(),
      updated_at: new Date(),
      art_programs: body.art_programs,
      sports_programs: body.sports_programs,
    };
    
    const Academi = await academicmodel.create(academicData);
    return Response.json({ message: "Academic details added successfully", data: Academi }, { status: 201 });
  } catch (error) {
    console.error("Error adding academic details:", error);
    return Response.json({ message: "Error adding academic details", error: error.message }, { status: 500 });
  }
}