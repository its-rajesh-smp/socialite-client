export interface IPracticeSet {
  id: string;
  name: string;
  description: string;
  visibility: string;
  practiceQuestions: IPracticeQuestion[];
}

export interface IPracticeQuestion {
  id: string;
  question: string;
  visibility: string;
  answer: string;
}
