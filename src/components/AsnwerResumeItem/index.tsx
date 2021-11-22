import React, {useState} from 'react';
import {Button, Icon, useTheme} from '@ui-kitten/components';
import {RFValue} from 'react-native-responsive-fontsize';

import {
  Column,
  Container,
  CorrectAnswerContainer,
  InnerContainer,
  Label,
  Row,
  Text,
} from './styles';
import {LayoutAnimation} from 'react-native';

interface IProps {
  selectedQuestion: string;
  correctQuestion: string;
  isCorrect?: boolean;
  style?: [];
}

const AsnwerResumeItem: React.FC<IProps> = ({
  selectedQuestion,
  correctQuestion,
  isCorrect,
  style,
}) => {
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  function handleToggleOpen() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpen(!open);
  }

  return (
    <Container style={style}>
      <InnerContainer
        open={open}
        background={
          isCorrect ? theme['color-success-600'] : theme['color-danger-600']
        }>
        <Column>
          <Row>
            <Icon
              name={
                isCorrect
                  ? 'checkmark-circle-2-outline'
                  : 'close-circle-outline'
              }
              width={RFValue(20)}
              height={RFValue(20)}
              fill={theme[`color-basic-${isCorrect ? '100' : '500'}`]}
            />
            <Label
              appearance={!isCorrect ? 'hint' : 'default'}
              category="label">
              Selected
            </Label>
          </Row>
          <Text>{selectedQuestion}</Text>
        </Column>
        <Button onPress={handleToggleOpen} appearance="outline" size="tiny">
          {open ? 'Close' : 'Show correct'}
        </Button>
      </InnerContainer>
      {open && (
        <CorrectAnswerContainer background={theme['color-primary-600']}>
          <Row>
            <Icon
              name="checkmark-circle-2-outline"
              width={RFValue(20)}
              height={RFValue(20)}
              fill={theme['color-basic-500']}
            />
            <Label appearance="hint" category="label">
              Correct
            </Label>
          </Row>
          <Text>{correctQuestion}</Text>
        </CorrectAnswerContainer>
      )}
    </Container>
  );
};

export default AsnwerResumeItem;
