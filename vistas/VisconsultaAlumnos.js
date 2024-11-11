import { StyleSheet,View,Text,TouchableOpacity,Alert,Button,ScrollView } from 'react-native'
import React from 'react'
import { useEffect,useState } from 'react'
import { ListItem,Avatar } from 'react-native-elements'



const VisconsultaAlumnos = (props) => {
  const [alumnos,setAlumnos]=useState([]);

  const mostrarAlumnos=async ()=>{
        try{
          const rsAlumnos=[];
          await conexion
          .collection('tblAlumnos')
          .get()
          .then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
            const {
              aluNC,
              NombreAlumno,
              ApellidoAlumno,
              CorreoAlumno,
            }=doc.data();
             rsAlumnos.push({
              id:doc.id,
              aluNC,
              NombreAlumno,
              ApellidoAlumno,
              CorreoAlumno,
             }); 
          })
          })
          setAlumnos(rsAlumnos);
        } catch(e){
          alert("Mensaje: "+e);
        }
  }
  
  useEffect(()=>{
    const refresh=props.navigation.addListener("focus", async()=>{
      mostrarAlumnos();
    }, []);
    return refresh;
  },[props])
  
  return (
    <ScrollView>
        <Button title="Alta alumnos" onPress= {()=>props.navigation.navigate("VisaltaAlumno") } />
        {
          alumnos.map((alumnos) => {
             return (
              <ListItem  key={alumnos.id} 
              bottomDivider 
                onPress= {()=> props.navigation.navigate('ViseditarAlumno', {
                id:alumnos.id,
                fecha:alumnos.aluFNac,
                carrera:alumnos.aluCarrera,
                generoActual:alumnos.aluGenero, 
                } ) } 
             >  
                <ListItem.Chevron />
                <Avatar
                    rounded title ="usr"
                    size="large"
                    source={{uri:'https://randomuser.me/api/portraits/men/36.jpg',
                    }}
              />
                <ListItem.Content>
                     <ListItem.Title>{alumnos.aluNC}</ListItem.Title>
                     <ListItem.Subtitle>{alumnos.NombreAlumno}</ListItem.Subtitle>
                     <Text>{alumnos.CorreoAlumno}</Text>
                </ListItem.Content>
             </ListItem>
             
              );

          })} 
    </ScrollView>

  )
}

export default VisconsultaAlumnos

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center', //centrado horizontal
    justifyContent: 'space-between', //centrado vertical
    height:'100%',
    width:'100%',
    display:'flex',
  },
  filaCabecera:{
    display:'flex',
    flexDirection:'row',
    backgroundColor: 'grey',
    width:'90%',
    height:'10%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
  },
  filaForm:{
    display:'flex',
    flexDirection:'row',
    backgroundColor: '#2c77c7',
    width:'90%',
    height:'88%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
  },
  estiloBoton:{
    width:'30%',
    height:'90%',
    backgroundColor:'#7ac72c',
    display:'flex',
    
    borderRadius:10,
  },
  estiloTextoBoton:{
      fontSize:20,
      color:'white',
      textAlign:'center',
      paddingTop:'8%'
  },
  entradas: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  inputGroup: {
    marginBottom: 15,
  },
})