import React from 'react';
import { View, ScrollView} from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import {Header,Button,Avatar,SocialIcon,FormLabel,Text,Divider,FormInput,Card,ListItem
} from 'react-native-elements';

import Home from './components/home';
import Details from './components/details';

const HomeScreen = ({ navigation }) => (
  <Home />
);

const DetailsScreen = () => (
  <Details />
);

const App = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
});

export default App;
