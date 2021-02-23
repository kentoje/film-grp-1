import React from 'react'
import { TextInput, View, StyleSheet, Button } from 'react-native'

const Search = ({ setter }) => {
  const filterMovies = (text) => {
    text.length >= 3 ? setter(text) : setter('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={filterMovies}
        style={styles.input}
        placeholder="Titre du film"
      />
      {/* <Button title="Rechercher" onPress={() => {}} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: '#f44802',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  input: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 20,
    height: 50,
    borderColor: '#8E8E8E',
    borderWidth: 1,
    paddingLeft: 5,
    borderRadius: 12,
    borderWidth: 0,
    backgroundColor: '#FFF',
  },
})

export default Search
