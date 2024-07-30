import { IUser } from "./auth";

export interface INewPostFormData {
  text?: string;
  image?: string;
  visibility?: string;
}

export interface IPost {
  id: string;
  text: string;
  image: string;
  visibility: string;
  User: IUser;
  like: number;
  comment: number;
  isCurrentUserReacted?: boolean;
}
