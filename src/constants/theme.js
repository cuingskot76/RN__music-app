const COLORS = {
  white: '#fcfcff',
  darkWhite: '#c4c4c4',
  dark: '#2d2e37',
  darkGray: '#3b3c4f',

  darkBlur: 'rgba(53,54,76, 0.9)',
};

const SIZES = {
  xs: 10,
  sm: 12,
  base: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
};

const FONT = {
  regular: 'DMRegular',
  medium: 'DMMedium',
  bold: 'DMBold',
};

const SHADOWS = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

const SPACING = {
  xs: 4,
  sm: 8,
  base: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

export {COLORS, SIZES, FONT, SHADOWS, SPACING};
