import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator()

import VisLogin from './vistas/VisLogin';
import VisInicio from './vistas/VisInicio';
import Visflex1 from './vistas/Visflex1';
import Visgrafica from './vistas/Visgrafica';
import VisMenuDrawer from './vistas/VisMenuDrawer';


function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='VisLogin' component={VisLogin} options={{title: 'Vista Login'}}></Stack.Screen>
      <Stack.Screen name='VMenu' component={VisMenuDrawer} options={{headerShown:false}}></Stack.Screen>
    <Stack.Screen name='Visflex1' component={Visflex1} options={{title: 'Practica Flex'}} ></Stack.Screen>
    <Stack.Screen name='VGrafica' component={Visgrafica} options={{title: 'Grafica'}} />
    </Stack.Navigator>
  )
}

function App(){
  return(
  <NavigationContainer>
    <MyStack></MyStack>
  </NavigationContainer>
  )
}

export default App;