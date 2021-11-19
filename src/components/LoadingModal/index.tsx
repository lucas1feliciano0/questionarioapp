import React, {useEffect} from 'react';
import {useTheme} from '@ui-kitten/components';

import {
  Backdrop,
  Container,
  Header,
  Icon,
  Modal,
  IconContainer,
  Text,
} from './styles';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

interface IProps {
  title: string;
  visible: boolean;
  subtitle?: string;
  iconName?: string;
}

const LoadingModal: React.FC<IProps> = ({
  title,
  subtitle,
  visible,
  iconName = 'star',
}) => {
  const theme = useTheme();

  const animationTranslate = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{rotateZ: `${animationTranslate.value}deg`}],
    };
  });

  useEffect(() => {
    animationTranslate.value = withRepeat(
      withTiming(120, {
        duration: 1000,
        easing: Easing.linear,
      }),
      5,
    );
  }, [animationTranslate]);

  return (
    <Modal visible={visible} animationType="fade">
      <Backdrop>
        <Container>
          <Header>
            <Text>{title}</Text>
          </Header>
          <IconContainer>
            <Animated.View style={animatedStyles}>
              <Icon fill={theme['color-basic-500']} name={iconName} />
            </Animated.View>
            {subtitle && <Text appearance="hint">{subtitle}</Text>}
          </IconContainer>
        </Container>
      </Backdrop>
    </Modal>
  );
};

export default LoadingModal;
