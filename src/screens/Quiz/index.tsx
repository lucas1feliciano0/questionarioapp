import React, {useEffect, useMemo, useState} from 'react';
import {RouteProp, useNavigation} from '@react-navigation/core';
import Markdown from 'react-native-markdown-display';
import {StackNavigationProp} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';

import {Alternative as AlternativeProps, Question} from '../../../types';

import {Creators} from '@store/ducks/quiz';
import {RootStackParamList} from '@routes/MainStack';

type QuizScreenRouteProp = RouteProp<RootStackParamList, 'Quiz'>;

type QuizScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Quiz'>;

import useFetchQuestions from '@hooks/useFetchQuestions';
import useBackListener from '@hooks/useBackListener';

import {
  AcceptModal,
  Alternative,
  AlternativeContainer,
  AnimatedView,
  Button,
  Container,
  Footer,
  Header,
  LoadingModal,
  QuestionContainer,
  QuestionIndicator,
  Text,
} from './styles';
import {AnimatePresence} from 'framer-motion';
import {RootState} from '@store/ducks';

interface IProps {
  route: QuizScreenRouteProp;
}

const Quiz: React.FC<IProps> = ({route}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<QuizScreenNavigationProp>();

  const activeQuiz = useSelector((state: RootState) => state.quiz.activeQuiz);

  const [selectedAlternative, setSelectedAlternative] = useState<number>();

  const [activeQuestion, setActiveQuestion] = useState<Question>();
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);

  const [showAnswer, setShowAnswer] = useState(false);
  const [showQuitModal, setShowQuitModal] = useState<boolean>(false);

  const quantity = route.params.quantity;

  const {loading, questions} = useFetchQuestions(quantity);

  function shuffleAlternatives(alternativesToShuffle: AlternativeProps[]) {
    const alternatives = alternativesToShuffle.sort(() => 0.5 - Math.random());

    return alternatives;
  }

  const alternatives = useMemo(() => {
    if (activeQuestion) {
      const incorrectAnswers =
        activeQuestion?.incorrect_answers?.map(item => ({
          title: item,
          correct: false,
        })) || [];

      const formattedAlternatives: AlternativeProps[] = [
        ...incorrectAnswers,
        {title: activeQuestion.correct_answer, correct: true},
      ];

      return shuffleAlternatives(formattedAlternatives);
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

  function handleAnswerQuestion() {
    if (activeQuestion && alternatives && selectedAlternative !== undefined) {
      const answeredQuestion: Question = {
        question: activeQuestion.question,
        correct_answer: activeQuestion.correct_answer,
        selectedAnwser: alternatives[selectedAlternative].title,
      };

      dispatch(Creators.addQuestion(answeredQuestion));
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
      navigation.navigate('QuizResume', {
        quiz: activeQuiz,
      });
      dispatch(Creators.finishQuiz());
    }
  }

  function handleSubmit() {
    if (showAnswer) {
      handleAnswerQuestion();
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
      <AnimatePresence exitBeforeEnter>
        {!!activeQuestion && (
          <AnimatedView key={activeQuestion.question}>
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
          </AnimatedView>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Quiz;
