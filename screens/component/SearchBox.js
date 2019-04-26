import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity,Image } from 'react-native'

import { Input  } from 'react-native-elements';
import {Fonts} from '../../src/utils/Fonts'
import Icon from 'react-native-vector-icons/FontAwesome'; 



export default class SearchBox extends Component {

    constructor(props) {
        super(props);
        
      }
    
  render() {
   

    return (
      <Input
          containerStyle={styles.containerStyle}
          inputContainerStyle={styles.inputContainerStyle}
          placeholder='Search'
          leftIcon={
            <TouchableOpacity style={{height:20, paddingRight:10}} onPress={()=>alert('what!')} activeOpacity = { .5}>
            <Image style={{height:18,width:18}}  source={require('../../assets/search.png')}/>
          </TouchableOpacity>
       
            }

              rightIcon={
                <View style={{flexDirection:'row'}}>
                
                <TouchableOpacity style={{height:18, paddingRight:10}} onPress={()=>alert('what!')} activeOpacity = { .5}>
                  <Image style={{height:18,width:25}}  source={require('../../assets/camera.png')}/>
                </TouchableOpacity>


                <TouchableOpacity style={{height:18,paddingTop:2, paddingRight:10}} onPress={()=>alert('what!')} activeOpacity = { .5}>
                  <Image style={{height:16,width:12}}  source={require('../../assets/VoiceTop.png')}/>
                </TouchableOpacity>

                
                </View>

              }

              />
            
          );
          }
  }


const styles = StyleSheet.create({

  containerStyle:{
    marginTop:10,
    marginBottom:15,
  
  },

  inputContainerStyle:{
 
    margin:10, 
    // marginBottom:10, 
    borderRadius:10,

    backgroundColor:'#EDECEC', 
    borderColor:'white', 
    
    

  },




})
