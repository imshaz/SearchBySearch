import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5";

import {Fonts} from '../../src/utils/Fonts'

export default class LinkItem extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style={styles.icon}>

            <TouchableOpacity  onPress={()=>alert('what')} activeOpacity = { .5}>
                 <Image style={{height:14,width:14, paddingRight:2}}  source={this.props.name}/>
            </TouchableOpacity>
                <Text  style={{fontSize:14, paddingLeft:10, fontFamily:Fonts.ProximaNova}}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    icon: {
        
        flexDirection:'row', 
        flexWrap:'wrap', 
        alignItems:'center',
        marginBottom:10,
     
        height:30, 
        
        paddingLeft:20, 

    }
})
