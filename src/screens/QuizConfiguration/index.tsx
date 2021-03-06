import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {useDispatch} from 'react-redux';

import {Creators} from '@store/ducks/quiz';

import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '@routes/MainStack';

type QuizConfScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'QuizConfiguration'
>;

import {
  AcceptModal,
  Button,
  Container,
  Footer,
  Header,
  Input,
  InputContainer,
  Text,
  Title,
} from './styles';

const QuizConfiguration: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<QuizConfScreenNavigationProp>();

  const [quantity, setQuantity] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);

  const [showResume, setShowResume] = useState<boolean>(false);

  function handleChangeValue(newValue: string) {
    const isInteger = Number.isInteger(+newValue);

    if (!isInteger || newValue === '0') {
      setIsValid(false);
    } else {
      setIsValid(true);
    }

    setQuantity(newValue);
  }

  function handleStartQuiz() {
    dispatch(Creators.startQuiz());
    setShowResume(false);
    navigation.navigate('Quiz', {
      quantity,
    });
  }

  function handleGoBack() {
    navigation.goBack();
  }

  function handleOpenResume() {
    setShowResume(true);
  }

  return (
    <Container>
      <AcceptModal
        visible={showResume}
        title="Resume"
        subtitle={`${quantity} questions`}
        onCancel={() => setShowResume(false)}
        onAccept={handleStartQuiz}
      />
      <Header>
        <Text category="h5">Start new quiz</Text>
        <Button onPress={handleGoBack} appearance="outline">
          Cancel
        </Button>
      </Header>

      <Title category="h6" appearance="hint">
        Enter the desired number of questions
      </Title>
      <InputContainer>
        <Input
          value={quantity}
          size="large"
          label="Number of questions"
          placeholder="Enter the desired number of questions"
          onChangeText={handleChangeValue}
          keyboardType="number-pad"
        />
      </InputContainer>

      <Footer>
        <Button
          onPress={handleOpenResume}
          disabled={!isValid || quantity === ''}
          appearance="filled">
          Go to questions
        </Button>
      </Footer>
    </Container>
  );
};

export default QuizConfiguration;
