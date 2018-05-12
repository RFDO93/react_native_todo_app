import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class Head extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.texto}
          onChangeText= {this.props.cambiarTexto}
          placeholder="Aqui va el texto.."
          onSubmitEditing={this.props.agregar}
          value={this.props.texto}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#008080',
    justifyContent: 'center'
  },
  texto: {
    paddingHorizontal: 5,
  },
  titulo: {
    alignItems: 'center',
  },
});

export default Head;
