import { createConfig, config as defaultConfig } from '@gluestack-ui/themed';

const config = createConfig({
  ...defaultConfig.theme,
  tokens: {
    ...defaultConfig.theme.tokens,
    colors: {
      ...defaultConfig.theme.tokens.colors,
      primary0: '#00C38E',
      primary50: '#78ffdb',
      primary100: '#53ffd1',
      primary200: '#2fffc8',
      primary300: '#0bffbe',
      primary400: '#00e6a9',
      primary500: '#00C38E',
      primary600: '#05a87c',
      primary700: '#088f6b',
      primary800: '#0b775a',
      primary900: '#0c604a',
      primary950: '#0c4b3a',
    },
  },
});

export { config };

type ConfigType = typeof config;

declare module '@gluestack-ui/themed' {
  interface UIConfig extends ConfigType {}
}
