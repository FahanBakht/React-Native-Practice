import React from 'react';
import {
    View,
    Text,
    TextInput, Button, StatusBar
} from 'react-native';

export const Register = () => {
    return (
        <View style={{ backgroundColor: 'white', flex: 1, justifyContent: "center", alignItems: "center" }}>
            <StatusBar
                backgroundColor="black"
                barStyle="black"
            />

            <Text style={{ fontSize: 30, color: 'black' }}>
                Register</Text>

            <Text style={{ fontSize: 15, color: 'black' }}>
                Register to continue</Text>

            <View style={{ width: '80%', marginTop: 40 }}>

                <TextInput placeholder="Full Name" placeholderTextColor='#2C3E50' style={{
                    backgroundColor: '#F8F9F9', borderColor: 'black', borderWidth: 1, borderRadius: 5, paddingStart: 5
                }} />

                <TextInput placeholder="Email" placeholderTextColor='#2C3E50' style={{
                    backgroundColor: '#F8F9F9', borderColor: 'black', borderWidth: 1, borderRadius: 5, marginTop: 10, paddingStart: 5
                }} />

                <TextInput placeholder="Password" placeholderTextColor='#2C3E50' secureTextEntry={true} style={{
                    backgroundColor: '#F8F9F9', borderColor: 'black', borderWidth: 1, borderRadius: 5, marginTop: 10, paddingStart: 5
                }} />

                <View style={{ marginTop: 20 }}></View>

                <Button title='Register' style={{ color: 'FFFFFF', marginTop: 30 }} onPress={() => {
                    alert("Attempt to Register")
                }} />
            </View>

        </View>
    );
};