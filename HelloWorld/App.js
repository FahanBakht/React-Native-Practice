/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TestInput,
  Button,
  StatusBar,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <Fragment style={{padding: 8}}>
      <View style={{ padding: 30 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <TextInput placeholder="Input String"
            style={{ width: '80%', borderColor: 'black', borderWidth: 1 }} />
          <Button title="Add" />
        </View>
      </View>

      <View style={{
         borderColor: 'black', borderWidth: 5,
        flexDirection: 'column' ,height: '70%',width:'100%'
      }}>

        <View style={{ flexDirection: 'row',flex:4 }}>

          <View style={{ backgroundColor: 'red', justifyContent: 'center', alignItems: 'center',flex:1}}>
            <Text>1</Text>
          </View>

          <View style={{ backgroundColor: 'green', justifyContent: 'center', alignItems: 'center',flex:1 }}>
            <Text>2</Text>
          </View>

        </View>

        <View style={{ flexDirection: 'column',flex:2 }}>
        
          <View style={{ backgroundColor: 'blue',height:'100%', justifyContent: 'center',  alignItems: 'center' }}>
            <Text>3</Text>
          </View>

        </View>

      </View>
    </Fragment>
  );
};


