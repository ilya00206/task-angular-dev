export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  profileId: number;
}

export interface IProfile {
  id: number;
  userId: number;
  avatarUrl?: string;
  phone: string;
}
