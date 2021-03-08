import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import getFact from '../utils/number-api';

export default Home = () => {
  /*
  const [number, setNumber] = useState(0);
  const [fact, setFact] = useState('');

  setFact(fact => fact = getFact(number));
  */

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Math Facts</Text>

      <TextInput 
        style={styles.input}
        placeholder='Enter a number'
        // onChangeText={number => setNumber(number)}
        // value={number}
        keyboardType='numeric'
      />

      <TouchableOpacity 
        style={styles.button}
        // onPress={setFact}
      >
        <Text>Get Fact!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#146ead'
  },
  title: {
    fontSize: 40,
    color: '#fff'
  },
  input: {
    height: 50,
    width: 300,
    backgroundColor: '#178bc4',
    borderRadius: 5,
    padding: 7,
    marginTop: 20
  },
  fact: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
    marginTop: 30,
  },
  button: {
    height: 60,
    width: 200,
    backgroundColor: '#084578',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 20
  }
})