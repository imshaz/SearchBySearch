import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import ImageLayout from "react-native-image-layout";
import { ScrollView } from 'react-native-gesture-handler';
import SearchBox from '../SearchBox';


export default class PhotoComponent extends Component {
  render() {
    return (
      <View>
        <ScrollView> 
        <SearchBox/>
        <View style={styles.tabs}> 
            <Text> All </Text>
            <Text> Social </Text>
            <Text> News </Text>
            <Text> Videos </Text>
          </View>
        <ImageLayout
            images={[
              
              { uri: "https://images.pexels.com/photos/1469897/pexels-photo-1469897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
              {
                  // Version *2.0.0 update (or greater versions):
                  // Does not require an id for each image
                  // object, but is for good practice and
                  // can be better for performance for API.
                  id: "blpccx4cn",
                  uri: "https://randomuser.me/api/portraits/men/77.jpg"
              },
              { uri: "https://randomuser.me/api/portraits/men/44.jpg" },
              { uri: "https://randomuser.me/api/portraits/lego/7.jpg" },
              { uri: "https://randomuser.me/api/portraits/lego/2.jpg" },
              { uri: "https://randomuser.me/api/portraits/lego/6.jpg" },
              { uri: "https://images.pexels.com/photos/129753/pexels-photo-129753.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },

              
                // { uri: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg" },
                // {
                //     // Version *2.0.0 update (or greater versions):
                //     // Does not require an id for each image
                //     // object, but is for good practice and
                //     // can be better for performance for API.
                //     id: "blpccx4cn",
                //     uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg"
                // },
                // { uri: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg" },
                // { uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg" },
                // { uri: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg" },
                // { uri: "https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg" },
            ]}
        />

        <Text> Photo List </Text>

        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  tabs:{
    flexDirection:'row', 
    flex:1, 
    justifyContent:'space-evenly'
  }
})
