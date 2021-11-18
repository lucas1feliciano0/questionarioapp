import React from 'react';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  IconRegistry,
  useTheme,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {ThemeProvider} from 'styled-components/native';

import constantsTheme from '@constants/index';

import * as theme from '@theme/theme.json';
import * as mapping from '@theme/mapping.json';

import Quiz from '@screens/Quiz';
import {StatusBar} from 'react-native';

const App = () => {
  const themeContext = useTheme();

  return (
    <>
      <Quiz />
      <StatusBar
        backgroundColor={themeContext['color-basic-800']}
        barStyle="light-content"
      />
    </>
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
