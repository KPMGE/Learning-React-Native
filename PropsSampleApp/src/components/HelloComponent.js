import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class HelloComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> {this.props.textMessage} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(23, 34, 67)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 40 
  }
});