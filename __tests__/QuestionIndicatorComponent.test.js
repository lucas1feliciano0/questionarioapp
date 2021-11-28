import 'react-native';
import React from 'react';
import {toHaveStyle} from '@testing-library/jest-native';

import {render} from '../Provider';

import QuestionIndicator from '@components/QuestionIndicator';

describe('QuestionIndicator Component', () => {
  expect.extend({toHaveStyle});

  it('should render seven indicators', () => {
    const questionQuantity = 7;
    const {getAllByA11yLabel} = render(
      <QuestionIndicator
        number={questionQuantity}
        indicatorProps={{
          accessibilityLabel: 'Question Indicator',
        }}
      />,
    );

    expect(getAllByA11yLabel('Question Indicator').length).toBe(7);
  });

  it('should render the active indicator with the primary color', () => {
    const questionQuantity = 3;
    const activeIndicator = 2;

    const {getAllByA11yLabel} = render(
      <QuestionIndicator
        number={questionQuantity}
        activeIndicator={activeIndicator}
        indicatorProps={{
          accessibilityLabel: 'Question Indicator',
        }}
      />,
    );

    expect(
      getAllByA11yLabel('Question Indicator')[activeIndicator],
    ).toHaveStyle({
      backgroundColor: '#6A5AE0',
    });
  });
});
