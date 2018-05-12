import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity,} from 'react-native';
import {FontAwesome} from '@expo/vector-icons'

class Tarea extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<Text>{this.props.item.texto}</Text>
      	<TouchableOpacity onPress={() => {this.props.eliminar(this.props.item.key)}}>
      		<FontAwesome name="trash" fontSize={35} color="red"/>
      	</TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    	backgroundColor: '#C0C0C0',
    	flexDirection: 'row',
    	justifyContent: 'space-between',
    	padding: '5%',
	},	
});


export default Tarea;