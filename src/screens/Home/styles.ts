import styled from 'styled-components/native';
import {Layout, List, Text as EvaText} from '@ui-kitten/components';

import QuizIllustration from '@assets/svg/quiz.svg';
import {Quiz} from '../../../types';
import {FlatListProps} from 'react-native';

export const Container = styled(Layout)`
  flex: 1;
  padding: ${props => props.theme.constants.PADDING.big}px
    ${props => props.theme.constants.PADDING.medium}px;
`;

export const Text = styled(EvaText)``;

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

export const QuizzesList = styled(List)<FlatListProps<Quiz>>`
  max-height: 100%;
  border-radius: ${props => props.theme.constants.BORDER_RADIUS.large}px;
`;

export const IllustrationContainer = styled.View`
  flex: 1;
  margin-right: ${props => props.theme.constants.PADDING.small}px;
  align-items: center;
`;

export const Illustration = QuizIllustration;

export const TextContainer = styled.View`
  flex: 1;
`;

export const Title = styled(EvaText)`
  margin-bottom: ${props => props.theme.constants.PADDING.small}px;
`;

export const NewQuizButtonBackground = styled.View`
  position: absolute;
  opacity: 0.8;
`;

export const InitializeNewQuizButton = styled.TouchableOpacity<{
  backgroundColor: string;
}>`
  width: 100%;
  height: 28%;
  border-radius: ${props => props.theme.constants.BORDER_RADIUS.large}px;
  background-color: ${props => props.backgroundColor};
  margin: ${props => props.theme.constants.PADDING.large}px 0;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  z-index: 9999;
`;
