import React from 'react';
import {
    View,
    Text,
    TextInput, Button, StatusBar
} from 'react-native';

export const Login = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: 'white', flex: 1, justifyContent: "center", alignItems: "center" }}>

            <StatusBar
                backgroundColor="black"
                barStyle="black"
            />

            <Text style={{ fontSize: 30, color: 'black' }}>
                Login</Text>

            <Text style={{ fontSize: 15, color: 'black' }}>
                Login to continue</Text>

            <View style={{ width: '80%', marginTop: 40 }}>
                <TextInput placeholder="Email" placeholderTextColor='#2C3E50' style={{
                    backgroundColor: '#F8F9F9', borderColor: 'black', borderWidth: 1, borderRadius: 5, paddingStart: 5
                }} />

                <TextInput placeholder="Password" placeholderTextColor='#2C3E50' secureTextEntry={true} style={{
                    backgroundColor: '#F8F9F9', borderColor: 'black', borderWidth: 1, borderRadius: 5, marginTop: 10, paddingStart: 5
                }} />

                <View style={{ marginTop: 20 }}></View>

                <Button title='Login' style={{ color: 'FFFFFF', marginTop: 30 }} onPress={() => {
                    navigation.navigate('Register')
                }} />
            </View>
        </View>
    );
};