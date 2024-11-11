import { StyleSheet, Text, View, Button, TextInput, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import {useState} from 'react'
import firebase from '../Control/Firebase'
import DateTimePicker from '@react-native-community/datetimepicker';
import RadioButtonGroup, {RadioButtonItem} from 'expo-radio-button';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import VisFoto from './VisFoto';


const VisaltaAlumno = (props) => {
    const [state,setState]=useState({
      aluNC:"",
      aluNombre:"",
      aluApellido:"",
      aluCorreo:"",
      aluTelefono:"",
      aluFNac:"",
      aluSexo:'Femenino',


    })

    const [resetFoto, setResetFoto] = useState(false);


    const [date,setDate]=useState(new Date())
    const [mode,setMode]=useState('date')
    const [show,setShow]=useState(false)

    const onChange=(event, selectedDate)=>{
      const currentDate=selectedDate
      setShow(false)
      setDate(currenDate)

    }

    const showMode=(currentMode)=>{
      setShow(true)
      setMode(currentMode)
    }

    const showDatepicker=()=>{
      showMode('date')
    }

    const [sexo,setSexo] =useState('Femenino');

    const handlerChangeGenero=(value)=>{
      setSexo(value)
    }

    // useState para manejo de carreras
    const[carrera, setCarrera]=useState({
      aluCarrera:"Seleccionar Carrera..."
    })


    const handlerChangeCarrera=(aluCarrera,value)=>{
      setCarrera({...carrera,[aluCarrera]:value})
    }
    
    const data=[
      {label: 'Ingeneria en sistemas',value:'1'},
      {label: 'Ingeneria en Gestion',value:'2'},
      {label: 'Licenciatura en Turismo',value:'3'},
      {label: 'Ingeneria en Electromecanica',value:'4'},
      {label: 'Arquitectura',value:'5'},
      {label: 'Licenciatura en Gastronomia',value:'6'},
      
    ]

    const guardarAlumno=async()=>{
      if(state.aluNC==='' || state.aluNombre===''){
        alert("Favor de llenar todos los datos")

      }else{
        await conexion
        .collection('tblAlumnos')
        .add({
          aluNC:state.aluNC,
          NombreAlumno:state.aluNombre,
          ApellidoAlumno:state.aluApellido,
          CorreoAlumno:state.aluCorreo,
          TelefonoAlumno:state.aluTelefono,
          aluFNac:date.toLocaleDateString([],{dateStyle:'medium'}),
          aluSexo:sexo,
          aluCarrera:carrera.aluCarrera,
        

        })
        alert("Alumno se guardo correctamente")
        props.navigation.navigate('VisconsultaAlumnos')
      }
    }

  const handleChnageText=(aluNC,value)=>{
    setState(
      {...state,[aluNC]:value

      })
  }

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
            <View>
              <Text style={styles.text}>Número de Control</Text>
              <TextInput style={styles.inputText} 
              placeholder='Escribe tu Numero de Control'onChangeText={(Value)=>handleChnageText('aluNC', Value)}/>
            </View>

            <View>
              <Text style={styles.text}>Nombre</Text>
              <TextInput style={styles.inputText} 
              placeholder='Escribe tu Nombre'onChangeText={(Value)=>handleChnageText('aluNombre', Value)}/>
            </View>

            <View>
              <Text style={styles.text}>Apellido</Text>
              <TextInput style={styles.inputText} 
              placeholder='Escribe tu Apellido'onChangeText={(Value)=>handleChnageText('aluApellido', Value)}/>
            </View>

            <View>
              <Text style={styles.text}>Correo</Text>
              <TextInput style={styles.inputText} 
              placeholder='Escribe tu Correo'onChangeText={(Value)=>handleChnageText('aluCorreo', Value)}/>
            </View>

            <View>
              <Text style={styles.text}>Telefono</Text>
              <TextInput style={styles.inputText} 
              placeholder='Escribe tu Telefono'onChangeText={(Value)=>handleChnageText('aluTelefono', Value)}/>
            </View>
            
            <View>
              <Text style={styles.text}>Seleccione uno</Text>
                <View>
                  <RadioButtonGroup 
                      selected={sexo}
                      onSelected={(Value) => handlerChangeGenero(Value)}
                      radioBackground="white">

                      <RadioButtonItem value="Masculino" 
                        label={<Text style={styles.rb} >Masculino</Text>} />
                      <RadioButtonItem value="Femenino"
                        label={<Text style={styles.rb}>Femenino</Text>} />
                  </RadioButtonGroup>
                </View>    
            </View>

            <View style={{width:'80%' }}>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={400}
              labelField="label"
              valueField="value"
              placeholder={carrera.aluCarrera}
              searchPlaceholder="Search..."
              onChange={(item) => handlerChangeCarrera('aluCarrera',item.label)}      
              renderLeftIcon={() => (
                <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
              )}
            />
       
            </View>


            <SafeAreaView>
                  <View>
                    <Button title='Fecha de nacimiento' onPress={showDatepicker}/>
                    </View>
                    <Text style={styles.fecha} >Fecha: 
                      {date.toLocaleString([], {dateStyle: 'medium' })}
                    </Text>
                  {show && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={date}
                      mode={mode}
                      is24Hour={true}
                      onChange={onChange}
                    />
                  )} 
              </SafeAreaView>


              <View style={{ width: 360, height: 250 }}>
          <VisFoto nc={state.aluNC} resetImage={resetFoto} />
        </View>

            <View>
              <Button style={{margin:80}} title='Guardar Alumnos'onPress={()=>guardarAlumno()}></Button>
            </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default VisaltaAlumno

const styles = StyleSheet.create({
  container:{
    width:'80%',
    padding:10,
    alignContent:'center',
    backgroundColor:'#8E9AE7',
    alignItems:'center',
    alignSelf: 'center',
  },
  inputText:{
    borderBottomWidth: 0.5, 
    height: 28, 
    width: 280,
    fontSize: 20, 
    alignSelf: 'center',
    borderBottomColor: '#8e93a1',
    textAlign: 'center', 
    marginBottom: 15,
    backgroundColor:'#727777',
  },
  text:{
    borderBottomWidth: 0.5, 
    height: 35, 
    width: 280,
    fontSize: 20, 
    alignSelf: 'center',
    borderBottomColor: '#8e93a1',
    textAlign: 'center', 
    marginBottom: 10,
    backgroundColor:'blue',
    color:'white',
  },
  fecha:{
    borderBottomWidth: 0.5, 
    height: 28, 
    width: 275,
    fontSize: 15, 
    alignSelf: 'center',
    borderBottomColor: '#8e93a1',
    textAlign: 'center', 
    marginBottom: 15,
    backgroundColor:'#727777',
  },
  rb:{
    width: '85%',
    fontWeight:'bold',
    height:30,
    fontSize:20, 
    marginBottom:10, 
    backgroundColor:'#727777',
  },
  dropdown: {
    backgroundColor:'blue',
    margin: 5,
    height: 60,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 12,
    color:'white',
  },
  selectedTextStyle: {
    fontSize: 12,
    color:'white',
  },
  iconStyle: {
    width: 20,
    height: 20,
},
inputSearchStyle: {
  height: 40,
  fontSize: 16,
},
})