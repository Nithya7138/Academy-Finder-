import { Schema, model,models} from 'mongoose';


const EnquirydetailsSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    interest: { type: String, required: true }, 
    batch_time: { type: String, required: true },
  },
  {
    timestamps: true, 
    collection: "enquiries",
  }
);
  const enquirymodel =  models.Enquiry || model('Enquiry',EnquirydetailsSchema)
  export default enquirymodel;


  