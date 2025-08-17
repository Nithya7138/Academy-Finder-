import dbconnect from "../../../utils/connectMongos";
import Academic from "../models/academics.model";

export async function GET() {
  await dbconnect();

  try {
    const academies = await Academic.find({});
    return new Response(JSON.stringify(academies), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    const message =
      typeof error === "object" && error !== null && "message" in error
        ? (error as { message: string }).message
        : String(error);
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
