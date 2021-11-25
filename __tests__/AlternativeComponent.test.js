import 'react-native';
import React from 'react';
import {toHaveStyle} from '@testing-library/jest-native';

import {render} from '../Provider';

import Alternative from '@components/Alternative';

describe('Alternative Component', () => {
  expect.extend({toHaveStyle});

  it('should render correctly', () => {
    render(<Alternative title="test alternative" />);
  });

  it('should render the title correctly', () => {
    const title = 'test alternative';
    const {getByText} = render(<Alternative title={title} />);

    expect(getByText(title)).toBeTruthy();
  });

  it('should change its color to green if "show the answer" prop is true and is correct', () => {
    const title = 'test alternative';
    const {getByA11yLabel} = render(
      <Alternative
        title={title}
        correct
        showAnswer
        accessibilityLabel="Alternative"
      />,
    );

    expect(getByA11yLabel('Alternative')).toHaveStyle({
      borderColor: '#58B748',
    });
  });

  it('should change its color to green if "show the answer" prop is true and isnt correct', () => {
    const title = 'test alternative';
    const {getByA11yLabel} = render(
      <Alternative title={title} showAnswer accessibilityLabel="Alternative" />,
    );

    expect(getByA11yLabel('Alternative')).toHaveStyle({
      borderColor: '#B7486F',
    });
  });
});
