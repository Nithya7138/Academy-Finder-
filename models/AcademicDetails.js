import mongoose from 'mongoose';
const { Schema, model, models } = mongoose;

const AddressSchema = new Schema({
  line1: { type: String, required: true },
  line2: { type: String },
  city: { type: String, required: true },
  state: { type: String },
  zip: { type: String }
});

const ArtProgramSchema = new Schema({
  aname: { type: String, required: true },   
  styles: [String],                         
  instruments: [String], 
  level: { type: String, enum: ["Beginner", "Intermediate", "Advanced"] }
}, { _id: false });

const SportsProgramSchema = new Schema({
  sname: { type: String, required: true },   
  category: { type: String },              
  team_size: { type: Number },
  level: { type: String, enum: ["Beginner", "Intermediate", "Advanced"] }
}, { _id: false });

const AcademicDetailsSchema = new Schema({
  _id: { type: String, default: () => new Date().getTime().toString() },
  name: { type: String, required: true },
  type: { type: String, required: true, enum: ['Art', 'Sports'] },
  address: { type: AddressSchema, required: true },
  phone: { type: String, required: true },

  trainers: [
    {
      name: { type: String, required: true },
      experience_years: { type: Number, required: true },
      specializations: { type: [String], required: true }
    }
  ],

  achievements: [
    {
      award: { type: String },
      notable_alumni: { type: [String] },
      recognition: { type: String }
    }
  ],

  average_rating: { type: Number, default: 0 },

  art_programs: [ArtProgramSchema],
  sports_programs: [SportsProgramSchema]

}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  collection: 'academic_details'
});

const academicmodel = models.Academic || model('Academic', AcademicDetailsSchema);
export default academicmodel;