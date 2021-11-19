import React, {useContext, useEffect} from 'react';
import {useTheme} from '@ui-kitten/components';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import Markdown from 'react-native-markdown-display';

import {Container} from './styles';
import {ThemeContext} from 'styled-components/native';

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
  const constantsTheme = useContext(ThemeContext);
  const theme = useTheme();

  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        correct ? {translateY: offset.value} : {translateX: offset.value},
      ],
    };
  });

  useEffect(() => {
    if (showAnswer) {
      offset.value = withSequence(
        withTiming(10, {
          duration: correct ? 150 : 50,
        }),
        withTiming(-10, {
          duration: correct ? 150 : 50,
        }),
        withTiming(0, {
          duration: correct ? 150 : 50,
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
        inactiveColor={theme['color-basic-600']}
        correctColor={theme['color-success-700']}
        wrongColor={theme['color-danger-700']}
        disabled={disabled}
        {...rest}>
        {evaProps => (
          <Markdown
            {...evaProps}
            style={{
              body: {
                color: 'white',
                fontSize: constantsTheme.constants.FONT_SIZE.medium,
                fontFamily: 'Lemon-Regular',
                marginLeft: constantsTheme.constants.PADDING.medium,
              },
            }}>
            {title}
          </Markdown>
        )}
      </Container>
    </Animated.View>
  );
};

export default Alternative;
