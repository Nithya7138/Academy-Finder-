import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
  line1: { type: String, required: true },
  line2: { type: String },
  city: { type: String, required: true },
  state: { type: String },
  zip_code: { type: String }
}, { _id: false });

const ArtProgramSchema = new mongoose.Schema({
  aname: { type: String, required: true },
  styles: [String],
  instruments: [String],
  level: { type: String, enum: ["Beginner", "Intermediate", "Advanced"] }
}, { _id: false });

const SportsProgramSchema = new mongoose.Schema({
  sname: { type: String, required: true },
  category: { type: String },
  team_size: { type: Number },
  level: { type: String, enum: ["Beginner", "Intermediate", "Advanced"] }
}, { _id: false });

const TrainerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  experience_years: { type: Number, required: true },
  specializations: { type: [String], required: true }
}, { _id: false });

const AcademicSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true, enum: ['Art', 'Sports'] },
  address: { type: AddressSchema, required: true },
  phone: { type: String, required: true },
  trainers: [TrainerSchema],
  achievements: [
    {
      award: { type: String },
      notable_alumni: { type: [String] },
      recognition: { type: String }
    }
  ],
  average_rating: { type: Number, default: 0 },
  art_program: ArtProgramSchema,
  sports_program: SportsProgramSchema,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export default mongoose.models.Academic || mongoose.model("Academic", AcademicSchema);
