import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Photo extends Component {
  render() {
    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <Image
            style={{width:200,height:200}}
            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          />
          <Text> Hello world! </Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({})
