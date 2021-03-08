import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#1b6194',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageLogin: {
    width: 150,
    height: 150,
    borderRadius: 150
  },
  input: {
    height: 40,
    width: 300,
    padding: 5,
    marginTop: 10,
    fontSize: 15,
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  button: {
    backgroundColor: '#2290b5',
    width: 300,
    height: 40,
    marginTop: 20,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  smallText: {
    fontSize: 20,
    color: '#fff'
  }
});

export default styles;