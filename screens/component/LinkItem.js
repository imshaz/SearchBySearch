import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5";

export default class LinkItem extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style={styles.icon}>
                <Icon
                    name={this.props.name}                    
                    size={10}
                />
                <Text>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    icon: {
        flex:1, 
        flexDirection:'row', 
        flexWrap:'wrap', 
        alignItems:'center',
        alignContent:'space-between',
        // 
        height:30, 
        marginLeft:10
        // paddingLeft:5, 
        // paddingRight:5, 
        // paddingTop: 15,         
        // borderRadius: 4,
        // borderWidth: 0.5,
        // borderColor: '#d6d7da',
    }
})
