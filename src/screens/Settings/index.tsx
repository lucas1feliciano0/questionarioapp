import React from 'react';

import {Button, Container, Header, Input, InputContainer, Text} from './styles';

const Settings: React.FC = () => {
  function handleChangeValue(newValue: string) {}
  return (
    <Container>
      <Header>
        <Text category="h6" appearance="hint">
          Settings
        </Text>
      </Header>
      <InputContainer>
        <Input
          value="Lucas"
          size="large"
          label="Name"
          placeholder="Your name"
          onChangeText={handleChangeValue}
          keyboardType="number-pad"
        />
      </InputContainer>

      <Button status="danger" appearance="outline">
        Delete data
      </Button>
    </Container>
  );
};

export default Settings;
