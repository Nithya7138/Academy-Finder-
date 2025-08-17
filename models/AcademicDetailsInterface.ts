// import { Trainer } from './Trainer';
// import { Achievement } from './Achievement';

// export interface Address {
//   line1: string;
//   line2?: string;
//   city: string;
//   state?: string;
//   zip?: string;
// }

// export interface AcademicDetails {
//   _id?: string;
//   name: string;
//   type: 'Art' | 'Sports';
//   address: Address;  
//   phone: string;
//   trainers: Trainer[];
//   achievements?: Achievement[];
//   average_rating: number;
//   created_at?: string;
//   updated_at?: string;
// }



import { Trainer } from './Trainer';
import { Achievement } from './Achievement';

export interface Address {
  line1: string;
  line2?: string;
  city: string;
  state?: string;
  zip?: string;
}

// 🎨 Art Program
export interface ArtProgram {
  aname: string;              // Dance, Painting, Music
  styles?: string[];         // Bharatanatyam, Watercolor
  instruments?: string[];    // Guitar, Violin
  level?: "Beginner" | "Intermediate" | "Advanced";
}

// 🏏 Sports Program
export interface SportsProgram {
  sname: string;              // Cricket, Football
  category?: string;         // Indoor / Outdoor
  team_size?: number;
  level?: "Beginner" | "Intermediate" | "Advanced";
}

export interface AcademicDetails {
  _id?: string;
  name: string;
  type: "Art" | "Sports";
  address: Address;  
  phone: string;
  trainers: Trainer[];
  achievements?: Achievement[];
  average_rating: number;
  created_at?: string;
  updated_at?: string;

  // 👇 Conditional programs
  art_programs?: ArtProgram[];
  sports_programs?: SportsProgram[];
}
