import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5";
// import {Icon} from 'react-native-vector-icons/FontAwesome'; 

import LinkItem from '../component/LinkItem'


export default class LinkList extends Component {
    render() {
        return (
            <View>
                <View style={styles.componentContainer}>
                    <LinkItem title="News" name="newspaper" />
                    <LinkItem title="Live Tv" name="tv" />
                    <LinkItem title="Movies Online" name="film" />
                </View>
                

            </View>
        )
    }
}

const styles = StyleSheet.create({

    componentContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'


    }
})
