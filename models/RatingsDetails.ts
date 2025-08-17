import { Schema, model,models} from 'mongoose';

const RatingSchema = new Schema({
  id: {type: String, required: true,unique: true},
  user_name: {type: String,required: true},
  user_email: {type: String,required:true},
  rating: {type: Number,min: 0,max: 5,required: true},
  review: {type: String},
  created_at: {type: Date,default: Date.now}}, {
  collection: 'ratings',_id: false });

  const ratings =  models.rating   || model('Ratings',RatingSchema);
  export default ratings;