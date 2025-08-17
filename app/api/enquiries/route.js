import connectMongo from "../../../utils/connectMongos";
import enquirymodel from "../../../models/EnquiriesDetails";
export async function GET() {

try{    await connectMongo();
   const result = await enquirymodel.find({});
   
   return Response.json(result);
}
catch(error){
    return Response.json({message:error.message})
}


  
}
