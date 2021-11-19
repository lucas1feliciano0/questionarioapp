import styled from 'styled-components/native';
import {
  Layout,
  Text as EvaText,
  Button as EvaButton,
  Input as EvaInput,
} from '@ui-kitten/components';

import AcceptModalComponent from '@components/AcceptModal';

export const Container = styled(Layout)`
  flex: 1;
  padding: ${props => props.theme.constants.PADDING.medium}px
    ${props => props.theme.constants.PADDING.small}px;
`;

export const Header = styled(Layout).attrs({
  level: '2',
})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.constants.PADDING.big}px
    ${props => props.theme.constants.PADDING.medium}px;
  border-radius: ${props => props.theme.constants.BORDER_RADIUS.large}px;
`;

export const Text = styled(EvaText)``;

export const Title = styled(EvaText)`
  width: 70%;
  margin: ${props => props.theme.constants.PADDING.medium}px;
`;

export const Button = styled(EvaButton)``;

export const InputContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding: ${props => props.theme.constants.PADDING.big}px
    ${props => props.theme.constants.PADDING.medium}px;
`;

export const Input = styled(EvaInput)``;

export const AcceptModal = styled(AcceptModalComponent)``;

export const Footer = styled(Layout).attrs({
  level: '1',
})`
  padding: ${props => props.theme.constants.PADDING.big}px
    ${props => props.theme.constants.PADDING.medium}px;
`;
