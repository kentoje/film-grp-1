import React from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
} from 'react-native'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const RESPONSIVE_WIDTH = windowWidth * (150 / windowWidth)
const RESPONSIVE_HEIGHT = windowHeight * (150 / windowHeight)

const MovieListItem = ({ item }) => {
  return (
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
                'https://lh3.googleusercontent.com/proxy/uH8BK_32tod6bziRN2ysytYq-lcOm1Ze8zvmzb9zBbD1Vrr5O-4joQtaxAuN7F0wCbmNKa99G13_GBlTr3_aV01V1vqYYsqkBBzIDXH_BrpeBoteBP8z1pENC5mQ6xkkSLE4EOm-7kaW',
            }}
          />
        </View>
        <View style={styles.content}>
          <Text>{item.title}</Text>
          <Text>{item.release_date}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    height: RESPONSIVE_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  imageWrapper: {
    width: RESPONSIVE_WIDTH,
  },
  image: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
})

export default MovieListItem
