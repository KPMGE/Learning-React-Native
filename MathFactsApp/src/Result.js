import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default Result = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Result
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    color: '#fff'
  }
})