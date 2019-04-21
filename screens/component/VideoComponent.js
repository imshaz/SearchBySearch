
import React, { Component } from 'react'
import { Text, View, StyleSheet } from "react-native";
import Video from 'react-native-video';
import ReactNativeTestVideo from "../../video/react_native.mp4"
export default class VideoComponent extends Component {

    render() {
        return (


<View style={styles.container}> 

    <Video source={ReactNativeTestVideo}
        resizeMode="cover"
        style={{width:"100%", height:200}}     
    />
</View>
    
   

        );
    }
}
    const styles = StyleSheet.create({

        container: { flex: 1, justifyContent: "center" },
        fullScreen: {
            position: 'relative',
            // top: 0,
            // left: 0,
            // bottom: 0,
            // right: 0,
        },
      
        });
    


