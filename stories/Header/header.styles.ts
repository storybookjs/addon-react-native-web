import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
  },
  svg: {
    // verticalAlign: "top",
  },
  h1: {
    fontWeight: '900',
    fontSize: 20,
    // lineHeight: 1,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 10,
    color: 'black',
    alignSelf: 'flex-start',

    // verticalAlign: top,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
