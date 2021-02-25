import React, { useContext } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { useParams } from 'react-router-native'
import GoBack from '../components/GoBack'
import moviesContext from '../context/MoviesContext'

const Movie = () => {
  const [apiMovies] = useContext(moviesContext)
  const { id } = useParams()
  const movie = apiMovies.find((movie) => movie.id === Number(id))

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <GoBack />
      </View>
      <Text>{JSON.stringify(movie, null, 2)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: 16,
    left: 16,
  },
})

export default Movie
