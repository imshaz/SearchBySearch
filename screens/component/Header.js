import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5";


import { withNavigation } from 'react-navigation';

class Header extends Component {


  constructor(props){
    super(props); 
}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.drawerIcon}> = </Text>
        <View style={styles.LocationIcon}> 
            <Text style={styles.LocationText}> Location </Text>
         </View>
         <Icon onPress={()=>{

           console.log('user sign IN')
           
           this.props.navigation.navigate('SignIn')}}
                    name="user"                    
                    size={25}
                />
        
      </View>
    )
  }
}

const styles = StyleSheet.create({


    container:{    

        flex:1, 
        flexDirection: 'row',
        justifyContent:'space-around', 
        alignItems:'center',
        fontSize:30,
        // backgroundColor: 'orange',

    }, 
    drawerIcon:{
        flex:1,
        
        paddingLeft:20,          
        fontSize:30, 
        marginLeft:-15, 
        
        // TODO
    },
    LocationIcon:{
        flex:5, 
        alignSelf:'center', 
        paddingRight:20,          
                
        
        //Center the cotent 
        justifyContent:'center', 
        alignItems:'center'
        
    }, 
    LocationText:{
        fontSize:20, 
    },
    userIcon:{
       flex:1,      
       paddingLeft:10, 
       marginRight: -15,
    }

    
})


export default withNavigation(Header)