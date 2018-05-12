import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import Tarea from './Tarea';

export default class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.tareas}
          renderItem={({ item }) => <Tarea item={item} eliminar={this.props.eliminar} />}
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
