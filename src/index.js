/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';

import {Header,Button,Avatar,SocialIcon,FormLabel,Text,Divider,FormInput,Card,ListItem
} from 'react-native-elements';

import Success from './components/success';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  click(){



  }
  render() {


    return (

      <View>
        <Header
            backgroundColor="#000"
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Maquetando ando', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <View>
          <FormLabel>Name</FormLabel>
          <FormInput />
          <FormLabel>Email</FormLabel>
          <FormInput />
          <FormLabel>Password</FormLabel>
          <FormInput />
          <Button
            title='Registrarse'
            rounded
            onPress={this.click}
            backgroundColor='#ee0606'
             />
             <Divider style={{marginTop: 10, height:2, backgroundColor: '#000' }} />
          <Text h2 style={{color:"#000", textAlign: "center"}}>Or, sign in with:</Text>

            <SocialIcon
              title='Sign in with Facebook'
              button
              type='facebook'
            />

            <SocialIcon
              title='Sign in with Facebook'
              button
              type='twitter'
            />

          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#000',
    marginBottom: 5,
  },
});
