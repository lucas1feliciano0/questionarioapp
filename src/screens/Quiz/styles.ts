import styled from 'styled-components/native';
import {
  Layout,
  Text as EvaText,
  Button as EvaButton,
  RadioGroup,
} from '@ui-kitten/components';
import {View as MotiView} from 'moti';

const animationConfig = {
  from: {
    translateX: 100,
    opacity: 0,
  },
  to: {
    translateX: 0,
    opacity: 1,
  },
  exit: {
    opacity: 0,
    translateX: -200,
  },
};

import AcceptModalComponent from '@components/AcceptModal';
import QuestionIndicatorComponent from '@components/QuestionIndicator';
import AlternativeComponent from '@components/Alternative';
import LoadingModalComponent from '@components/LoadingModal';

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

export const AcceptModal = styled(AcceptModalComponent)``;

export const LoadingModal = styled(LoadingModalComponent)``;

export const AnimatedView = styled(MotiView).attrs({
  from: animationConfig.from,
  animate: animationConfig.to,
  exit: animationConfig.exit,
  transition: {type: 'timing'},
})`
  flex: 1;
  width: 100%;
`;
