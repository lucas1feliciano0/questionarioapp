module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@services': './src/services',
          '@screens': './src/screens',
          '@routes': './src/routes',
          '@assets': './src/assets',
          '@theme': './src/theme',
          '@store': './src/store',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
