import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer,useNavigation,DrawerActions} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon  from 'react-native-vector-icons/Entypo';

import VisInicio from './VisInicio';
import VisconsultaAlumnos from './VisconsultaAlumnos';
import VisGPS from './VisGPS';
import Visgrafica from './Visgrafica';
import VisaltaAlumno from './VisaltaAlumno';
import VisFoto from './VisFoto';
import ViseditarAlumno from './ViseditarAlumno';
import VisMapa from './VisMapa';
import VisDireccion from './VisDireccion';

const DrawerApp=()=>{
  const Drawer=createDrawerNavigator();
  return(
    <Drawer.Navigator screenOptions={{
      statusBarcolor: '#0163d2',
      headerStyle: {
        backgroundColor: '#0163d2'    
      },
      headerTintColor:'#fff',
      headerTitleAlign:'center',  
      headerTitle: 'App de Alumnos',
      headerShown:true,
      
    }}>

            <Drawer.Screen name="VisInicio" component={VisInicio} options={{
                title: 'Home',
                drawerIcon: config => <Icon
                size={23}
                name= "home"/>

            }} /> 
            <Drawer.Screen name="Visgrafica" component={Visgrafica} options={{
                title: 'Grafica',
                drawerIcon: config => <Icon
                size={23}
                name= "bar-graph"/>

            }} /> 
            <Drawer.Screen name="VisGPS" component={VisGPS} options={{
                title: 'GPS',
                drawerIcon: config => <Icon
                size={23}
                name= "compass"/>

            }} /> 
            <Drawer.Screen name="VisconsultaAlumnos" component={VisconsultaAlumnos} options={{
                title: 'Consulta Alumnos',
                drawerIcon: config => <Icon
                size={23}
                name= "man"/>

            }} />
            <Drawer.Screen name="VisFoto" component={VisFoto} options={{
                title: 'Foto',
                drawerIcon: config => <Icon
                size={23}
                name= "folder-images"/>
                

            }} />
            <Drawer.Screen name="VisMapa" component={VisMapa} options={{
                title: 'Mapa',
                drawerIcon: config => <Icon
                size={23}
                name= "compass"/>

            }} /> 
            
            <Drawer.Screen name="VisaltaAlumno" component={VisaltaAlumno} options={{drawerItemStyle:{display:'none'}}}/>
            <Drawer.Screen name="ViseditarAlumno" component={ViseditarAlumno} options={{drawerItemStyle:{display:'none'}}}/>
            <Drawer.Screen name="VisDireccion" component={VisDireccion} options={{drawerItemStyle:{display:'none'}}}/>
  </Drawer.Navigator>
  )
}

function VisMenuDrawer() {
        return(
            <DrawerApp/>
        );
}


export default VisMenuDrawer;