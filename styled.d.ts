import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    constants: {
      PADDING: {
        tiny: number;
        small: number;
        medium: number;
        big: number;
        large: number;
        giant: number;
      };

      BORDER_RADIUS: {
        small: number;
        medium: number;
        big: number;
        large: number;
      };

      FONT_SIZE: {
        small: number;
        medium: number;
        regular: number;
        big: number;
        large: number;
        headline: number;
      };
    };
  }
}
