import styled from 'styled-components/native';
import {
  Layout,
  Text as EvaText,
  Button as EvaButton,
  Icon as EvaIcon,
} from '@ui-kitten/components';
import {RFValue} from 'react-native-responsive-fontsize';

export const Modal = styled.Modal.attrs({
  transparent: true,
  statusBarTranslucent: true,
})``;

export const Backdrop = styled.View`
  flex: 1;
  background-color: #00000090;
  justify-content: center;
  align-items: center;
`;

export const Container = styled(Layout)`
  width: 80%;
  height: 40%;
  border-radius: ${props => props.theme.constants.BORDER_RADIUS.large}px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

export const Header = styled(Layout).attrs({
  level: '2',
})`
  position: absolute;
  top: 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${props => props.theme.constants.PADDING.big}px
    ${props => props.theme.constants.PADDING.medium}px;
`;

export const Text = styled(EvaText)``;

export const IconContainer = styled(Layout).attrs({level: '2'})`
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;
  border-radius: ${props => props.theme.constants.BORDER_RADIUS.large}px;
  justify-content: center;
  align-items: center;
  margin-top: ${props =>
    props.theme.constants.PADDING.big +
    props.theme.constants.FONT_SIZE.regular}px;
`;

export const Button = styled(EvaButton)`
  margin-bottom: ${props => props.theme.constants.PADDING.medium}px;
`;

export const Icon = styled(EvaIcon)`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  margin-bottom: ${props => props.theme.constants.PADDING.small}px;
`;

export const Footer = styled.View`
  width: 90%;
`;
