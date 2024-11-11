import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const VisInicio = () => {
  return (
    <ImageBackground
    source={require('../imagenes/chap_364_naruto_vs_sasuke_by_raidan91.jpg')}
    style={styles.background}
    >
    <View style= {styles.container}>
      <Text>VisInicio</Text>
    </View>
    </ImageBackground>
  );
}

export default VisInicio

const styles = StyleSheet.create({
background:{
  flex:1,
  resizeMode:'cover', //ajusta la imagen para que cubra el fondo
  justifyContent:'center',
},
container:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
},
});