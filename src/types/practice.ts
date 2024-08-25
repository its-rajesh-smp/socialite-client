import { IUser } from "./auth";

export interface IPracticeSet {
  id: string;
  name: string;
  description: string;
  visibility: string;
  practiceQuestions: IPracticeQuestion[];
  user: IUser;
  onPracticeSetClick?: (practiceSetId: string) => void;
  onPracticeSetDelete?: (practiceSetId: string) => void;
}

export interface IPracticeQuestion {
  id: string;
  title: string;
  link: string;
  visibility: string;
  description: string;
}
