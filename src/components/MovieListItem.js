import React from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
} from 'react-native'

const RATIO = 0.25
const multiply = (RATIO) => (mesurement) => RATIO * mesurement
const quarterOfValue = multiply(RATIO)
const responsiveDimension = quarterOfValue(Dimensions.get('window').width)

const MovieListItem = ({ item }) => (
  <TouchableHighlight
    onPress={() => {
      alert('a')
    }}
  >
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          resizeMode={'contain'}
          source={{
            uri:
              'https://lumiere-a.akamaihd.net/v1/images/image_a89e70e8.jpeg?region=0%2C0%2C540%2C810',
          }}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.release_date}</Text>
      </View>
    </View>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  container: {
    height: responsiveDimension,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  imageWrapper: {
    width: responsiveDimension,
  },
  image: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
  },
})

export default MovieListItem
