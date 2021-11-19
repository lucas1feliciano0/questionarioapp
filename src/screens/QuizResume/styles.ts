import styled from 'styled-components/native';
import {
  Layout,
  List,
  Text as EvaText,
  Button as EvaButton,
} from '@ui-kitten/components';

import AsnwerResumeItemComponent from '@components/AsnwerResumeItem';

import WinnerIllustration from '@assets/svg/winner.svg';

export const Container = styled(Layout)`
  flex: 1;
  padding: ${props => props.theme.constants.PADDING.big}px
    ${props => props.theme.constants.PADDING.medium}px;
`;

export const InfoContainer = styled.View`
  flex: 1;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: ${props => props.theme.constants.PADDING.large}px 0;
`;

export const InfoCard = styled.View`
  margin-right: ${props => props.theme.constants.PADDING.giant}px;
`;

export const Text = styled(EvaText)``;

export const IllustrationContainer = styled.View`
  align-items: center;
`;

export const Illustration = WinnerIllustration;

export const TextContainer = styled.View`
  align-items: center;
`;

export const ResumeCardBackground = styled.View`
  position: absolute;
  top: 0;
  opacity: 0.8;
`;

export const AsnwerResumeList = styled(List)`
  max-height: 100%;
  border-radius: ${props => props.theme.constants.BORDER_RADIUS.large}px;
`;

export const AsnwerResumeItem = styled(AsnwerResumeItemComponent)``;

export const Title = styled(EvaText)`
  margin-bottom: ${props => props.theme.constants.PADDING.small}px;
`;

export const Button = styled(EvaButton)``;

export const ResumeCard = styled.View<{
  backgroundColor: string;
}>`
  width: 100%;
  height: 38%;
  border-radius: ${props => props.theme.constants.BORDER_RADIUS.large}px;
  background-color: ${props => props.backgroundColor};
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
  z-index: 9999;
`;
