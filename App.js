import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Head from './Head';
import Body from './Body';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tareas: [],
      texto: '',
    };
  }

  establecerTexto = (value) => {
    this.setState({ texto: value});
  }

  agregarTarea = () => {
    this.setState({
      tareas: [...this.state.tareas, {texto: this.state.texto, key: Date.now() }],
      texto: '',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Head cambiarTexto={this.establecerTexto} agregar={this.agregarTarea} texto={this.state.texto}  />
        <Text> {this.state.texto} </Text>
        <Body tareas={this.state.tareas} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
