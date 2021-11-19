import {useState, useEffect} from 'react';

import api from '@services/api';

export type Question = {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

function useFetchQuestions(quantity: string) {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    async function loadQuestions() {
      setLoading(true);
      const response = await api.get(`?amount=${quantity}`);
      const questionsResponse: Question[] = response.data.results;

      setQuestions(questionsResponse);
      //   setActiveQuestion(questionsResponse[0]);
      //   setActiveQuestionIndex(0);
      setLoading(false);
    }

    loadQuestions();
  }, [quantity]);

  return {loading, questions};
}

export default useFetchQuestions;
