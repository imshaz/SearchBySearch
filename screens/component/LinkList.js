import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5";
// import {Icon} from 'react-native-vector-icons/FontAwesome'; 

import LinkItem from '../component/LinkItem'


export default class LinkList extends Component {
    render() {
        return (
         
                <View style={styles.componentContainer}>
                    <LinkItem title="News" name={require('../../assets/newsMid.png')}/>
                    <LinkItem title="Live Tv" name={require("../../assets/LiveTv.png")}/>
                    <LinkItem title="Movies Online" name={require("../../assets/MoviesOnline.png")} />
                </View>
                

        )
    }
}

const styles = StyleSheet.create({

    componentContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'


    }
})
