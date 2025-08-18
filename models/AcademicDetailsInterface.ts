

import { Trainer } from './Trainer';
import { Achievement } from './Achievement';

export interface Address {
  line1: string;
  line2?: string;
  city: string;
  state?: string;
  zip?: string;
}
export interface ArtProgram {
  aname: string;             
  styles?: string[];         
  instruments?: string[];    
  level?: "Beginner" | "Intermediate" | "Advanced";
}


export interface SportsProgram {
  sname: string;              
  category?: string;         
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


  art_programs?: ArtProgram[];
  sports_programs?: SportsProgram[];
}
// 