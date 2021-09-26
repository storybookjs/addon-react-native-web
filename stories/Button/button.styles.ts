import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    borderWidth: 0,
    borderRadius: 48,
    // cursor: pointer,
    // display: inline-block,
  },
  buttonText: {
    fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: '700',
    lineHeight: 1,
  },
  primary: {
    backgroundColor: '#1ea7fd',
  },
  primaryText: {
    color: 'white',
  },

  secondary: {
    backgroundColor: 'transparent',
    borderColor: 'rgba(0, 0, 0, 0.15)',
    borderWidth: 1,
    // boxShadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset,
  },
  secondaryText: {
    color: '#333',
  },
  small: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  smallText: {
    fontSize: 12,
  },
  medium: {
    paddingVertical: 11,
    paddingHorizontal: 20,
  },
  mediumText: {
    fontSize: 14,
  },
  large: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  largeText: {
    fontSize: 16,
  },
});
