import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native'
import styles from './styles/style-login'


export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView style = {styles.container} behavior = 'height'>

        <Image 
          style={styles.imageLogin}
          source={{uri: 'https://www.getbidbar.com/assets/blog/programming_topics.jpg'}}
        />

        <TextInput
          style={styles.input}
          placeholder='Enter your email'
        />

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder='Enter your password'
        />

        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.smallText}>Login</Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    )
  }
}
