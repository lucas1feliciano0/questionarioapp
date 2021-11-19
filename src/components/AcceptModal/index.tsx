import React from 'react';
import {useTheme} from '@ui-kitten/components';

import {
  Backdrop,
  Button,
  Container,
  Footer,
  Header,
  Icon,
  Modal,
  QuestionResumeContainer,
  Text,
} from './styles';

interface IProps {
  visible: boolean;
  quantity: string;
  onAccept: (quantity: string) => void;
  onCancel: () => void;
}

const AcceptModal: React.FC<IProps> = ({
  visible,
  quantity,
  onAccept,
  onCancel,
}) => {
  const theme = useTheme();

  function handleAccept() {
    onAccept(quantity);
  }

  return (
    <Modal visible={visible} animationType="fade">
      <Backdrop>
        <Container>
          <Header>
            <Text>Resume</Text>
          </Header>
          <QuestionResumeContainer>
            <Icon
              fill={theme['color-basic-500']}
              name="star"
              animation="zoom"
            />
            <Text appearance="hint">{quantity} questions</Text>
          </QuestionResumeContainer>
          <Footer>
            <Button onPress={handleAccept} appearance="filled">
              Start
            </Button>
            <Button onPress={onCancel} appearance="outline" status="danger">
              Cancel
            </Button>
          </Footer>
        </Container>
      </Backdrop>
    </Modal>
  );
};

export default AcceptModal;
