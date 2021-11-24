import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {RouteProp, useNavigation} from '@react-navigation/core';
import {Divider, useTheme} from '@ui-kitten/components';
import {StackNavigationProp} from '@react-navigation/stack';

import {Question} from '../../../types';

import {RootStackParamList} from '@routes/MainStack';

type QuizResumeScreenProps = RouteProp<RootStackParamList, 'QuizResume'>;

type QuizResumeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'QuizResume'
>;

import CardBackground from '@assets/svg/card-bg.svg';

import useBackListener from '@hooks/useBackListener';

import {
  Container,
  Illustration,
  IllustrationContainer,
  ResumeCard,
  ResumeCardBackground,
  Button,
  TextContainer,
  Title,
  Text,
  Row,
  InfoCard,
  InfoContainer,
  AsnwerResumeItem,
  AsnwerResumeList,
} from './styles';

export type AnswerResume = {
  selectedQuestion: {
    title: string;
  };
  correctQuestion: {
    title: string;
  };
  isCorrect?: boolean;
};

export interface ListRenderItemInfo<ItemT> {
  item: ItemT;

  index: number;

  separators: {
    highlight: () => void;
    unhighlight: () => void;
    updateProps: (select: 'leading' | 'trailing', newProps: any) => void;
  };
}

interface IProps {
  route: QuizResumeScreenProps;
}

const QuizResume: React.FC<IProps> = ({route}) => {
  const navigation = useNavigation<QuizResumeScreenNavigationProp>();
  const theme = useTheme();

  const quiz = route.params.quiz;
  const totalAnswers = quiz?.questions.length || 0;

  const correctAnswers =
    quiz?.questions.filter(
      question => question.correct_answer === question.selectedAnwser,
    ) || [];

  function handleBackToHome() {
    navigation.popToTop();
  }

  const renderAnswer = ({item}: {item: Question; index: number}) => (
    <AsnwerResumeItem
      selectedQuestion={item.selectedAnwser || ''}
      correctQuestion={item.correct_answer}
      isCorrect={item.correct_answer === item.selectedAnwser}
    />
  );

  function getLabel() {
    if (correctAnswers?.length >= totalAnswers / 2) {
      return 'Good job!';
    }

    return "It wasn't this time 😢";
  }

  useBackListener(() => {
    handleBackToHome();
    return true;
  });

  return (
    <Container>
      <InfoContainer>
        <ResumeCard backgroundColor={theme['color-default-primary']}>
          <ResumeCardBackground>
            <CardBackground />
          </ResumeCardBackground>
          <IllustrationContainer>
            <Illustration width={RFValue(170)} height={RFValue(170)} />
          </IllustrationContainer>
          <TextContainer>
            <Title category="h4">{getLabel()}</Title>
            <Title category="s2">
              You won +{correctAnswers?.length} points!
            </Title>
          </TextContainer>
        </ResumeCard>
        <Row>
          <InfoCard>
            <Title category="s2" appearance="hint">
              Correct answers
            </Title>
            <Text category="h6">{correctAnswers?.length || 0} questions</Text>
          </InfoCard>
          <InfoCard>
            <Title category="s2" appearance="hint">
              Incorrect answers
            </Title>
            <Text category="h6">
              {totalAnswers || 0 - correctAnswers?.length} questions
            </Text>
          </InfoCard>
        </Row>
        <Title category="s2" appearance="hint">
          Answers
        </Title>
        <AsnwerResumeList
          data={quiz?.questions}
          renderItem={renderAnswer}
          ItemSeparatorComponent={Divider}
        />
      </InfoContainer>
      <Button onPress={handleBackToHome} size="large">
        Back to home
      </Button>
    </Container>
  );
};

export default QuizResume;
