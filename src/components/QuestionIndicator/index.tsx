import React from 'react';
import {useTheme} from '@ui-kitten/components';

import {Container, Indicator} from './styles';

interface IProps {
  activeIndicator?: number;
  number: number;
  style?: [];
}

const QuestionIndicator: React.FC<IProps> = ({
  activeIndicator = 0,
  number,
  style,
}) => {
  const theme = useTheme();

  return (
    <Container style={style}>
      {Array(number)
        .fill({})
        .map((_, index) => (
          <Indicator
            key={index}
            active={activeIndicator === index}
            activeColor={theme['color-primary-default']}
          />
        ))}
    </Container>
  );
};

export default QuestionIndicator;
