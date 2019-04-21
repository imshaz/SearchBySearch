import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5";

export default class CategoryItem extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <View  style={styles.icon}>
                <Icon
                    name={this.props.name}                    
                    size={20}
                    color='black'
                />
                <Text>{this.props.title}</Text>
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
        width:80, 
        height:80, 
        paddingLeft:5, 
        paddingRight:5, 
        paddingTop: 15, 
        
        
    }
})
