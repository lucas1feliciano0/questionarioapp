import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import Introduction from '@screens/Introduction';
import Home from '@screens/Home';
import Settings from '@screens/Settings';
import QuizConfiguration from '@screens/QuizConfiguration';
import Quiz from '@screens/Quiz';
import QuizResume from '@screens/QuizResume';

export type RootStackParamList = {
  Introduction: undefined;
  Home: undefined;
  Settings: undefined;
  QuizConfiguration: undefined;
  Quiz: {
    quantity: string;
  };
  QuizResume: undefined;
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
        <Screen name="Introduction" component={Introduction} />
        <Screen name="Home" component={Home} />
        <Screen name="Settings" component={Settings} />
        <Screen name="QuizConfiguration" component={QuizConfiguration} />
        <Screen name="Quiz" component={Quiz} />
        <Screen name="QuizResume" component={QuizResume} />
      </Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
