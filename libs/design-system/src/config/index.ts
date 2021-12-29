import React from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { createStitches, globalCss } from '@stitches/react';
import { gray, plum, mauve } from '@radix-ui/colors';

/*
1 App background
2 Subtle background
3 UI element background
4 Hovered UI element background
5 Active / Selected UI element background
6 Subtle borders and separators
7 UI element border and focus rings
8 Hovered UI element border
9 Solid backgrounds
10 Hovered solid backgrounds
11 Low-contrast text
12 High-contrast text
*/

const plumScheme = {
  scheme1: plum.plum1,
  scheme2: plum.plum2,
  scheme3: plum.plum3,
  scheme4: plum.plum4,
  scheme5: plum.plum5,
  scheme6: plum.plum6,
  scheme7: plum.plum7,
  scheme8: plum.plum8,
  scheme9: plum.plum9,
  scheme10: plum.plum10,
  scheme11: plum.plum11,
  scheme12: plum.plum12,
};

const grayScheme = {
  scheme1: gray.gray1,
  scheme2: gray.gray2,
  scheme3: gray.gray3,
  scheme4: gray.gray4,
  scheme5: gray.gray5,
  scheme6: gray.gray6,
  scheme7: gray.gray7,
  scheme8: gray.gray8,
  scheme9: gray.gray9,
  scheme10: gray.gray10,
  scheme11: gray.gray11,
  scheme12: gray.gray12,
};
export const { styled, getCssText, theme, createTheme } = createStitches({
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
    print: 'print',
    reducedMotion: '(prefers-reduced-motion)',
    darkTheme: '(prefers-color-scheme: dark)',
  },
  theme: {
    fonts: {
      system: 'system-ui',
    },
    colors: {
      brand: '#005a7c',
      productIQ: '#a23f97',
      // ...plumScheme,
      //...grayScheme,
      scheme1: 'rgb(255,255,255)',
      scheme12: 'rgb(0,0,0)',
      ...gray,
      ...mauve,
      appBackground: '$scheme1',
      elementBackground: '$scheme3',
      subtleBorder: '$scheme6',
      separator: '$scheme6',
      elementBorder: '$scheme7',
      loContrast: '$scheme11',
      hiContrast: '$scheme12',
    },
    fontSizes: {
      1: '13px',
      2: '15px',
      3: '17px',
    },
  },
});

const createThemeCssText = (baseTheme: typeof darkTheme) => {
  const tokens: Record<string, string> = {};
  if (baseTheme.colors) {
    Object.values(baseTheme.colors).forEach((token) => {
      console.log(`${token.variable}: ${tokens[token.value]}`);
      tokens[token.variable] = token.value;
      console.log(`${token.variable}: ${token.value}`);
    });
  }
  console.log(tokens);
  return tokens;
};

const darkTheme = createTheme({
  colors: {
    scheme1: 'rgb(0,0,0)',
    scheme12: 'rgb(255,255,255)',
  },
});

// ...createThemeCssText(darkTheme),
export const globalStyles = globalCss({
  ':root': {
    '@darkTheme': {
      ...createThemeCssText(darkTheme),
    },
    '@bp1': {
      ...createThemeCssText(darkTheme),
    },
  },
  body: {
    backgroundColor: theme.colors.scheme1,
    overflowY: 'scroll',
    margin: 0,
    padding: '1rem !important',
    fontFamily: ` -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
  '*': {
    boxSizing: 'border-box',
    position: 'relative',
  },
});
