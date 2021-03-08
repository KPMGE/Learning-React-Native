import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'

import styles from './styles/styles-index';

export default class index extends Component {
  state = {
    nameUser: 'stranger'
  }
  
  changeText = () => {
    this.setState({
      nameUser: this.state.name
    });
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.largeText}> Hello {this.state.nameUser} </Text>

        <TextInput
          style={styles.inputText}
          placeholder='Enter your name'
          onChangeText={text => this.setState({name: text})}
          value={this.state.name}
          onSubmitEditing={this.changeText}
        />

      </View>
    )
  }
}
