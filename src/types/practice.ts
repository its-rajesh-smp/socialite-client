export interface IPracticeSet {
  id: string;
  name: string;
  description: string;
  visibility: string;
  practiceQuestions: IPracticeQuestion[];
}

export interface IPracticeQuestion {
  id: string;
  title: string;
  link: string;
  visibility: string;
  description: string;
}
