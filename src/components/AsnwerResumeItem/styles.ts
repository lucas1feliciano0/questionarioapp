import styled from 'styled-components/native';
import {Text as EvaText} from '@ui-kitten/components';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View``;

export const InnerContainer = styled.View<{
  background?: string;
  open?: boolean;
}>`
  width: 100%;
  background-color: ${props => props.background};
  border-radius: ${props => props.theme.constants.BORDER_RADIUS.big}px;
  padding: ${props => props.theme.constants.PADDING.medium}px;
  margin-bottom: ${props => RFValue(props.open ? 75 : 10)}px;
  flex-direction: row;
  justify-content: space-between;

  shadow-color: #000000;
  shadow-offset: 0 5px;
  shadow-opacity: 0.34;
  shadow-radius: 6.27px;

  elevation: 10;
`;

export const CorrectAnswerContainer = styled(InnerContainer)`
  position: absolute;
  top: ${RFValue(60)}px;
  background-color: ${props => props.background};
  border-radius: ${props => props.theme.constants.BORDER_RADIUS.big}px;
  padding: ${props => props.theme.constants.PADDING.medium}px;
  z-index: -100;

  elevation: 0;
  flex-direction: column;
  justify-content: center;
`;

export const Column = styled.View``;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${props => props.theme.constants.PADDING.tiny}px;
`;

export const Label = styled(EvaText)`
  text-transform: uppercase;
  margin-left: ${props => props.theme.constants.PADDING.tiny}px;
`;

export const Text = styled(EvaText)``;
