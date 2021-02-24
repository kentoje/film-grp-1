import React from 'react'
import { FlatList, View } from 'react-native'
import MovieListItem from './MovieListItem'

const MovieList = ({ items, setter }) => {
  return (
    <View>
      <FlatList
        data={items}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <MovieListItem item={item} />}
        keyExtractor={(item) => String(item.id)}
        onEndReached={() => {
          setter(true)
        }}
        onEndReachedThreshold={0.25}
      />
    </View>
  )
}

export default MovieList
