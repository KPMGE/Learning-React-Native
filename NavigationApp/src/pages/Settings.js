import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default Settings = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    height: 100,
    width: 240,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a10c9f',
    borderRadius: 8
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  }
})