import React, {useState} from 'react';
import {RouteProp} from '@react-navigation/core';

import {RootStackParamList} from '@routes/MainStack';

type ChatScreenRouteProp = RouteProp<RootStackParamList, 'Quiz'>;

import {
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

interface IProps {
  route: ChatScreenRouteProp;
}

const Quiz: React.FC<IProps> = ({route}) => {
  const [selectedAlternative, setSelectedAlternative] = useState<
    number | undefined
  >();
  const [showAnswer, setShowAnswer] = useState(false);

  const quantity = route.params.quantity;

  return (
    <Container>
      <Header>
        <Text category="h5">
          Question 1<Text category="s1">/{quantity}</Text>
        </Text>
        <Button appearance="outline">Quit</Button>
      </Header>
      <QuestionIndicator number={7} />
      <QuestionContainer>
        <Text category="h6">When was Steam first released?</Text>
        <AlternativeContainer
          selectedIndex={selectedAlternative}
          onChange={index => setSelectedAlternative(index)}>
          <Alternative title="Teste" showAnswer={showAnswer} />
          <Alternative title="Teste" correct showAnswer={showAnswer} />
          <Alternative title="Teste" showAnswer={showAnswer} />
          <Alternative title="Teste" showAnswer={showAnswer} />
        </AlternativeContainer>
      </QuestionContainer>
      <Footer>
        <Button onPress={() => setShowAnswer(true)} appearance="filled">
          {showAnswer ? 'Next' : 'Validate'}
        </Button>
      </Footer>
    </Container>
  );
};

export default Quiz;
