import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('About', {nameProgrammer: 'Kevin', age: 19})}
      >
        <Text style={styles.buttonText}>Go to About</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center' ,
    alignItems: 'center'
  },
  button: {
    height: 100,
    width:240,
    backgroundColor: '#0975c8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  }
});
