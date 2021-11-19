import React, {useEffect, useMemo, useState} from 'react';
import {RouteProp, useNavigation} from '@react-navigation/core';
import Markdown from 'react-native-markdown-display';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '@routes/MainStack';

type QuizScreenRouteProp = RouteProp<RootStackParamList, 'Quiz'>;

type QuizScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Quiz'>;

import {
  AcceptModal,
  Alternative,
  AlternativeContainer,
  Button,
  Container,
  Footer,
  Header,
  LoadingModal,
  QuestionContainer,
  QuestionIndicator,
  Text,
} from './styles';
import useFetchQuestions, {Question} from '@hooks/useFetchQuestions';
import useBackListener from '@hooks/useBackListener';

interface IProps {
  route: QuizScreenRouteProp;
}

const Quiz: React.FC<IProps> = ({route}) => {
  const navigation = useNavigation<QuizScreenNavigationProp>();

  const [selectedAlternative, setSelectedAlternative] = useState<
    number | undefined
  >();

  const [activeQuestion, setActiveQuestion] = useState<Question | null>(null);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);

  const [showAnswer, setShowAnswer] = useState(false);
  const [showQuitModal, setShowQuitModal] = useState<boolean>(false);

  const quantity = route.params.quantity;

  const {loading, questions} = useFetchQuestions(quantity);

  const alternatives = useMemo(() => {
    if (activeQuestion) {
      const formattedAlternatives = [
        ...activeQuestion.incorrect_answers.map(item => ({
          title: item,
          correct: false,
        })),
        {title: activeQuestion.correct_answer, correct: true},
      ];
      const shuffledAlternatives = formattedAlternatives.sort(
        () => 0.5 - Math.random(),
      );
      return shuffledAlternatives;
    }
  }, [activeQuestion]);

  function renderAlternatives() {
    if (alternatives) {
      return alternatives.map((item, index) => (
        <Alternative
          title={item.title}
          key={index}
          correct={item.correct}
          showAnswer={showAnswer}
        />
      ));
    }
  }

  function handleNextQuestion() {
    const nextQuestionIndex = activeQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setActiveQuestion(questions[nextQuestionIndex]);
      setActiveQuestionIndex(nextQuestionIndex);
      setShowAnswer(false);
      setSelectedAlternative(undefined);
    } else {
      navigation.navigate('Home');
    }
  }

  function handleSubmit() {
    if (showAnswer) {
      handleNextQuestion();
    } else {
      setShowAnswer(true);
    }
  }

  function handleQuizQuiz() {
    setShowQuitModal(false);
    navigation.navigate('Home');
  }

  useBackListener(() => {
    setShowQuitModal(true);
    return true;
  });

  useEffect(() => {
    if (questions && !activeQuestion) {
      setActiveQuestion(questions[0]);
    }
  }, [activeQuestion, questions]);

  return (
    <Container>
      <LoadingModal
        visible={loading}
        title="Loading questions"
        subtitle="Fetching..."
        iconName="loader-outline"
      />

      <AcceptModal
        visible={showQuitModal}
        title="Want to leave the quiz?"
        iconName="log-out-outline"
        acceptText="Yes, leave now"
        onCancel={() => setShowQuitModal(false)}
        onAccept={handleQuizQuiz}
      />
      <Header>
        <Text category="h5">
          Question {activeQuestionIndex + 1}
          <Text category="s1">/{quantity}</Text>
        </Text>
        <Button onPress={() => setShowQuitModal(true)} appearance="outline">
          Quit
        </Button>
      </Header>
      <QuestionIndicator
        activeIndicator={activeQuestionIndex}
        number={parseInt(quantity, 10)}
      />
      {activeQuestion && (
        <>
          <QuestionContainer>
            <Markdown
              style={{
                body: {
                  color: 'white',
                  fontSize: 20,
                  fontFamily: 'Lemon-Medium',
                },
              }}>
              {activeQuestion.question}
            </Markdown>
            <AlternativeContainer
              selectedIndex={selectedAlternative}
              onChange={index => {
                if (!showAnswer) {
                  setSelectedAlternative(index);
                }
              }}>
              {renderAlternatives()}
            </AlternativeContainer>
          </QuestionContainer>
          <Footer>
            {activeQuestionIndex + 1 === questions.length ? (
              <Button
                disabled={selectedAlternative === undefined}
                onPress={handleSubmit}
                appearance="filled">
                {showAnswer ? 'Finish' : 'Validate'}
              </Button>
            ) : (
              <Button
                disabled={selectedAlternative === undefined}
                onPress={handleSubmit}
                appearance="filled">
                {showAnswer ? 'Next' : 'Validate'}
              </Button>
            )}
          </Footer>
        </>
      )}
    </Container>
  );
};

export default Quiz;
