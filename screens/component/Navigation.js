import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer , createSwitchNavigator} from "react-navigation";


import Home from '../Home'; 

import PhotoComponent from '../component/photo/PhotoComponent'
import SignIn from "./Login/SignIn";
import SignUp from "./Login/SignUp";

import Index  from './Login/index'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Text onPress={()=>{this.props.navigation.navigate("Details")}}>Home Screen </Text>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text onPress={()=>{this.props.navigation.navigate("Photo")}}>Photo Screen </Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  
  Home: {
    screen: Home, 
    navigationOptions:{
      header:null, 
    }
  
  }, 
  Photo:{
    screen: PhotoComponent
  },   
  Details:{screen:DetailsScreen},
  SignIn:{screen:Index}, 
  // SignUP:{screen:SignUp}
}
// , 
// {
//   headerMode: 'none',
//   navigationOptions: {
//       headerVisible: false,
  // }
// }
);

export default createAppContainer(AppNavigator);