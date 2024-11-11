import React, { useState, useEffect } from 'react';
import { Image, Button, View, Text, SafeAreaView, ActivityIndicator, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { storage } from '../Control/Firebase';
import { getDownloadURL, uploadBytes, ref } from 'firebase/storage';

const VisFoto = ({ nc }) => {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Función para obtener la imagen desde Firebase al iniciar el componente
  useEffect(() => {
    const fetchImageFromFirebase = async () => {
      setIsLoading(true);
      try {
        const storageRef = storage().ref(`photos/${nc}`);
        //const storageRef = ref(storage, photos/${nc});  // Ruta a la imagen en Firebase Storage
        const imageUrl = await getDownloadURL(storageRef); // Obtener el URL de descarga
        setImage(imageUrl);  // Establecer la URL de la imagen
      } catch (error) {
        console.log("No se pudo obtener la imagen: ", error);
        setImage(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImageFromFirebase();
  }, [nc]); // Ejecutar el efecto cuando cambie el número de control (nc)

  const pickImage = async () => {
    setIsLoading(true);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const uploadURL = await uploadImageAsync(result.assets[0].uri);
      setImage(uploadURL);
    } else {
      setImage(null);
    }
    setIsLoading(false);
  };

  const uploadImageAsync = async (uri) => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Error de red"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    try {
      const storageRef = storage().ref(`photos/${nc}`);
      //const storageRef = ref(storage, photos/${nc});
      const result = await uploadBytes(storageRef, blob);
      blob.close();
      return await getDownloadURL(storageRef);
    } catch (error) {
      console.log('Upload failed: ', error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <TouchableOpacity
          style={{ alignItems: 'center', backgroundColor: '#4FC135', padding: 10 }}
          onPress={pickImage}
        >
          {isLoading ? (
            <ActivityIndicator style={{ color: '#ff00000' }} />
          ) : (
            <Text>Seleccionar una foto...</Text>
          )}
        </TouchableOpacity>

        {!image ? (
          <Text>No se ha seleccionado ninguna imagen</Text>
        ) : (
          <Image source={{ uri: image }} style={{ width: 200, height: 200, padding: 10 }} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default VisFoto;