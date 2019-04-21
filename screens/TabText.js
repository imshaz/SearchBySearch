import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import { withNavigation } from 'react-navigation';



 class TabText extends Component {

    constructor(props){
        super(props); 
    }
    
  render() {
    return (
      <View style={styles.container}>

      
        <Text onPress={()=>{    
            // this.props.navigation.navigate('Photo')
            
                 
         console.log("Local")}} style={styles.textItem}> Local    </Text>
        <Text onPress={()=>{this.props.navigation.navigate('Photo')}}  style={styles.textItem}> Images </Text>
        <Text onPress={()=>{console.log("News")}} style={styles.textItem}> News </Text>
        <Text onPress={()=>{console.log("Videos")}} style={styles.textItem}> Video </Text>
        <Text onPress={()=>{console.log("Maps")}} style={styles.textItem}> Maps </Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({

    container:{
        flexDirection:'row', 
        justifyContent:'space-around', 
    }, 
    textItem:{
        fontSize:18,
    }
})


export default withNavigation(TabText)