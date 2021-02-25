import React from 'react'
import { useHistory } from 'react-router-native'
import { Icon } from 'react-native-elements'
import { Pressable, StyleSheet } from 'react-native'

const GoBack = () => {
  const history = useHistory()

  return (
    <Pressable
      onPress={() => {
        history.goBack()
      }}
    >
      <Icon iconStyle={styles.icon} color="#101010" size={48} name="arrow-left" />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  icon: {
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 1000,
    backgroundColor: '#fff',
  },
})

export default GoBack
