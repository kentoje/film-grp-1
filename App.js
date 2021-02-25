import React, { useState } from 'react'
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native'
import { NativeRouter } from 'react-router-native'
import MoviesContext from './src/context/MoviesContext'
import Routes from './src/routes/Routes'

const App = () => {
  const moviesApiState = useState([])

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.statusBackground} />
      <SafeAreaView style={styles.appBackground}>
        <NativeRouter>
          <MoviesContext.Provider value={moviesApiState}>
            <Routes />
          </MoviesContext.Provider>
        </NativeRouter>
      </SafeAreaView>
    </>
  )
}

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
