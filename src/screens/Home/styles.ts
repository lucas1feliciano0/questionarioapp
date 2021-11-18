import styled from 'styled-components/native';
import {Layout, Text as EvaText} from '@ui-kitten/components';

export const Container = styled(Layout)`
  flex: 1;
  padding: ${props => props.theme.constants.PADDING.big}px
    ${props => props.theme.constants.PADDING.medium}px;
`;

export const Text = styled(EvaText)``;
