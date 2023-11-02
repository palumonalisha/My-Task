import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { cloneDeep } from 'lodash/lang'

function Login({ navigation }) {
    const [signInReg, setSignInReg] = useState({
        username: '',
        password: ''

    })

    const [error, setError] = useState({
        username: '',
        password: ''

    })



    return (
        <View style={authStyle.container}>

            <View>

                <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
                    style={{
                        width: 400, height: 300, justifyContent: 'center',
                        alignItems: 'center', marginBottom: 40
                    }} />

            </View>

            <View style={{ marginBottom: 160 }} >
                <Text style={authStyle.header}>Sign In</Text>

                <TextInput
                    style={authStyle.input}
                    placeholder="Username"
                    // placeholder={{ label: "Select Week", value: null,color:'black' }}

                    onChangeText={(value) => {
                        const UpdatedSignIn = cloneDeep(signInReg)
                        UpdatedSignIn.username = value
                        setSignInReg(UpdatedSignIn)
                    }}
                    value={signInReg.username}
                />

                <TextInput
                    style={authStyle.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(value) => {
                        const UpdatedSignIn = cloneDeep(signInReg)
                        UpdatedSignIn.password = value
                        setSignInReg(UpdatedSignIn)
                    }}
                    value={signInReg.password}
                />

                <TouchableOpacity style={authStyle.loginButton} onPress={() => navigation.navigate('HomePage')}>
                    <Text style={authStyle.loginButtonText}  >Sign In</Text>
                </TouchableOpacity>


            </View>


        </View>

    );
}

const authStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white'

    },
    header: {
        fontSize: 37,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#6E1CD5',
        marginLeft: 5
    },
    input: {
        // width: '80%',
        width: 260,
        height: 40,
        borderWidth: 2,
        borderColor: '#D3CADE',
        borderRadius: 55,
        paddingHorizontal: 10,
        marginBottom: 15,
        fontSize: 14,
        color: "black",
    },

    loginButton: {
        width: 260,
        height: 40,
        alignItems: 'center',
        backgroundColor: '#6E1CD5',
        paddingHorizontal: 30,
        paddingVertical: 6,
        borderRadius: 85,
        borderColor: '#BDBDBD',
    },

    loginButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 4,
    },

    error: {
        color: 'red',
    },

    footer: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000000',
        paddingTop: 10,
        marginRight: 120,

    },

    //   placeholder: {
    //     color: 'blue',
    //     fontSize: 14
    //     },

});



export default Login;
