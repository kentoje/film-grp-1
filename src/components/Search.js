import React from 'react';
import { TextInput, View, StyleSheet, Button } from "react-native";

export default class Search extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder='Titre du film'/>
        <Button title='Rechercher' onPress={() => {}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f44802',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  input: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 20,
    height: 50,
    borderColor: '#8E8E8E',
    borderWidth: 1,
    paddingLeft: 5,
    backgroundColor: '#FFF',
  }
})
