import React from 'react';
import {Button, Divider, Icon, ListItem, useTheme} from '@ui-kitten/components';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/core';

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

type PLACEHOLDER_ITEM = {
  description: string;
};

const Home: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const theme = useTheme();

  const PLACEHOLDER_DATA: PLACEHOLDER_ITEM[] = new Array(4).fill({
    description: 'Description for Item',
  });

  const renderQuizAccessory = () => <Button size="tiny">OPEN</Button>;

  function handleNavigateToQuiz() {
    navigation.navigate('QuizConfiguration');
  }

  const renderQuiz = ({
    item,
    index,
  }: {
    item: {description: string};
    index: number;
  }) => (
    <ListItem
      title={`Quiz ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      accessoryLeft={props => (
        <Icon {...props} name="checkmark-circle-2-outline" />
      )}
      accessoryRight={renderQuizAccessory}
    />
  );

  return (
    <Container>
      <Header>
        <Text category="h6" appearance="hint">
          Bem-vindo, <Text category="h6">Lucas</Text>
        </Text>
        <Button
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
            start a new quiz by clicking here
          </Text>
        </TextContainer>
      </InitializeNewQuizButton>
      <Title category="s1" appearance="hint">
        Last quizzes
      </Title>
      <QuizzesList
        data={PLACEHOLDER_DATA}
        renderItem={renderQuiz}
        ItemSeparatorComponent={Divider}
      />
    </Container>
  );
};

export default Home;