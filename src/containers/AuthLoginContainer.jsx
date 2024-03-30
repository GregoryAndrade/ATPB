import { useState } from "react";
import { ActivityIndicator, Image, Pressable, StyleSheet, Text, TextInput, View, Platform } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import Firebase from '../firebase';

export default function AuthLoginContainer({action}) {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [msg, setMsg] = useState(null);

    function verifyUser() {
        setIsLoading(true);
        const auth = getAuth(Firebase);
        signInWithEmailAndPassword(auth, userEmail, userPassword)
            .then(userCredential => {
                action(true);
            })
            .catch(error => {
                setMsg(error.message)
            }).finally(setIsLoading(false));
    }

    return(<View style={styles.container}>
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
                        <Text style={styles.btnText}>Acessar</Text>
                    </Pressable>
                </View>
            </View>
        }
        {msg &&
            <View>
                <Text style={styles.errorMsg}>{msg}</Text>
            </View>}
    </View>)
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
                backgroundColor: '#E4F1E6'
            },
            ios: {
                backgroundColor: '#D9E1E8'
            },
            default: {
                backgroundColor: '#fff'
            }
        })
    },
    btn: {
        margin: 15,
        padding: 10,
        backgroundColor: '#55828B',
        ...Platform.select({
            android: {
                backgroundColor: '#55828B'
            },
            ios: {
                backgroundColor: '#7C8483'
            }, default: {
                backgroundColor: '#71A2B6'
            }
        })
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
                backgroundColor: '#A7C4C2',
            },
            default: {
                backgroundColor: '#DADAD9'
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
})