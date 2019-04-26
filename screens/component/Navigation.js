import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer , createSwitchNavigator} from "react-navigation";


import Home from '../Home'; 

import PhotoComponent from '../component/photo/PhotoComponent'
import SignIn from "./Login/SignIn";
import SignUp from "./Login/SignUp";
import Verify from "./Login/Verify"
import Index  from './Login/index'
import ComponentList from './ComponentList'


const AppNavigator = createStackNavigator({
  
  Home: {
    screen: Home, 
    navigationOptions:{
      header:null, 
    }
  
  }, 
  Photo:{
    screen: PhotoComponent,
    headerStyle: {
      // backgroundColor: '#544849',
      backgroundColor: 'black',

    }
  },
 
  SignIn:{screen:SignIn},
  SignUp:{screen:SignUp},  
  Verify:{screen:Verify}, 
  ComponentList:{screen:ComponentList}
});

AppNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    console.log("Navigation", navigation);
    tabBarVisible = false;

  }

  return {
    tabBarVisible,
    
  };
};

// export default createAppContainer(AppNavigator);
export default AppNavigator; 