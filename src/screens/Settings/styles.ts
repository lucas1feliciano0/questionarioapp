import styled from 'styled-components/native';
import {
  Layout,
  Text as EvaText,
  Input as EvaInput,
  Button as EvaButton,
} from '@ui-kitten/components';

export const Container = styled(Layout)`
  flex: 1;
  padding: ${props => props.theme.constants.PADDING.big}px
    ${props => props.theme.constants.PADDING.medium}px;
`;

export const Text = styled(EvaText)``;

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

export const Title = styled(EvaText)`
  margin-bottom: ${props => props.theme.constants.PADDING.small}px;
`;

export const InputContainer = styled.View`
  flex: 1;
  margin: ${props => props.theme.constants.PADDING.giant}px 0;
`;
export const Input = styled(EvaInput)``;

export const Button = styled(EvaButton)``;
