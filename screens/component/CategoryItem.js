import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5";

import {Fonts} from '../../src/utils/Fonts'

export default class CategoryItem extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <View  style={styles.icon}>
                <Icon
                    name={this.props.name}                    
                    size={18}
                    color='#444F5C'
                />
                <Text style={{fontSize:12,paddingTop:10, color:'#5f5f5f',fontFamily:Fonts.ProximaNova }}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    icon: {
        flexDirection:'column', 
        // flexWrap:'wrap', 
        // justifyContent:'center',
        alignContent:'space-around', 
        alignItems:'center',        
        width:75, 
        height:75, 
        paddingLeft:5, 
        paddingRight:5, 
        paddingTop: 15, 
        
        
    }
})
