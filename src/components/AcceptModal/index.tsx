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
  title: string;
  visible: boolean;
  onAccept: () => void;
  onCancel: () => void;
  subtitle?: string;
  iconName?: string;
  acceptText?: string;
  cancelText?: string;
}

const AcceptModal: React.FC<IProps> = ({
  title,
  subtitle,
  visible,
  onAccept,
  onCancel,
  iconName = 'star',
  acceptText = 'Start',
  cancelText = 'Cancel',
}) => {
  const theme = useTheme();

  function handleAccept() {
    onAccept();
  }

  return (
    <Modal visible={visible} animationType="fade">
      <Backdrop>
        <Container>
          <Header>
            <Text>{title}</Text>
          </Header>
          <QuestionResumeContainer>
            <Icon fill={theme['color-basic-500']} name={iconName} />
            {subtitle && <Text appearance="hint">{subtitle}</Text>}
          </QuestionResumeContainer>
          <Footer>
            <Button onPress={handleAccept} appearance="filled">
              {acceptText}
            </Button>
            <Button onPress={onCancel} appearance="outline" status="danger">
              {cancelText}
            </Button>
          </Footer>
        </Container>
      </Backdrop>
    </Modal>
  );
};

export default AcceptModal;
