import React from 'react'
import { TextInput, View, StyleSheet, Button } from 'react-native'
import { Icon } from 'react-native-elements'

const Search = ({ setter }) => {
  const filterMovies = (text) => {
    text.length >= 3 ? setter(text) : setter('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchBarWrapper}>
      <Icon name="search" style={styles.icon} />
      <TextInput
        onChangeText={filterMovies}
        style={styles.input}
        placeholder="Titre du film"
      />
      </View>
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
  searchBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    backgroundColor: '#FFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#8E8E8E',
  },
  input: {
    flex: 1,
    height: 50,
    paddingLeft: 5,
    marginLeft: 5,
  },
})

export default Search
