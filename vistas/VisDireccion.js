import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';

const VisDireccion = () => {
  const [userLocation, setUserLocation] = useState(null);
  const fixedLocation = { latitude: 20.63196, longitude: -105.20953 }; // Ubicación fija (ejemplo)

  useEffect(() => {
    (async () => {
      // Solicitar permiso de ubicación
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permiso de ubicación denegado');
        return;
      }

      // Obtener ubicación actual del usuario
      let currentLocation = await Location.getCurrentPositionAsync({});
      setUserLocation({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: fixedLocation.latitude,
          longitude: fixedLocation.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {/* Marcador de la ubicación fija */}
        <Marker
          coordinate={fixedLocation}
          title="Ubicación Fija"
          description="Este es el punto fijo"
        />

        {/* Marcador de la ubicación actual del usuario */}
        {userLocation && (
          <Marker
            coordinate={userLocation}
            title="Tu ubicación"
            description="Esta es tu ubicación actual"
          />
        )}

        {/* Línea recta entre la ubicación actual del usuario y la ubicación fija */}
        {userLocation && (
          <Polyline
            coordinates={[userLocation, fixedLocation]}
            strokeColor="blue" // Color de la línea
            strokeWidth={3} // Grosor de la línea
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default VisDireccion;