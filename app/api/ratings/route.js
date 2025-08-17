import connectMongo from "../../../utils/connectMongos";
import ratingsmodel from "../../../models/RatingsDetails";
export async function GET() {

try{    await connectMongo();
   const result = await ratingsmodel.find({});
   
   return Response.json(result);
}
catch(error){
    return Response.json({message:error.message})
}


  
}
