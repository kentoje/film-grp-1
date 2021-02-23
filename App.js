import React from 'react'
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native'
import Home from './src/pages/Home'

const App = () => (
  <>
    <StatusBar barStyle="light-content" />
    <SafeAreaView style={styles.statusBackground} />
    <SafeAreaView style={styles.appBackground}>
      <Home />
    </SafeAreaView>
  </>
)

const styles = StyleSheet.create({
  statusBackground: {
    flex: 0,
    backgroundColor: '#f44802',
  },
  appBackground: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default App
