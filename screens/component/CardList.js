import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Card } from 'react-native-elements';
import CardItem from './CardItem';

export default class CardList extends Component {
  render() {
    return (
      <View>
       <CardItem/> 
       {/* <CardItem/> 
       <CardItem/>  */}
      </View>
    )
  }
}

const styles = StyleSheet.create({})
