import React, {useState} from 'react';

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

const Quiz: React.FC = () => {
  const [selectedAlternative, setSelectedAlternative] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const quantity = 10;
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
