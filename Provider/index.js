/* eslint-disable no-undef */
import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {render} from '@testing-library/react-native';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

import 'jest-styled-components/native';

import constantsTheme from '@constants/index';

import * as theme from '@theme/theme.json';
import * as mapping from '@theme/mapping.json';

const AllProviders = ({children}) => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider
      {...eva}
      theme={{...eva.dark, ...theme}}
      customMapping={mapping}>
      <ThemeProvider theme={constantsTheme}>{children}</ThemeProvider>
    </ApplicationProvider>
  </>
);

const customRender = (ui, options) =>
  render(ui, {wrapper: AllProviders, ...options});

export * from '@testing-library/react-native';

export {customRender as render};

export default AllProviders;
