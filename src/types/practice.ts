import { IUser } from "./auth";

export interface IPracticeSet {
  id: string;
  title: string;
  description: string;
  visibility: string;
  practiceQuestions: IPracticeQuestion[];
  user: IUser;
  onPracticeSetClick?: (practiceSetId: string) => void;
  onPracticeSetDelete?: (practiceSetId: string) => void;
  isCurrentUserForked?: boolean;
}

export interface IPracticeQuestion {
  id: string;
  title: string;
  visibility: string;
  description: string;
  user: IUser;
  submittedAt: Date;
  userTaskMetadata: IUserTaskMetadata;
  taskTags: ITaskTag[];
  questionLink: string;
}

export interface IUserTaskMetadata {
  isBookmarked: boolean;
  note: string;
  submissionCount: number;
}

export interface ITaskTag {
  id: string;
  name: string;
}

export interface IPracticeTaskContent {
  title: string;
  description: string;
  id: string;
  submittedAt: Date | null;
  type: "resource" | "coding";
  user: IUser | null;
  taskTags: ITaskTag[];
}
