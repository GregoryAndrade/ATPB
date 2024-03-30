
import { useState } from "react";
import { ActivityIndicator, Image, Pressable, StyleSheet, Text, TextInput, View, Platform } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import Firebase from '../firebase';
import Toast from 'react-native-toast-message';

export default function AuthRegisterContainer(){
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [msg, setMsg] = useState(null)

    const showToast = () => {
        Toast.show({
          type: 'success',
          text1: 'Registro efetuado com sucesso!',
          text2: 'Va para tela de Acesso.'
        });
      }

    function verifyUser() {
        setIsLoading(true);
        const auth = getAuth(Firebase);
        createUserWithEmailAndPassword(auth, userEmail, userPassword)
            .then(userCredential => {
                showToast();
            })
            .catch(error => {
                setMsg(error.message)

            }).finally(setIsLoading(false));
    }

    return (
        <View style={styles.container}>
            {isLoading && <ActivityIndicator />}
            {!isLoading &&
                <View>
                    <View>
                        <Text style={styles.textLabel}>Email: </Text>
                        <TextInput style={styles.textInput}
                            value={userEmail}
                            onChangeText={setUserEmail}
                            placeholder="Digite seu email..."
                        />
                        <Text style={styles.textLabel}>Senha: </Text>
                        <TextInput style={styles.textInput}
                            value={userPassword}
                            onChangeText={setUserPassword}
                            placeholder="Digite sua senha..."
                        />
                        <Pressable
                            style={styles.btn}
                            onPress={() => verifyUser()}
                        >
                            <Text style={styles.btnText}>Registrar</Text>
                        </Pressable>
                    </View>
                    <Toast />
                </View>
            }
            {msg &&
                <View>
                    <Text style={styles.errorMsg}>{msg}</Text>
                </View>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 10,
        margin: 10,
        borderRadius: 6,
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowColor: '#000',
        shadowOffset: { height: 3, width: 3 },
        elevation: 5,
        ...Platform.select({
            android: {
                backgroundColor: '#A7C4C2',
            },
            default: {
                backgroundColor: '#DADAD9'
            }
        })
    },
    btn: {
        margin: 15,
        padding: 10,
        backgroundColor: '#F06449',

    },
    btnText: {
        color: 'white',
        textAlign: 'center'
    },
    textInput: {

        margin: 5,
        padding: 10,
        ...Platform.select({
            android: {
                backgroundColor: '#C9E4CA',
            },
            default: {
                backgroundColor: 'white'
            }
        })
    },
    textLabel: {
        opacity: 0.6,
        margin: 5
    },
    errorMsg: {
        color: 'red',
        textAlign: 'center'
    }
});