import styled from 'styled-components/native';
import {
  Layout,
  Text as EvaText,
  Button as EvaButton,
  RadioGroup,
} from '@ui-kitten/components';

import QuestionIndicatorComponent from '@components/QuestionIndicator';
import AlternativeComponent from '@components/Alternative';

export const Container = styled(Layout)`
  flex: 1;
  padding: ${props => props.theme.constants.PADDING.medium}px
    ${props => props.theme.constants.PADDING.small}px;
`;

export const Header = styled(Layout).attrs({
  level: '2',
})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.constants.PADDING.big}px
    ${props => props.theme.constants.PADDING.medium}px;
  border-radius: ${props => props.theme.constants.BORDER_RADIUS.large}px;
`;

export const Text = styled(EvaText)``;

export const QuestionIndicator = styled(QuestionIndicatorComponent)`
  margin: ${props => props.theme.constants.PADDING.medium}px 0;
`;

export const Button = styled(EvaButton)``;

export const QuestionContainer = styled(Layout)`
  flex: 1;
  margin: ${props => props.theme.constants.PADDING.large}px
    ${props => props.theme.constants.PADDING.small}px;
`;

export const AlternativeContainer = styled(RadioGroup)`
  flex: 1;
  justify-content: center;
  margin: ${props => props.theme.constants.PADDING.large}px
    ${props => props.theme.constants.PADDING.small}px;
`;

export const Alternative = styled(AlternativeComponent)``;

export const Footer = styled(Layout).attrs({
  level: '1',
})`
  padding: ${props => props.theme.constants.PADDING.big}px
    ${props => props.theme.constants.PADDING.medium}px;
`;
