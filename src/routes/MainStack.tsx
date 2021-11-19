import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import Home from '@screens/Home';
import QuizConfiguration from '@screens/QuizConfiguration';
import Quiz from '@screens/Quiz';

export type RootStackParamList = {
  Home: undefined;
  QuizConfiguration: undefined;
  Quiz: {
    quantity: string;
  };
};

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

const MainStack: React.FC = () => {
  const screenOptions: StackNavigationOptions = {
    headerShown: false,
    transitionSpec: {
      open: {animation: 'timing', config: {duration: 500}},
      close: {animation: 'timing', config: {duration: 500}},
    },
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  };

  return (
    <NavigationContainer>
      <Navigator detachInactiveScreens={false} screenOptions={screenOptions}>
        <Screen name="Home" component={Home} />
        <Screen name="QuizConfiguration" component={QuizConfiguration} />
        <Screen name="Quiz" component={Quiz} />
      </Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
