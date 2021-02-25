import React, { useState } from 'react'
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native'
import { NativeRouter, Route } from 'react-router-native'
import Home from './src/pages/Home'
import Movie from './src/pages/Movie'
import MoviesContext from './src/context/MoviesContext'

const App = () => {
  const moviesApiState = useState([])

  return (
    <>
      <MoviesContext.Provider value={moviesApiState}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.statusBackground} />
        <SafeAreaView style={styles.appBackground}>
          <NativeRouter>
            <Route exact path="/" component={Home} />
            <Route path="/movie/:id" component={Movie} />
          </NativeRouter>
        </SafeAreaView>
      </MoviesContext.Provider>
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
