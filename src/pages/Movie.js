import React, { useContext } from 'react'
import { ScrollView } from 'react-native'
import { 
  Text, 
  Image, 
  StyleSheet, 
  View,
  Button,
  Dimensions,
} from 'react-native'
import { Icon } from 'react-native-elements'
import { useParams } from 'react-router-native'
import GoBack from '../components/GoBack'
import moviesContext from '../context/MoviesContext'
import getResponsiveImageDimension from '../lib/responsive-image'

const RATIO = 0.25
const responsiveDimension = getResponsiveImageDimension(RATIO)(Dimensions.get('window').width)

const Movie = () => {
  const [apiMovies] = useContext(moviesContext)
  const { id } = useParams()
  const movie = apiMovies.find((movie) => movie.id === Number(id))

  return (
    <>
      <Image
        style={styles.image}
        source={{ uri: movie.image }}
      />
      <View style={styles.arrow}>
        <GoBack />
      </View>
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.imageWrapper}>
              <Image
                  style={styles.thumbnail}
                  resizeMode={'contain'}
                  source={{ uri: movie.image }}
              />
            </View>
            <View>
              <Text style={styles.title}>{movie.title}</Text> 
              <Text style={styles.author}>{movie.title}</Text>
            </View>
            <View style={styles.playIconContainer}>
              <Icon color="#fff" size={48} name="arrow-right" />
            </View>
          </View>
          <View style={styles.synopsisContainer}>
            <Text style={styles.synopsis}>Synopsis</Text>
            <Text>{movie.overview}</Text>
          </View>
        </ScrollView>
        <View style={styles.buttonWrapper}>
          <Button color="#fff" title="View website" />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    height: responsiveDimension,
    flexDirection: 'row',
  },
  arrow: {
    alignSelf: 'flex-start',
  },
  image: {
    height: 200,
    width: '100%',
  },
  imageWrapper: {
    width: responsiveDimension,
  },
  thumbnail: {
    flex: 1,
  },
  playIconContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 24,
    marginLeft: 'auto',
    marginRight: 16,
  },
  title: {
    fontWeight: 'bold',
  },
  synopsisContainer: {
    paddingLeft: 16,
    marginTop: 32,
  },
  synopsis: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonWrapper: {
    width: '90%',
    paddingVertical: 8,
    marginHorizontal: 16,
    backgroundColor: 'red',
    color: 'white',
    borderRadius: 12,
  },
})

export default Movie
