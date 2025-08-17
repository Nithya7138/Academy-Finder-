export interface Address {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  zip_code: string;
}

export interface Trainer {
  name: string;
  experience_years: number;
  specializations: string[];
}

export interface Academic {
  _id?: string;
  name: string;
  type: "Art" | "Sports";
  address: Address;
  phone: string;
  trainers: Trainer[];
  achievements?: {
    award?: string;
    notable_alumni?: string[];
    recognition?: string;
  }[];
  average_rating?: number;
  created_at?: string;
  updated_at?: string;

  art_program?: ArtProgram;
  sports_program?: SportsProgram;
}

export interface ArtProgram {
  aname: string;              
  styles?: string[];         
  instruments?: string[];    
  level?: "Beginner" | "Intermediate" | "Advanced";
}

export interface SportsProgram {
  sname: string;              // Cricket, Football
  category?: string;         // Indoor / Outdoor
  team_size?: number;
  level?: "Beginner" | "Intermediate" | "Advanced";
}