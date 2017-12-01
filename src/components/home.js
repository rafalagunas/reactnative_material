import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { StackNavigator } from "react-navigation"; // 1.0.0-beta.14
import {
  Header,
  Button,
  Avatar,
  SocialIcon,
  FormLabel,
  Text,
  Divider,
  FormInput,
  Card,
  ListItem
} from "react-native-elements";

import store from "../store";

/*const Home = ({ navigation }) => (
);*/
/*
export default class Home extends React.Component {
constructor(){
  super();

  this.state= {
    profile: {
      name: '',
      email: '',
      pass: '',

  }
}
}


  render() {
    return (

      <ScrollView>
        <Header
          backgroundColor="#000"
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{
            text: "Maquetando ando",
            style: { color: "#fff" }
          }}
          rightComponent={{ icon: "home", color: "#fff" }}
        />
        <View>
          <FormLabel>Name</FormLabel>
          <FormInput value={this.state.profile.name} />
          <FormLabel>Email</FormLabel>
          <FormInput value={this.state.profile.email}/>
          <FormLabel>Password</FormLabel>
          <FormInput value={this.state.profile.pass}/>
          <Button
            title="Ingresar datos"
            rounded
            onPress={() => this.addData(this.state.profile.name, this.state.profile.email), () => navigation.navigate("Details")}
            backgroundColor="#ee0606"
          />
        </View>
      </ScrollView>

    );
  }
  addData(name, email){
    store.dispatch({
      type: "ADD_PROFILE",
      name: name,
      email: email
    })
  }
}

*/

const Home = ({navigation, name, email}) =>{


  return (


        <ScrollView>
          <Header
            backgroundColor="#000"
            leftComponent={{ icon: "menu", color: "#fff" }}
            centerComponent={{
              text: "Maquetando ando",
              style: { color: "#fff" }
            }}
            rightComponent={{ icon: "home", color: "#fff" }}
          />
          <View>
            <FormLabel>Name</FormLabel>
            <FormInput />
            <FormLabel>Email</FormLabel>
            <FormInput />
            <FormLabel>Password </FormLabel>
            <FormInput />
            <Button
              title="Ingresar datos"
              rounded
              onPress={ () => navigation.navigate("Details")}
              backgroundColor="#ee0606"
            />
          </View>
        </ScrollView>


  );


};

export default Home;
