import styled from 'styled-components/native';
import {
  Layout,
  Text as EvaText,
  Input as EvaInput,
  Button as EvaButton,
} from '@ui-kitten/components';
import {View as MotiView} from 'moti';

const animationConfig = {
  from: {
    translateY: -20,
    opacity: 0,
  },
  to: {
    translateY: 0,
    opacity: 1,
  },
};

export const Container = styled(Layout)`
  flex: 1;
  padding: ${props => props.theme.constants.PADDING.big}px
    ${props => props.theme.constants.PADDING.giant}px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled(EvaText)`
  text-align: center;
`;

export const Input = styled(EvaInput)`
  margin: ${props => props.theme.constants.PADDING.giant}px 0;
`;

export const Button = styled(EvaButton)``;

export const AnimatedView = styled(MotiView).attrs({
  from: animationConfig.from,
  animate: animationConfig.to,
  transition: {type: 'timing'},
})`
  width: 100%;
`;
