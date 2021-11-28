import React from 'react';
import {useTheme} from '@ui-kitten/components';

import {Container, Indicator} from './styles';
import {ViewProps} from 'react-native';

interface IProps {
  activeIndicator?: number;
  number: number;
  style?: [];
  indicatorProps?: ViewProps;
}

const QuestionIndicator: React.FC<IProps> = ({
  activeIndicator = 0,
  number,
  style,
  indicatorProps,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <Container style={style} {...rest}>
      {Array(number)
        .fill({})
        .map((_, index) => (
          <Indicator
            key={index}
            active={activeIndicator === index}
            activeColor={theme['color-primary-default']}
            {...indicatorProps}
          />
        ))}
    </Container>
  );
};

export default QuestionIndicator;
