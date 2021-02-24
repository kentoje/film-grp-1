import React from 'react'
import { FlatList, View } from 'react-native'
import MovieListItem from './MovieListItem'

const MovieList = ({ items }) => {
  return (
    <View>
      <FlatList
        data={items}
        renderItem={MovieListItem}
        keyExtractor={(item) => item.imdbID}
      />
    </View>
  )
}

export default MovieList
