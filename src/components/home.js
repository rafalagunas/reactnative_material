import React from "react";
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

const Home = ({ navigation }) => (
 <ScrollView>
   <Header
     backgroundColor="#000"
     leftComponent={{ icon: "menu", color: "#fff" }}
     centerComponent={{ text: "Maquetando ando", style: { color: "#fff" } }}
     rightComponent={{ icon: "home", color: "#fff" }}
   />
   <View>
     <FormLabel>Name</FormLabel>
     <FormInput />
     <FormLabel>Email</FormLabel>
     <FormInput />
     <FormLabel>Password</FormLabel>
     <FormInput />
     <Button
       title="Ingresar datos"
       rounded
       onPress={() => navigation.navigate("Details")}
       backgroundColor="#ee0606"
     />
   </View>
 </ScrollView>
);


export default Home;
