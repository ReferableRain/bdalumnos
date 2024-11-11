import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const VisMapa = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    let interval;

    const getLocation = async () => {
      // Solicitar permiso de ubicación
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permiso de ubicación denegado');
        return;
      }

      // Obtener ubicación actual
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
    };

    // Obtener la ubicación inicial
    getLocation();

    // Actualizar la ubicación cada 10 segundos
    interval = setInterval(getLocation, 10000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  // Navega a VisMapa pasando las coordenadas
  const handleMapPress = () => {
    navigation.navigate('VisDireccion', {
      latitude: location?.latitude,
      longitude: location?.longitude,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Ubicación Actual</Text>
      {errorMsg ? (
        <Text style={styles.errorText}>{errorMsg}</Text>
      ) : location ? (
        <>
          <Text style={styles.coordText}>Latitud: {location.latitude}</Text>
          <Text style={styles.coordText}>Longitud: {location.longitude}</Text>
          <TouchableOpacity style={styles.button} onPress={handleMapPress}>
            <FontAwesome name="map" size={20} color="#fff" />
            <Text style={styles.buttonText}>Ver Mapa</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text style={styles.loadingText}>Obteniendo ubicación...</Text>
      )}
    </View>
  );
};

export default VisMapa;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  coordText: {
    fontSize: 18,
    marginVertical: 5,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  loadingText: {
    fontSize: 18,
    color: '#888',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
  },
});