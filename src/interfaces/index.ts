export interface PiuData {
  created_at?: string;
  id?: string;
  text: string;
  updated_at?: string;
  user: UserData;
  likes?: LikesData;
}

export interface UserData {
  about: string;
  email: string;
  first_name: string;
  id: string;
  last_name: string;
  photo: string;
  username: string;
  favorites: FavData;
}

export interface FavData {
  created_at: string;
  id: string;
  text: string;
  updated_at: string;
}

export interface LikesData {
  0: { id: string; user: UserData }[];
}
