import React from 'react';
import {Button, Divider, Icon, ListItem, useTheme} from '@ui-kitten/components';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';

import {Quiz} from '../../../types';

import {RootState} from '@store/ducks';

import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '@routes/MainStack';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

import CardBackground from '@assets/svg/card-bg.svg';

import {
  Container,
  Header,
  Illustration,
  IllustrationContainer,
  InitializeNewQuizButton,
  NewQuizButtonBackground,
  QuizzesList,
  Text,
  TextContainer,
  Title,
} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const theme = useTheme();

  const name = useSelector((state: RootState) => state.user.name);
  const lastQuizzes = useSelector((state: RootState) => state.quiz.lastQuizzes);

  function handleNavigateToQuiz() {
    navigation.navigate('QuizConfiguration');
  }

  function handleNavigateToSettings() {
    navigation.navigate('Settings');
  }

  function handleNavigateToQuizResume(quiz: Quiz) {
    navigation.navigate('QuizResume', {
      quiz,
    });
  }

  const renderQuiz = ({item, index}: {item: Quiz; index: number}) => {
    const totalQuestions = item.questions.length;
    const correctQuestions =
      item.questions.filter(
        question => question.correct_answer === question.selectedAnwser,
      ) || 0;

    return (
      <ListItem
        title={`Quiz ${index + 1}`}
        description={`${correctQuestions.length}/${totalQuestions}`}
        accessoryLeft={props => (
          <Icon {...props} name="checkmark-circle-2-outline" />
        )}
        accessoryRight={() => (
          <Button onPress={() => handleNavigateToQuizResume(item)} size="tiny">
            OPEN
          </Button>
        )}
      />
    );
  };

  return (
    <Container>
      <Header>
        <Text category="h6" appearance="hint">
          Welcome, <Text category="h6">{name}</Text>
        </Text>
        <Button
          onPress={handleNavigateToSettings}
          accessoryLeft={props => <Icon {...props} name="settings-outline" />}
        />
      </Header>
      <InitializeNewQuizButton
        onPress={handleNavigateToQuiz}
        backgroundColor={theme['color-primary-default']}>
        <NewQuizButtonBackground>
          <CardBackground />
        </NewQuizButtonBackground>
        <IllustrationContainer>
          <Illustration width={RFValue(150)} height={RFValue(150)} />
        </IllustrationContainer>
        <TextContainer>
          <Title category="h4">Play and win!</Title>
          <Text category="s2" appearance="hint">
            click here to start a new quiz
          </Text>
        </TextContainer>
      </InitializeNewQuizButton>
      <Title category="s1" appearance="hint">
        Last quizzes
      </Title>
      <QuizzesList
        data={lastQuizzes}
        renderItem={renderQuiz}
        ItemSeparatorComponent={Divider}
      />
    </Container>
  );
};

export default Home;
