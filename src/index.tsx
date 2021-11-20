import 'react-native-gesture-handler';

import React from 'react';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  IconRegistry,
  useTheme,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {ThemeProvider} from 'styled-components/native';
import {Platform, StatusBar, UIManager} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import constantsTheme from '@constants/index';

import * as theme from '@theme/theme.json';
import * as mapping from '@theme/mapping.json';

import store, {persistor} from './store';

import MainStack from '@routes/MainStack';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const App = () => {
  const themeContext = useTheme();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainStack />
        <StatusBar
          backgroundColor={themeContext['color-basic-800']}
          barStyle="light-content"
        />
      </PersistGate>
    </Provider>
  );
};

export default () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        theme={{...eva.dark, ...theme}}
        customMapping={mapping}>
        <ThemeProvider theme={constantsTheme}>
          <App />
        </ThemeProvider>
      </ApplicationProvider>
    </>
  );
};
