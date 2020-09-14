import React from 'react';
import {
  View,
  Text, 
  TextInput, Button
} from 'react-native';


export default function App() { 
  return (
    <View style={{backgroundColor:'#5D6D7E',flex:1,justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:30,color:'white'}}>
        Login</Text>

        <Text style={{fontSize:15,color:'white'}}>
        Login to continue</Text>

        <View style={{width:'80%',marginTop:40}}>
          <TextInput placeholder="Email" placeholderTextColor='#2C3E50' style={{
            backgroundColor:'#D5D8DC',borderColor:'black',borderWidth:1,borderRadius:5,paddingStart:5}} />
          
          <TextInput placeholder="Password" placeholderTextColor='#2C3E50' secureTextEntry={true} style={{
            backgroundColor:'#D5D8DC',borderColor:'black',borderWidth:1,borderRadius:5,marginTop:10,paddingStart:5}} />

          <View style={{marginTop:20}}></View>

          <Button title='Login' style={{color:'FFFFFF', marginTop:30}} onPress={()=>{
            alert("Attempt to Login")
          }} />
        </View>
    </View>
  );
};