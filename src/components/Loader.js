import React from 'react'
import { StyleSheet } from 'react-native'
import { View, ActivityIndicator } from 'react-native'

const Loader = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#f44802" />
  </View>
)

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 60,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
})

export default Loader
