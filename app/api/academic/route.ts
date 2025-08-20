import connectMongo from "../../../utils/connectMongos";
import academicmodel from "../../../models/AcademicDetails";
export const runtime = "nodejs";

// GET /api/academic -> list all academies
export async function GET() {
  try {
    await connectMongo();
    const result = await academicmodel.find({});
    return Response.json(result);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to fetch academies";
    return Response.json({ message }, { status: 500 });
  }
}

// POST /api/academic -> create a new academy
export async function POST(request: Request) {
  try {
    const body = await request.json();
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

    return Response.json(
      { message: "Academic details added successfully", data: created },
      { status: 201 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to create academy";
    return Response.json({ message }, { status: 500 });
  }
}