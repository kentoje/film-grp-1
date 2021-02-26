import React, { useContext, useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import {
  Text,
  Image,
  StyleSheet,
  View,
  Button,
  Dimensions,
  Platform,
  TouchableHighlight,
  Linking,
} from 'react-native'
import { Icon } from 'react-native-elements'
import { useParams } from 'react-router-native'
import { Rating } from 'react-native-elements'
import GoBack from '../components/GoBack'
import moviesContext from '../context/MoviesContext'
import getResponsiveImageDimension from '../lib/responsive-image'
import { getHomepageOfMovie } from '../service/fetchMovies'

const RATIO = 0.25
const responsiveDimension = getResponsiveImageDimension(RATIO)(
  Dimensions.get('window').width,
)

const Movie = () => {
  const [apiMovies] = useContext(moviesContext)
  const [homepage, setHomepage] = useState('')
  const { id } = useParams()
  const movie = apiMovies.find((movie) => movie.id === Number(id))

  useEffect(() => {
    ;(async () => {
      try {
        setHomepage(await getHomepageOfMovie(movie.id))
      } catch (err) {
        console.error(err)
      }
    })()
  }, [])

  return (
    <>
      <Image style={styles.image} source={{ uri: movie.image }} />
      <View style={styles.arrow}>
        <GoBack />
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.container}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.thumbnail}
              resizeMode={'cover'}
              source={{ uri: movie.image }}
            />
          </View>
          <View style={styles.informations}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.author}>{movie.title}</Text>
            <Rating
              type="star"
              readonly={true}
              ratingCount={5}
              startingValue={movie.vote_average / 2}
              imageSize={16}
            />
          </View>
          <View style={styles.playIconContainer}>
            <Icon color="#fff" size={48} name="arrow-right" />
          </View>
        </View>
        <ScrollView>
          <View style={styles.synopsisContainer}>
            <Text style={styles.synopsis}>Synopsis</Text>
            <Text>{movie.overview}</Text>
          </View>
        </ScrollView>
        <TouchableHighlight
          style={styles.buttonWrapper}
          underlayColor="#f44802cc"
          onPress={() => Linking.openURL(homepage || 'http://google.com')}
        >
          {Platform.OS === 'ios' ? (
            <Button color="#fff" title="View website" />
          ) : (
            <Text style={{ color: '#fff' }}>View Website</Text>
          )}
        </TouchableHighlight>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    height: responsiveDimension,
    flexDirection: 'row',
  },
  contentWrapper: {
    flex: 1,
    marginTop: -24,
  },
  arrow: {
    position: 'absolute',
    top: 8,
    left: 8,
  },
  image: {
    height: 200,
    width: '100%',
  },
  imageWrapper: {
    width: responsiveDimension * 0.8,
    marginLeft: 16,
    borderWidth: 3,
    borderColor: '#fff',
    borderRadius: 6,
  },
  thumbnail: {
    flex: 1,
    borderRadius: 6,
  },
  playIconContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#f44802',
    borderRadius: 24,
    marginLeft: 'auto',
    marginRight: 16,
  },
  informations: {
    alignItems: 'flex-start',
    marginTop: 32,
    marginLeft: 8,
  },
  title: {
    fontWeight: 'bold',
  },
  synopsisContainer: {
    paddingLeft: 16,
    paddingBottom: 24,
    marginTop: 32,
  },
  synopsis: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingVertical: 10,
    marginHorizontal: 16,
    marginBottom: 8,
    backgroundColor: '#f44802',
    color: 'white',
    borderRadius: 12,
  },
})

export default Movie
