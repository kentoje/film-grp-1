import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const MovieListItem = ({ item }) => {
  return ( 
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          resizeMode={'contain'}
          source={{ uri: 'https://lh3.googleusercontent.com/proxy/uH8BK_32tod6bziRN2ysytYq-lcOm1Ze8zvmzb9zBbD1Vrr5O-4joQtaxAuN7F0wCbmNKa99G13_GBlTr3_aV01V1vqYYsqkBBzIDXH_BrpeBoteBP8z1pENC5mQ6xkkSLE4EOm-7kaW' }}
        />
      </View>
      <View style={styles.content}>
        <Text>{item.title}</Text>
        <Text>{item.release_date}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imageWrapper: {
    width: 100,
  },
  image: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
})

export default MovieListItem