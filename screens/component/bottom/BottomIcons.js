import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";
import { Avatar } from 'react-native-elements';

import {Fonts} from '../../../src/utils/Fonts'; 
export default class BottomIcons extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon style={styles.icon} name="thumbs-o-up" color="black" size={24}></Icon>
        <Icon style={styles.icon} name="comment-o" color="black" size={24}></Icon>
        <Icon style={styles.icon} name="share" color="black" size={24}></Icon>
       
      

        {/* <Text style={{marginLeft:"auto"}}> Favourite (end)  </Text> */}
        <Icon style={styles.icon} style={{marginLeft:"auto", marginRight:5,}} name="bookmark-o" color="black" size={24}></Icon>

      </View>
    )
  }
}

const styles = StyleSheet.create({

    container:{
        flex: 1, 
        flexDirection:'row', 
        marginLeft:5, 
        marginTop:5, 

        fontFamily:Fonts.ProximaNova, 
    }, 
    icon:{

        marginLeft:5, 
        marginRight:5,

        fontFamily:Fonts.ProximaNova, 

    }

})
