const TYPOGRAPHY = {
  h1: {
    fontFamily: 'Roboto',
    fontSize: 28,
    fontStyle: 'normal' as 'normal', // Explicitly type as 'normal'
    fontWeight: 'bold' as 'bold', // Explicitly type as 'bold'
    lineHeight: 36, // Use a number instead of a string
    textAlign: 'center' as 'center', // Explicitly type as 'center'
  },
  h2: {
    fontFamily: 'Roboto',
    fontSize: 22,
    fontStyle: 'normal' as 'normal',
    fontWeight: 'bold' as 'bold', // Explicitly type as 'bold'
    lineHeight: 30,
    textAlign: 'center' as 'center',
  },
  h3: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontStyle: 'normal' as 'normal',
    fontWeight: '600' as '600',
    lineHeight: 28,
    textAlign: 'center' as 'center',
  },
  h4: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontStyle: 'normal' as 'normal',
    fontWeight: '600' as '600',
    lineHeight: 26,
    textAlign: 'center' as 'center',
  },
  h5: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontStyle: 'normal' as 'normal',
    fontWeight: '600' as '600',
    lineHeight: 24,
    textAlign: 'center' as 'center',
  },
  body16: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontStyle: 'normal' as 'normal',
    fontWeight: '400' as '400',
    lineHeight: 24,
    textAlign: 'left' as 'left',
  },
  body14: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontStyle: 'normal' as 'normal',
    fontWeight: '400' as '400',
    lineHeight: 20,
    textAlign: 'left' as 'left',
  },
  body12: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontStyle: 'normal' as 'normal',
    fontWeight: '400' as '400',
    lineHeight: 18,
    textAlign: 'left' as 'left',
  },
};

export default TYPOGRAPHY;