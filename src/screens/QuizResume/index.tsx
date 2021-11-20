import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/core';
import {Divider, useTheme} from '@ui-kitten/components';

import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '@routes/MainStack';

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

const QuizResume: React.FC = () => {
  const navigation = useNavigation<QuizResumeScreenNavigationProp>();
  const theme = useTheme();

  const PLACEHOLDER_DATA: AnswerResume[] = [
    {
      selectedQuestion: {
        title: 'Test',
      },
      correctQuestion: {
        title: 'Test',
      },
      isCorrect: true,
    },
    {
      selectedQuestion: {
        title: 'Test',
      },
      correctQuestion: {
        title: 'Test',
      },
      isCorrect: false,
    },
    {
      selectedQuestion: {
        title: 'Test',
      },
      correctQuestion: {
        title: 'Test',
      },
      isCorrect: true,
    },
    {
      selectedQuestion: {
        title: 'Test',
      },
      correctQuestion: {
        title: 'Test',
      },
      isCorrect: true,
    },
    {
      selectedQuestion: {
        title: 'Test',
      },
      correctQuestion: {
        title: 'Test',
      },
      isCorrect: true,
    },
  ];

  function handleBackToHome() {
    navigation.popToTop();
  }

  const renderAnswer = ({item}: {item: AnswerResume; index: number}) => (
    <AsnwerResumeItem
      selectedQuestion={item.selectedQuestion}
      correctQuestion={item.correctQuestion}
      isCorrect={item.isCorrect}
    />
  );

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
            <Title category="h4">Good job!</Title>
            <Title category="s2">You won +7 points!</Title>
          </TextContainer>
        </ResumeCard>
        <Row>
          <InfoCard>
            <Title category="s2" appearance="hint">
              Correct answers
            </Title>
            <Text category="h6">7 questions</Text>
          </InfoCard>
          <InfoCard>
            <Title category="s2" appearance="hint">
              Incorrect answers
            </Title>
            <Text category="h6">3 questions</Text>
          </InfoCard>
        </Row>
        <Title category="s2" appearance="hint">
          Answers
        </Title>
        <AsnwerResumeList
          data={PLACEHOLDER_DATA}
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
