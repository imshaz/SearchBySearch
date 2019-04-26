import React, { Component } from 'react'
import { Text, View } from 'react-native'

 class Dashboard extends Component {
     componentDidUpdate(){
        this.props.navigation.openDrawer();
     }
  render() {
    return (
      <View>
        <Text> Dashboard updated </Text>
      </View>
    )
  }
}


export default Dashboard; 