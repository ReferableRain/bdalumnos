import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (


    <View style={styles.container}>
      <View style={styles.filas0}>
        <View style={styles.elementos0}>
        <Text style={styles.textoelementos0}> PRÁCTICA DE FLEX 1 by Luis Gonzalez</Text>
        </View>
      </View>

      <View style={styles.filas}> 
        <View style={styles.elementos}>
        </View>
        <View style={styles.elementos}>
        </View>
        <View style={styles.elementos}>
        </View>
      </View>

      <View style={styles.filas}>
        <View style={styles.elementos}></View>
        <View style={styles.elementos}></View>
        <View style={styles.elementos}></View>
      </View>
      
      <View style={styles.filas}>
      <View style={styles.elementos}></View>
      <View style={styles.elementos}></View>
      <View style={styles.elementos}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#9106aa',
    alignItems: 'center',
    justifyContent: 'center',
  },

  filas0:{
    flexDirection:'row',
    backgroundColor:'#068be1',
    alignItems:'center',
    justifyContent:'space-between',
    width:400,
    height:150,
  },

  elementos0:{
    width:360,
    height:100,
    marginLeft:20,
    marginRight:20,
    borderWidth:5,
    borderColor:'white',
    borderStyle:'dotted',
    opacity:0.8,
    borderRadius:10,
    backgroundColor:'#fe05f3',
  },

  textoelementos0:{
    color:'#000000',
    textAlign:'center',
    fontStyle:'italic',
    fontSize:30,
    fontWeight:'bold',
    margin:'auto',
    textShadowColor:'#ffffff',
    textShadowRadius:25,
  },

  filas:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:400,
    height:250,
    backgroundColor:'#0dd6f5',
   
  },

  elementos:{
    width:100,
    height:200,
    marginLeft:10,
    marginRight: 10,
    borderWidth:5,
    borderColor:'white',
    borderStyle:'solid',
    opacity:0.7,
    borderRadius:11,
    backgroundColor:"#510095",
  },
});