export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  profileId: number;
}

export interface Profile {
  id: number;
  userId: number;
  avatarUrl?: string;
  phone: string;
}

export interface UserWithProfile extends User {
  profile: Profile;
}
