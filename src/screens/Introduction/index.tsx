import React, {useState} from 'react';

import {AnimatedView, Button, Container, Input, Text} from './styles';

const Introduction: React.FC = () => {
  const [name, setName] = useState('');

  return (
    <Container>
      <AnimatedView>
        <Text category="h5">Welcome! What can we call you? 😄</Text>
      </AnimatedView>
      <AnimatedView delay={300}>
        <Input
          value={name}
          size="large"
          label="Name"
          placeholder="Your name"
          onChangeText={setName}
        />
      </AnimatedView>
      <AnimatedView delay={400}>
        <Button disabled={!name}>Confirm</Button>
      </AnimatedView>
    </Container>
  );
};

export default Introduction;
