import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const VisGPS = () => {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permiso de ubicación denegado');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = currentLocation.coords;
      setLocation({
        ...location,
        latitude,
        longitude,
      });

      // Suscribirse a actualizaciones de ubicación
      const subscription = Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High, distanceInterval: 10 },
        (updatedLocation) => {
          const { latitude, longitude } = updatedLocation.coords;
          setLocation({
            ...location,
            latitude,
            longitude,
          });
        }
      );

      return () => {
        if (subscription) {
          subscription.remove();
        }
      };
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Latitud: {location.latitude}</Text>
      <Text style={styles.text}>Longitud: {location.longitude}</Text>
      <MapView
        style={styles.map}
        region={location}
        showsUserLocation={true}
        followsUserLocation={true}
      >
        <Marker
          coordinate={{ latitude: location.latitude, longitude: location.longitude }}
          title="Tu ubicación"
        />
      </MapView>
    </View>
  );
};

export default VisGPS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  map: {
    width: '100%',
    height: '80%',
  },
});