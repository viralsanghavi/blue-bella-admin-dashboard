/* eslint-disable prefer-destructuring, sort-keys */

import { darken, lighten, linearGradient } from 'polished';

/* base colors */

const blue = '#645DF6';
const blueDark = '#070275';
const blueLight = '#3E5C8F';
const blueLogo = '#00263D';
const persianBlue = '#212239';
const strongBlue = '#0B64C0';
const green = '#3AC4AC';
const greenDark = '#10a711';
const orange = '#FFBB00';
const red = '#E74C3C';
const whiteMoreTransparent = 'rgba(255, 255, 255, 0.2)';
const whiteTransparent = 'rgba(255, 255, 255, 0.4)';
const transparent = 'rgba(0, 0, 0, 0)';
const freezingVapor = '#DCF0F7';

const white = '#fefefe';
const whiteLogo = '#faf7f5';
const ghostWhite = '#f7fafe';
const whiteSmoke = '#E1EAF3';
const lavender = '#D6E5F3';
const gray1 = '#F8F9FB';
const gray2 = '#CECECE';
const gray3 = '#A9ABC2';
const gray4 = '#636363';
const gray5 = '#3A3A3A';
const gray6 = '#333333';
const black = '#222222';
const purple = '#AF66CF';
const yellow = '#EFCF6B';
const purple1 = '#C694F9';
const purple2 = '#AB64F4';
const blue1 = '#6AA5E3';
const blue2 = '#6866E9';
const blue3 = '#E2EBFB';
const orange1 = '#FEB683';
const orange2 = '#FF8993';
const aliceBlue = '#F3FBFE';

/* theme colors */

const primary = blue;
const primaryDark = darken(0.1, primary);
const primaryLight = lighten(0.1, primary);

const secondary = blueDark;
const secondaryDark = darken(0.1, blueDark);
const secondaryLight = lighten(0.1, blueDark);

const textHeading = blueLight;
const textLink = primary;
const textPrimary = gray6;
const textSubtle = gray5;
const textSubtleSecondary = whiteTransparent;

const tableBg = ghostWhite;
const tableBorder = whiteSmoke;
const userAlertBg = blue3;

const footerBorder = lavender;

const colors = {
  accent: blue,
  aliceBlue,
  black,
  blueLogo,
  body: gray1,
  border: gray4,
  borderSecondary: whiteMoreTransparent,
  error: red,
  freezingVapor,
  grays: [gray1, gray2, gray3, gray4, gray5, gray6],
  greenDark,
  primary,
  primaryDark,
  primaryLight,
  purple2,
  secondary,
  secondaryDark,
  secondaryLight,
  success: green,
  text: {
    heading: textPrimary,
    link: textLink,
    primary: textPrimary,
    subtle: textSubtle,
    subtleSecondary: textSubtleSecondary,
  },
  visualizations: [
    blueLight,
    green,
    orange,
    red,
    yellow,
    purple,
    darken(0.1, blueLight),
    lighten(0.2, green),
    darken(0.1, orange),
    lighten(0.1, red),
    darken(0.1, yellow),
    lighten(0.1, purple),
    lighten(0.1, blueLight),
    darken(0.1, green),
    lighten(0.1, orange),
    darken(0.1, red),
    lighten(0.1, yellow),
    darken(0.1, purple),
  ],
  persianBlue,
  strongBlue,
  userAlertBg,
  warning: orange,
  white,
  whiteLogo,
  transparent,

  // TODO: remove these
  footerBorder,
  gray1,
  gray2,
  gray3,
  gray4,
  gray5,
  gray6,
  tableBg,
  tableBorder,
  textHeading,
  textLink,
  textPrimary,
  textSubtle,
  textSubtleSecondary,
};

/* Gradient */

/* base gradients */
const baseGradients = {
  primary: linearGradient({
    colorStops: [
      `${lighten(0.05, primary)} 0%`,
      `${darken(0.05, primary)} 100%`,
    ],
    fallback: primary,
    toDirection: 'to bottom',
  }),
  secondary: linearGradient({
    colorStops: [
      `${lighten(0, secondary)} 0%`,
      `${darken(0.05, secondary)} 100%`,
    ],
    fallback: primaryDark,
    toDirection: 'to bottom',
  }),
  white: linearGradient({
    colorStops: [`${darken(0.05, white)} 0%`, `${lighten(0.1, white)} 100%`],
    fallback: white,
    toDirection: 'to bottom',
  }),
  purpleGradient: linearGradient({
    colorStops: [`${purple1} 0%`, `${purple2} 100%`],
    toDirection: 'to right',
  }),
  blueGradient: linearGradient({
    colorStops: [`${blue1} 0%`, `${blue2} 100%`],
    toDirection: 'to right',
  }),
  orangeGradient: linearGradient({
    colorStops: [`${orange1} 0%`, `${orange2} 100%`],
    toDirection: 'to right',
  }),
};

/* theme gradients */
const gradients = {
  card1: baseGradients.purpleGradient,
  card2: baseGradients.blueGradient,
  card3: baseGradients.orangeGradient,
  pageBg: baseGradients.primary,
  sidebar: baseGradients.secondary,
  header: baseGradients.white,
};

/* breakpoints */

const breakpoints = [
  '300px',
  '500px',
  '700px',
  '1200px',
  '1400px',
  '1600px',
  '1800px',
];
breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];
breakpoints.xxl = breakpoints[5];
breakpoints.xxxl = breakpoints[6];

/* typography */

// const baseFontSizesForBreakpoint = ['3.5vw', '3.5vw', '2.2vw', '14px', '14px'];
const baseFontSizesForBreakpoint = ['3.5vw', '3.5vw', '2.2vw', '18px', '18px'];

const fonts = {
  mono: 'tt_commons_regular',
  primary: 'tt_commons_regular',
  secondary: 'tt_commons_regular',
};

const fontSizeScale = 1.25;

const fontSizes = [
  `${1 / fontSizeScale / fontSizeScale / fontSizeScale}rem`,
  `${1 / fontSizeScale / fontSizeScale}rem`,
  `${1 / fontSizeScale}rem`,
  '1rem',
  `${fontSizeScale}rem`,
  `${fontSizeScale * fontSizeScale}rem`,
  `${fontSizeScale * fontSizeScale * fontSizeScale}rem`,
  `${fontSizeScale * fontSizeScale * fontSizeScale * fontSizeScale}rem`,
  `${
    fontSizeScale *
    fontSizeScale *
    fontSizeScale *
    fontSizeScale *
    fontSizeScale *
    fontSizeScale
  }rem`,
];

// TODO: remove these
fontSizes.xxs = fontSizes[0];
fontSizes.xs = fontSizes[1];
fontSizes.sm = fontSizes[2];
fontSizes.md = fontSizes[3];
fontSizes.lg = fontSizes[4];
fontSizes.xl = fontSizes[5];
fontSizes.xxl = fontSizes[6];
fontSizes.xxxl = fontSizes[7];

const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};

const letterSpacings = ['0.05em', '0.1em', '0.125em'];

// TODO: remove these
letterSpacings.sm = letterSpacings[0];
letterSpacings.md = letterSpacings[1];
letterSpacings.lg = letterSpacings[2];

const lineHeights = ['1.2em', '1.4em', '1.6em'];

// TODO: remove these
lineHeights.sm = lineHeights[0];
lineHeights.md = lineHeights[1];
lineHeights.lg = lineHeights[2];

/* space */

const space = [
  '0',
  '0.25rem',
  '0.375rem',
  '0.5rem',
  '0.75rem',
  '1.25rem',
  '2rem',
  '3.25rem',
  '5.25rem',
  '8.5rem',
];

// TODO: remove these
space.xxxs = space[1];
space.xxs = space[2];
space.xs = space[3];
space.sm = space[4];
space.md = space[5];
space.lg = space[6];
space.xl = space[7];
space.xxl = space[8];
space.xxxl = space[9];

/* sizes */

const sizes = {
  heights: {
    header: '5rem',
    input: `calc(${lineHeights[2]} + ${space[4]})`,
  },
  maxWidths: {
    content: ['1250px', null, null, null, null, '1450px', '1600px', '1800px'],
    form: '500px',
    largeForm: '800px',
    smallForm: '380px',
  },
  widths: { sidebar: '272px', submitButton: '14rem' },
};

/* border radii */

const radii = ['0', '2px', '5px', '8px', '10px'];

// TODO: remove these
radii.sm = radii[0];
radii.md = radii[1];
radii.lg = radii[2];

/* box shadows */

const shadows = [
  '0 3px 10px 0 rgba(164, 174, 185, 0.1)',
  '0 10px 25px rgba(164, 174, 185, 0.2)',
  '0 20px 50px rgba(11, 34, 56, 0.3)',
  '0 20px 60px rgba(0, 0, 0, 0.4)',
  '0px 0px 15px -4px rgba(11, 34, 56, 0.9)',
];

/* z indexes */

const zIndices = [1, 2, 3, 4, 5];

/* variants */

const button = {
  '&:hover': { bg: 'primaryDark' },
  bg: 'primary',
  borderColor: 'transparent',
  borderRadius: 4,
  borderStyle: 'solid',
  borderWidth: '1px',
  boxShadow: 1,
  color: 'white',
  fontSize: [2, null, null, 3],
  height: 'heights.input',
  letterSpacing: 0,
  minWidth: [null, null, null, '10rem'],
  px: [3, null, null, 5],
  py: [2, null, null, 4],
  textTransform: 'uppercase',
  transition: 'background-color 0.2s, border-color 0.2s, color 0.2s',
};

const transparentButton = {
  ...button,
  '&:hover': {
    bg: 'primaryLight',
    borderColor: 'primaryLight',
    color: 'white',
  },
  bg: 'inherit',
  borderColor: 'primary',
  color: 'primary',
};

const variants = {
  buttons: {
    cancel: {
      ...transparentButton,
      '&:hover': { bg: 'error', borderColor: 'error', color: 'white' },
      borderColor: 'border',
      color: 'border',
    },
    responsiveBtns: {
      ...button,
      borderRadius: [2, null, 4],
      height: [null, null, null, 'heights.input'],
      px: [2, null, null, null, null, 5],
      py: [1, null, null, null, null, 4],
    },
    icon: {
      ...transparentButton,
      '&:hover': { color: 'primary' },
      borderColor: 'transparent',
      boxShadow: 'none',
      color: 'secondary',
      fontSize: '0',
      minWidth: '0',
      px: 0,
      py: 0,
      transition: 'color 0.2s',
    },
    link: {
      '&:hover': { textDecoration: 'underline' },
      color: 'primary',
      py: 2,
      textAlign: 'left',
      textDecoration: 'none',
    },
    primary: { ...button },
    secondary: {
      ...button,
      '&:hover': { bg: 'secondaryDark' },
      bg: 'secondary',
    },
    tertiary: { ...button, '&:hover': { bg: 'primaryDark' }, bg: 'primary' },
    transparent: transparentButton,
  },
  headings: {
    display: {
      fontWeight: 'bold',
      fontSize: 8,
    },
    main: {
      border: '.5rem solid',
      borderColor: 'primary',
      borderWidth: '0 0 0 .5rem',
      color: 'text.primary',
      fontWeight: 'bold',
      pl: 5,
      py: 4,
    },
    sub: {
      color: 'textHeading',
      fontSize: 6,
      fontWeight: 'medium',
    },
  },
  inputs: {
    primary: {
      '&::placeholder': { color: 'grays.1' },
      '&:focus': { borderColor: 'primary' },
      bg: 'white',
      borderColor: 'grays.2',
      borderRadius: 4,
      borderStyle: 'solid',
      borderWidth: '1px',
      color: 'text.primary',
      px: 4,
      py: '0.5rem',
    },
  },
};

/* theme */

export default {
  baseFontSizesForBreakpoint,
  breakpoints,
  colors,
  fontSizes,
  fontWeights,
  fonts,
  gradients,
  letterSpacings,
  lineHeights,
  radii,
  shadows,
  sizes,
  space,
  variants,
  zIndices,
};
