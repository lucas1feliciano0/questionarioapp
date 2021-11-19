import styled from 'styled-components/native';
import {Radio} from '@ui-kitten/components';

function getBorderColor(
  showAnswer: boolean,
  colors: {
    checked: string;
    unchecked: string;
    correct: string;
    wrong: string;
  },
  checked?: boolean,
  correct?: boolean,
) {
  if (showAnswer) {
    return correct ? colors.correct : colors.wrong;
  }

  return checked ? colors.checked : colors.unchecked;
}

export const Container = styled(Radio)<{
  activeColor: string;
  inactiveColor: string;
  correctColor: string;
  wrongColor: string;
  showAnswer: boolean;
  checked?: boolean;
  correct?: boolean;
}>`
  padding: ${props => props.theme.constants.PADDING.medium}px;
  border-width: 2px;
  border-radius: ${props => props.theme.constants.BORDER_RADIUS.large}px;

  border-color: ${props =>
    getBorderColor(
      props.showAnswer,
      {
        checked: props.activeColor,
        unchecked: props.inactiveColor,
        correct: props.correctColor,
        wrong: props.wrongColor,
      },
      props.checked,
      props.correct,
    )};
`;
