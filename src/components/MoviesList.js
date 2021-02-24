import React from 'react'
import { FlatList, View, Text } from 'react-native'
import MovieListItem from './MovieListItem'

const MovieList = ({ items, isLoaded }) => {
  return (
    <View>
      {!isLoaded ? (
        <FlatList
          data={items}
          renderItem={MovieListItem}
          keyExtractor={(item) => String(item.id)}
        />
      ) : (
        <Text>Chargement</Text>
      )}
    </View>
  )
}

export default MovieList
