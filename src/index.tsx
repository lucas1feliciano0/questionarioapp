import 'react-native-gesture-handler';

import React, {useEffect} from 'react';
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
import Toast from 'react-native-toast-message';
import RNBootSplash from 'react-native-bootsplash';

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

  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainStack />
        <StatusBar
          backgroundColor={themeContext['color-basic-800']}
          barStyle="light-content"
        />
        <Toast />
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
