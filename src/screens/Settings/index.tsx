import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-toast-message';

import {Creators} from '@store/ducks/user';
import {RootState} from '@store/ducks';

import {
  AcceptModal,
  Button,
  Container,
  Header,
  Input,
  InputContainer,
  Text,
} from './styles';

const Settings: React.FC = () => {
  const dispatch = useDispatch();

  const name = useSelector((state: RootState) => state.user.name);

  const [newName, setNewName] = useState(name);
  const [showDeleteConfirmation, setshowDeleteConfirmation] = useState(false);

  function handleSubmitChanges() {
    dispatch(Creators.setName(newName));
    Toast.show({
      type: 'success',
      text1: 'Success!',
      text2: 'Saved changes.',
    });
  }

  function handleShowDeleteModal() {
    setshowDeleteConfirmation(true);
  }

  function handleDelete() {
    setshowDeleteConfirmation(false);
    //TODO: implement delete all data
  }

  return (
    <Container>
      <AcceptModal
        visible={showDeleteConfirmation}
        title="Delete data"
        subtitle="Are you sure you want to delete all your data?"
        onCancel={() => setshowDeleteConfirmation(false)}
        onAccept={handleDelete}
        iconName="alert-triangle-outline"
        acceptText="Yes, delete"
      />
      <Header>
        <Text category="h6" appearance="hint">
          Settings
        </Text>
      </Header>
      <InputContainer>
        <Input
          value={newName}
          size="large"
          label="Name"
          placeholder="Your name"
          onChangeText={setNewName}
        />
      </InputContainer>

      <Button onPress={handleSubmitChanges}>Save</Button>
      <Button
        onPress={handleShowDeleteModal}
        status="danger"
        appearance="outline">
        Delete data
      </Button>
    </Container>
  );
};

export default Settings;
