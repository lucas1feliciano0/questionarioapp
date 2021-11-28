import 'react-native';
import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {toHaveStyle} from '@testing-library/jest-native';

import {render} from '../Provider';

import AcceptModal from '@components/AcceptModal';

describe('AcceptModal Component', () => {
  expect.extend({toHaveStyle});

  it('should call the function passed on "onAccept" prop', () => {
    const title = 'test loading modal title';
    const subtitle = 'test loading modal subtitle';
    const mockAccept = jest.fn();

    const {getByText} = render(
      <AcceptModal
        title={title}
        visible
        subtitle={subtitle}
        acceptText="accept-test"
        onAccept={mockAccept}
      />,
    );

    const acceptButton = getByText('accept-test');

    fireEvent.press(acceptButton);
    expect(mockAccept).toBeCalledWith();
  });

  it('should call the function passed on "onCancel" prop', () => {
    const title = 'test loading modal title';
    const subtitle = 'test loading modal subtitle';
    const mockCancel = jest.fn();

    const {getByText} = render(
      <AcceptModal
        title={title}
        visible
        subtitle={subtitle}
        cancelText="cancel-test"
        onCancel={mockCancel}
      />,
    );

    const cancelButton = getByText('cancel-test');

    fireEvent.press(cancelButton);
    expect(mockCancel).toBeCalledWith();
  });
});
