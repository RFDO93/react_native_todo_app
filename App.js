import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, ActivityIndicator, } from 'react-native';
import Head from './Head';
import Body from './Body';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tareas: [],
      texto: '',
      descargando: true,
    };
  }

  componentDidMount(){
    this.llamardatostelefono();
  }

  establecerTexto = (value) => {
    this.setState({ texto: value});
  }

  agregarTarea = () => {
    const tareasaux = [...this.state.tareas, {texto: this.state.texto, key: Date.now() }];
    this.guardartelefono(tareasaux);
    this.setState({
      tareas: tareasaux,
      texto: '',
    });
  }

  eliminartarea = (id) => {
    const nuevatarea = this.state.tareas.filter((tarea) => {
      return tarea.key !== id
    });
    this.guardartelefono(nuevatarea);
    this.setState({
      tareas: nuevatarea,
    });
  }

  guardartelefono = (valor) => {
    AsyncStorage.setItem("@Appcursoudemy:array", JSON.stringify(valor) )
    .then( (valor) => {console.log(valor)} )
    .catch((error) => {console.log(error)});;
  }

  llamardatostelefono = () => {
    AsyncStorage.getItem("@Appcursoudemy:array").then((data) => {
      console.log(data);
      setTimeout(() => {
        this.setState({ descargando: false,});
        if (data !== null) {
          this.setState({
            tareas: JSON.parse(data),
          });
        }
      }, 2000);
      
    }).catch((error) => {console.log(error); this.setState({ descargando: false,});});
  }

  render() {
    return (
      <View style={styles.container}>
        <Head cambiarTexto={this.establecerTexto} agregar={this.agregarTarea} texto={this.state.texto}  />
         { this.state.descargando &&
          <ActivityIndicator size="large" style={{backgroundColor:'#C0C0C0',flex: 9}} />
         }

         { !this.state.descargando &&
            <Body tareas={this.state.tareas} eliminar={this.eliminartarea}/>
         }
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
