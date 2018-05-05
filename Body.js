import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

export default class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Body</Text>
        <FlatList
          data={this.props.tareas}
          renderItem={ ({item}) => <Text>{item.texto}</Text> }
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#C0C0C0',
  },
});
