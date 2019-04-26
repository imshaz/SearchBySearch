import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image} from 'react-native'

export default class SplashScreen extends Component {
    constructor(props){
        super(props);

    }
  render() {
    return (
      <View style={styles.container}>
     
        <Image style={{flex:1, justifyContent: 'center',alignItems:'center'}} resizeMode="center" style={{width: "100%",height:"100%"}}
          source={require('../assets/1.png')}
        />
      </View>
    )
  }
  componentDidMount(){
    
    setTimeout(() => {          
         this.props.navigation.navigate("Dashboard")
    }, 3000);
}
}

const styles = StyleSheet.create({

    container:{
        flex:1, 
        backgroundColor:'black'

    }
})
