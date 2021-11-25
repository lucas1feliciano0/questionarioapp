/* eslint-disable no-undef */
import 'react-native/jest/MockNativeMethods';
require('react-native-reanimated/lib/reanimated2/jestUtils').setUpTests();

jest.mock('@react-native-community/async-storage', () =>
  require('@react-native-community/async-storage/jest/async-storage-mock'),
);

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});

jest.mock('react-native-screens', () => ({
  ...jest.requireActual('react-native-screens'),
  enableScreens: jest.fn(),
}));

jest.mock('react-native-bootsplash', () => {
  return {
    hide: jest.fn().mockResolvedValueOnce(),
    show: jest.fn().mockResolvedValueOnce(),
    getVisibilityStatus: jest.fn().mockResolvedValue('hidden'),
  };
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
