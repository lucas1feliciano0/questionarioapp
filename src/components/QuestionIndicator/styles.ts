import styled from 'styled-components/native';
import {Layout} from '@ui-kitten/components';

export const Container = styled(Layout).attrs({
  level: '1',
})`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const Indicator = styled(Layout).attrs({
  level: '3',
})<{active?: boolean; activeColor?: string}>`
  flex: 1;
  height: 4px;
  min-width: 3px;

  margin: 0 ${props => props.theme.constants.PADDING.small}px;
  border-radius: ${props => props.theme.constants.BORDER_RADIUS.large}px;

  ${props => props.active && `background-color: ${props.activeColor}`};
`;
