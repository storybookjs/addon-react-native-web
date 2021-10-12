import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  section: {
    fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontSize: 14,
    lineHeight: 24,
    paddingVertical: 48,
    paddingHorizontal: 20,
    marginHorizontal: 'auto',
    maxWidth: 600,
    color: '#333',
  },

  h2: {
    fontWeight: '900',
    fontSize: 32,
    lineHeight: 1,
    marginBottom: 4,
    // display: inline-block,
    // verticalAlign: 'top',
  },

  p: {
    marginVertical: 16,
    marginHorizontal: 0,
  },

  a: {
    // textDecoration: 'none',
    color: '#1ea7fd',
  },

  ul: {
    paddingLeft: 30,
    marginVertical: 16,
  },

  li: {
    marginBottom: 8,
  },

  tip: {
    // display: inline-block,
    alignSelf: 'flex-start',
    borderRadius: 16,
    backgroundColor: '#e7fdd8',
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginRight: 10,
    marginBottom: 4,
    // verticalAlign: 'top',
  },
  tipText: {
    fontSize: 11,
    lineHeight: 12,
    fontWeight: '700',
    color: '#66bf3c',
  },

  tipWrapper: {
    fontSize: 13,
    lineHeight: 20,
    marginTop: 40,
    marginBottom: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  tipWrapperSvg: {
    // display: inline-block,
    height: 12,
    width: 12,
    marginRight: 4,
    // verticalAlign: "top",
    marginTop: 3,
  },

  tipWrapperSvgPath: {
    // fill: "#1ea7fd",
  },
});
