import React, {useEffect} from 'react';
import {useTheme} from '@ui-kitten/components';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import {Container} from './styles';

interface IProps {
  title: string;
  showAnswer: boolean;
  correct?: boolean;
  disabled?: boolean;
}

const Alternative: React.FC<IProps> = ({
  title,
  showAnswer,
  correct,
  disabled,
  ...rest
}) => {
  const theme = useTheme();

  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value}],
    };
  });

  useEffect(() => {
    if (showAnswer) {
      offset.value = withSequence(
        withTiming(!correct ? 10 : 0, {
          duration: 50,
        }),
        withTiming(!correct ? -10 : 0, {
          duration: 50,
        }),
        withTiming(0, {
          duration: 50,
        }),
      );
    }
  }, [showAnswer, correct, offset]);

  return (
    <Animated.View style={animatedStyles}>
      <Container
        correct={correct}
        showAnswer={showAnswer}
        activeColor={theme['color-primary-default']}
        inactiveColor={theme['color-basic-1100']}
        correctColor={theme['color-success-700']}
        wrongColor={theme['color-danger-700']}
        disabled={disabled}
        {...rest}>
        {title}
      </Container>
    </Animated.View>
  );
};

export default Alternative;
