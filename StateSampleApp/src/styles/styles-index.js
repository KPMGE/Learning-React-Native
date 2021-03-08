import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(21, 10, 70)'
  },
  smallText: {
    fontSize: 20
  },
  largeText: {
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold'
  },
  button: {
    width: 300,
    height: 40,
    marginTop: 40,
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputText: {
    width: 300,
    height: 40,
    marginTop: 50,
    padding: 6,
    backgroundColor: 'white'
  }
});

export default styles;