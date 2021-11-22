import {createActions, createReducer} from 'reduxsauce';

import {Quiz, Question} from '../../../types';

type INITIAL_STATE_PROPS = {
  activeQuiz: Quiz | null;
  lastQuizzes: Quiz[];
};

// Types & Creators

export const {Types, Creators} = createActions(
  {
    startQuiz: [],
    addQuestion: ['question'],
    finishQuiz: [],
  },
  {prefix: '@quiz/'},
);

// Reducer

const INITIAL_STATE: INITIAL_STATE_PROPS = {
  activeQuiz: null,
  lastQuizzes: [],
};

// Handlers

export const startQuiz = (state = INITIAL_STATE) => {
  return {...state, activeQuiz: {questions: []}};
};

export const finishQuiz = (state = INITIAL_STATE) => {
  const lastQuizzesCopy = [...state.lastQuizzes];

  if (state.activeQuiz) {
    lastQuizzesCopy.push(state.activeQuiz);
  }
  return {...state, activeQuiz: null, lastQuizzes: lastQuizzesCopy};
};

export const addQuestion = (
  state = INITIAL_STATE,
  action: {question: Question},
) => {
  const activeQuizCopy = state.activeQuiz;
  activeQuizCopy?.questions.push(action.question);

  return {...state, activeQuiz: activeQuizCopy};
};

export const HANDLERS = {
  [Types.START_QUIZ]: startQuiz,
  [Types.FINISH_QUIZ]: finishQuiz,
  [Types.ADD_QUESTION]: addQuestion,
};

export default createReducer(INITIAL_STATE, HANDLERS);
