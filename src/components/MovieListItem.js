import React, { memo } from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
} from 'react-native'
import { Icon } from 'react-native-elements'
import { useHistory } from 'react-router-native'

const RATIO = 0.25
const multiply = (RATIO) => (measurement) => RATIO * measurement
const quarterOfValue = multiply(RATIO)
const responsiveDimension = quarterOfValue(Dimensions.get('window').width)

const MovieListItem = ({ item }) => {
  const history = useHistory()

  return (
    <TouchableHighlight
      underlayColor="#f4480222"
      onPress={() => {
        history.push(`/movie/${item.id}`)
      }}
    >
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            resizeMode={'contain'}
            source={{
              uri: item.image,
            }}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.description}>
            <Text style={styles.title}>{item.title}</Text>
            {item.isPopular && <Icon name="star" color="#f44802" size={14} />}
          </View>
          <Text>{item.release_date}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

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
  description: {
    flexDirection: 'row',
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

export default memo(MovieListItem)
