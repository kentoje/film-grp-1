import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import MovieListItem from './MovieListItem'

const MovieList = ({ items }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={MovieListItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
})

export default MovieList
