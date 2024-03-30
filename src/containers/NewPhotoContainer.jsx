import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { Camera } from 'expo-camera';

export default function NewPhotoContainer({action}){
    const [hasPermission, setHasPermission] = useState(null);
    const cameraRef = useRef(null);
    const [photoUri, setPhotoUri] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const takeAPicture = async () => {
        if (cameraRef.current) {
            const picture = await cameraRef.current.takePictureAsync();
            setPhotoUri(picture.uri);
        }
    };

    function savePhoto(){
        action(photoUri);
        setPhotoUri(null);
    }

    return (
        <View style={styles.container}>
            {hasPermission === null && <Text>Solicitando permissão...</Text>}
            {hasPermission === false && <Text>Acesso à câmera negado</Text>}
            {hasPermission && (
                !photoUri && (
                    <View style={styles.containerTakePicture}>
                        <Camera
                            style={styles.cameraTakePicture}
                            ref={cameraRef}
                        />
                        <Pressable style={styles.btnTakePicture} onPress={takeAPicture}>
                            <Text>Tirar Foto</Text>
                        </Pressable>
                    </View>
                )
            )}
            {hasPermission && (
                photoUri && (
                    <View style={styles.containerTakePicture}>
                        <Image
                            style={styles.cameraTakePicture}
                            source={{uri: photoUri}}
                        />
                        <Pressable style={styles.btnAnotherPicture} onPress={() => setPhotoUri(null)}>
                            <Text>Tirar Outra Foto</Text>
                        </Pressable>
                        <Pressable style={styles.btnTakePicture} onPress={savePhoto}>
                            <Text>Salvar Foto</Text>
                        </Pressable>
                    </View>
                )
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerTakePicture: {
        padding: 2,
        height: '90%',
        width: '90%'

    },
    cameraTakePicture: {
        flex: 1,
        height: '80%'
    },
    btnTakePicture: {
        padding: 20,
        width: '80%',
        margin: 5,
        backgroundColor: '#9CBFA7',
        alignItems: 'center',
        alignSelf: 'center'
    },
    btnAnotherPicture: {
        padding: 20,
        width: '80%',
        margin: 5,
        backgroundColor: '#FE5F55',
        alignItems: 'center',
        alignSelf: 'center'
    },

}) 