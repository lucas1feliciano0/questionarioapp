import React, {useEffect, useState} from 'react';
import {RouteProp, useNavigation} from '@react-navigation/core';
import Markdown from 'react-native-markdown-display';
import {StackNavigationProp} from '@react-navigation/stack';

import api from '@services/api';

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
  QuestionContainer,
  QuestionIndicator,
  Text,
} from './styles';

type Question = {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};
interface IProps {
  route: QuizScreenRouteProp;
}

const Quiz: React.FC<IProps> = ({route}) => {
  const navigation = useNavigation<QuizScreenNavigationProp>();

  const [selectedAlternative, setSelectedAlternative] = useState<
    number | undefined
  >();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [activeQuestion, setActiveQuestion] = useState<Question | null>(null);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);

  const [showAnswer, setShowAnswer] = useState(false);
  const [showQuitModal, setShowQuitModal] = useState<boolean>(false);

  const quantity = route.params.quantity;

  function renderAlternatives(
    incorrectAnswers: string[],
    correctAnswer: string,
  ) {
    const alternatives = [
      ...incorrectAnswers.map(item => ({title: item, correct: false})),
      {title: correctAnswer, correct: true},
    ];

    return alternatives.map((item, index) => (
      <Alternative
        title={item.title}
        key={index}
        correct={item.correct}
        showAnswer={showAnswer}
      />
    ));
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

  useEffect(() => {
    async function loadQuestions() {
      const response = await api.get(`?amount=${quantity}`);
      const questionsResponse: Question[] = response.data.results;

      setQuestions(questionsResponse);
      setActiveQuestion(questionsResponse[0]);
      setActiveQuestionIndex(0);
    }

    loadQuestions();
  }, [quantity]);

  return (
    <Container>
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
              {renderAlternatives(
                activeQuestion.incorrect_answers,
                activeQuestion.correct_answer,
              )}
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
