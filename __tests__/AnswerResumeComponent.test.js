import 'react-native';
import React from 'react';
import {fireEvent, waitFor} from '@testing-library/react-native';
import {toHaveStyle} from '@testing-library/jest-native';

import {render} from '../Provider';

import AnswerResume from '@components/AnswerResumeItem';

describe('AnswerResume Component', () => {
  expect.extend({toHaveStyle});

  it('should render correctly', () => {
    render(
      <AnswerResume
        selectedAnswer="selected-question-test"
        correctAnswer="correct-question-test"
        isCorrect={false}
      />,
    );
  });

  it('should render the selected answer', () => {
    const selectedAnswer = 'selected-question-test';
    const {getByText} = render(
      <AnswerResume
        selectedAnswer={selectedAnswer}
        correctAnswer="correct-question-test"
        isCorrect={false}
      />,
    );

    expect(getByText(selectedAnswer)).toBeTruthy();
  });

  it('should render a "show correct" button', () => {
    const selectedAnswer = 'selected-question-test';
    const {getByText} = render(
      <AnswerResume
        selectedAnswer={selectedAnswer}
        correctAnswer="correct-question-test"
        isCorrect={false}
      />,
    );

    expect(getByText('Show correct')).toBeTruthy();
  });

  it('should render the correct answer after press the "show correct" button', async () => {
    const selectedAnswer = 'selected-question-test';
    const correctAnswer = 'correct-question-test';
    const {getByText} = render(
      <AnswerResume
        selectedAnswer={selectedAnswer}
        correctAnswer={correctAnswer}
        isCorrect={false}
      />,
    );

    const showCorrectButton = getByText('Show correct');

    fireEvent.press(showCorrectButton);

    await waitFor(() => {
      expect(getByText(correctAnswer)).toBeTruthy();
    });
  });

  it('should hide the correct answer after press the "close" button', async () => {
    const selectedAnswer = 'selected-question-test';
    const correctAnswer = 'correct-question-test';
    const {getByText, queryByText} = render(
      <AnswerResume
        selectedAnswer={selectedAnswer}
        correctAnswer={correctAnswer}
        isCorrect={false}
      />,
    );

    const toggleButton = getByText('Show correct');

    fireEvent.press(toggleButton);
    fireEvent.press(toggleButton);

    await waitFor(() => {
      expect(queryByText(correctAnswer)).toBeFalsy();
    });
  });
});
