import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'


import Navigation from '../component/Navigation'; 
import SplashScreen from '../SplashScreen'; 
import drawerNav from './DrawerNavigator'


import {createSwitchNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation'

import Dashboard from './Dashboard'


// const drawerNav= createDrawerNavigator({

//     Dashboard:{screen:Dashboard}
// })

const InitialNavigator = createSwitchNavigator({
    Spalsh:{screen:SplashScreen}, 
    Dashboard:{screen:drawerNav}
})



export default createAppContainer(InitialNavigator); 



