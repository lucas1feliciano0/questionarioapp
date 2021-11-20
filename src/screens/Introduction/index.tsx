import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import {Creators} from '@store/ducks/user';

import {AnimatedView, Button, Container, Input, Text} from './styles';

const Introduction: React.FC = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  function handleSetName() {
    dispatch(Creators.setName(name));
  }

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
        <Button onPress={handleSetName} disabled={!name}>
          Confirm
        </Button>
      </AnimatedView>
    </Container>
  );
};

export default Introduction;
