export type Question = {
  question: string;
  correct_answer: string;
  incorrect_answers?: string[];
  selectedAnwser?: string;
};

export type Alternative = {
  title: string;
  correct?: boolean;
};

export type Quiz = {
  questions: Question[];
};
