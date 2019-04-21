import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer , createSwitchNavigator} from "react-navigation";


import SignIn from './SignIn'; 
import SignUp from './SignUp'

const AppNavigator = createStackNavigator({
  SignIn:{screen:SignIn,navigationOptions:{
    header:null
  }}, 
  SignUp:{screen:SignUp, 
    navigationOptions:{
      header:null}
    }
}

);

export default createAppContainer(AppNavigator);