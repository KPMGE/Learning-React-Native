import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default About = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> I was made by {route.params?.nameProgrammer} </Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={styles.buttonText}>Go to Settings</Text>
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
    backgroundColor: '#a91414',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30
  }
});
