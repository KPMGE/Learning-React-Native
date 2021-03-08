import React, { useState } from 'react'
import { 
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView
} from 'react-native';

export default App = () => {

  const [percentage, setPercentage] = useState(0);
  const [name1, changeTextName1] = useState('');
  const [name2, changeTextName2] = useState('');

  function calculatePercentage() {
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${name1}&sname=${name2}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "50a6ef8643msh531ca5ca3434591p17b1fcjsn56f86d5f0c88",
        "x-rapidapi-host": "love-calculator.p.rapidapi.com"
      }
    })
    .then(response => response.json()) 
    .then(response => {
      setPercentage(percentage => percentage = response["percentage"]);
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <KeyboardAvoidingView  style={styles.container} behavior='margin'>
      <ImageBackground 
        source={require('../assets/love.jpg')}
        imageStyle={styles.image}
        style={{flex: 1}}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Love Calculator</Text>

          <TextInput 
            style={styles.input}
            placeholder='Enter first name'
            onChangeText={text => changeTextName1(text)}
            value={name1}
          />

          <TextInput 
            style={styles.input}
            placeholder='Enter second name'
            onChangeText={text => changeTextName2(text)}
            value={name2}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={calculatePercentage}
          >
            <Text style={styles.textButton}>Calculate</Text>
          </TouchableOpacity>

          <Text style={styles.text}>Percentage: {percentage}%</Text>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071118',
  },
  innerContainer: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: 300,
    marginBottom: 20,
    backgroundColor: '#b5b5b5',
    borderRadius: 6,
    padding: 5
  },
  title: {
    fontSize: 55,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 140
  },
  text: {
    marginTop: 50,
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold'
  },
  button: {
    height: 70,
    width: 200,
    backgroundColor: '#135b96',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 10,
    margin: 20
  },
  textButton: {
    fontSize: 17,
    color: '#fff',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});