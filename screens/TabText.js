import React, { Component } from 'react'
import {Button , Text, StyleSheet, View } from 'react-native'

import { withNavigation } from 'react-navigation';

import {Fonts} from '../src/utils/Fonts'


class TabText extends Component {

    constructor(props){
        super(props); 

        
        this.state={
          styles:{

            borderBottomColor:'#f7a52b',
            backgroundColor: 'white',
            color: '#f7a52b', 
            borderBottomWidth: 2,             
            fontSize:14,            
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft:10, 
            
            fontFamily:Fonts.ProximaNova, 
           
          }
        }
    }

    
  render() {
    return (
      <View style={styles.container}>

      
        <Text  onPress={()=>{         
         console.log("Local")}} style={ this.state.styles }> Local    </Text >
        <Text onPress={()=>{this.props.navigation.navigate('Photo')}} style={styles.textItem}> Images </Text>
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
        paddingBottom:1, 
        marginRight:10, 
        fontFamily:Fonts.ProximaNova, 
        
    }, 
    textItem:{
      fontSize:14,
      fontFamily:Fonts.ProximaNova, 

    },
  


})


export default withNavigation(TabText)