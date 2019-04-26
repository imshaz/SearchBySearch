import {createBottomTabNavigator} from  'react-navigation'

import React, { Component } from 'react'
import {StyleSheet, Text, View,Image } from 'react-native'
import { Avatar } from 'react-native-elements'
import Navigation from '../component/Navigation'
class Tab1 extends Component {
  render() {
    return (
      <View>
        <Text> Tab1 </Text>
      </View>
    )
  }
}
class Tab2 extends Component {
    render() {
      return (
        <View>
          <Text> Social </Text>
        </View>
      )
    }
  }
  class Tab3 extends Component {
    render() {
      return (
        <View>
          <Text> Notifications </Text>
        </View>
      )
    }
  }

  class Tab4 extends Component {
    render() {
      return (
        <View>
          <Text> Voice </Text>
        </View>
      )
    }
  }
  class Tab5 extends Component {
    render() {
      return (
        <View>
          <Text> Chat </Text>
        </View>
      )
    }
  }
  class Tab6 extends Component {
    render() {
      return (
        <View>
          <Text> News </Text>
        </View>
      )
    }
  }

const tabIconFocused =(tabTitle)=>{

  const icon = <Image                
        style={styles.tabIcons}
        source={tabTitle}
      /> 
  return icon
}



const Tabs = createBottomTabNavigator({
    Search:{screen:Navigation, 
      navigationOptions:{
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          if(focused){            
            return tabIconFocused(require('../../assets/SearchLogoTab.png'))
          }else{
            return tabIconFocused(require('../../assets/SearchLogoDisabled.png'))
          }
        }
      }
    }, 
    Social:{screen:Tab2, 
      navigationOptions:{
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          if(focused){            
            return tabIconFocused(require('../../assets/SocialTabEnabled.png'))
          }else{
            return tabIconFocused(require('../../assets/SocialTabDisabled.png'))
          }
          
        }
      }
    }, 
    Notification:{screen:Tab3,   navigationOptions:{
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        if(focused){            
          return tabIconFocused(require('../../assets/notificationsTabEnabled.png'))
        }else{
          return tabIconFocused(require('../../assets/notificationsTabDisabled.png'))
        }
        
      }
    }
  },
    Voice:{screen:Tab4,
      navigationOptions:{
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          if(focused){            
            return tabIconFocused(require('../../assets/VoiceTabEnabled.png'))
          }else{
            return tabIconFocused(require('../../assets/VoiceTabDisabled.png'))
          }
          
        }
      }
    },
    Chat:{screen:Tab5,
      navigationOptions:{
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          if(focused){ 
            return <Image                
            style={styles.tabChat}
            source={require('../../assets/chatTabEnabled.png')}
          />            
            // return tabIconFocused(require('../../assets/chatTabDisabled.png'))
          }else{
            return <Image                
            style={styles.tabChat}
            source={require('../../assets/chatTabDisabled.png')}
            /> 
            // return tabIconFocused(require('../../assets/chatTabDisabled.png'))
          }
          
        }
      }
    },
    News:{screen:Tab6,
      navigationOptions:{
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          if(focused){ 
            return <Image                
            style={styles.tabNews}
            source={require('../../assets/newsTabEnabled.png')}
            />     
            // return tabIconFocused(require('../../assets/newsTabEnabled.png'))
          }else{
            return <Image                
            style={styles.tabNews}
            source={require('../../assets/newsTabDisabled.png')}
            /> 
            // return tabIconFocused(require('../../assets/newsTabDisabled.png'))
          }
          
        }
      }
    },
},
//


//
{

  tabBarOptions: {
    activeTintColor: '#f7a52b',
    inactiveTintColor: '#5f5f5f',
  },
}
//

);


const styles =StyleSheet.create({

  tabIcons:{
    height:16,width:12
    
  },
  tabChat:{
    height:16,width:20
  },
  tabNews:{
    height:16,width:16
  }

})


export default Tabs; 