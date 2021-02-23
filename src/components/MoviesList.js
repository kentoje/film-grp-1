import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import MovieListItem from './MovieListItem'
import data from '../helpers/filmDatas'

const MovieList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={MovieListItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: { 
    marginTop: 30,
  }
})

export default MovieList