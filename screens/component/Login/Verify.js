import React, { Component } from 'react';
import {withNavigation } from 'react-navigation'
import BackButton from './BackButton.js'
import {
    Divider,
    ScrollView,
    Text,
    TextInput,
    View,
    Button, TouchableOpacity,Image,StyleSheet
} from 'react-native';

import {Fonts} from '../../../src/utils/Fonts'

class Verify extends Component {

    constructor(props) {
        super(props);

   }
    static navigationOptions = {
        title: 'Verify',
        headerTitle: (
            <View style={{flex:1, justifyContent:"center", alignItems:'center', paddingTop:5}}><Image
              style={{alignSelf:'center'}}
              source={require('../../../assets/3.png')}
              />
              </View>
        ),
        tabBarVisible:false, 
        headerStyle: {
          backgroundColor: 'black',
        },
        headerLeft:(<BackButton/>),
        
        
      };
    





    render() {
        // console.log('props',this.props)
        return (
            <ScrollView style={{ padding: 20, fontFamily:Fonts.ProximaNova,  }}>
                <Text
                    style={{ color:'black', fontSize: 25, alignSelf: 'center', alignContent: 'center',fontFamily:Fonts.ProximaNova,  }}>
                    Verify Phone Number
                </Text>
                <View />

                <Text
                    style={{ color:'#5f5f5f', fontSize: 15,paddingLeft:14, paddingTop: 30,textAlign:'center',fontFamily:Fonts.ProximaNova, }}>
                    We have sent a verification code on your mobile number +92*******93. Type the verification code below
                </Text>

                <View style={{ alignItems:'center', justifyContent:'center', paddingTop:20}}> 
                        <TouchableOpacity style={{width:"70%", borderRadius:20}} >
                                <Text style={styles.btn}>RETRY AFTER 25 SECS</Text>
                            {/* <Button style={{fontSize:30}} color="orange" title="  Sign In  " /> */}
                        </TouchableOpacity>
                </View>

                
                <TextInput style={styles.txtBox} placeholder='Enter received code' />
                <View style={{borderBottomWidth:1,  marginTop:-15,  }}></View>

                <View style={{ marginTop: 25}} />

                <View style={{ alignItems:'center', justifyContent:'center'}}> 
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Home')}} style={{width:"60%", borderRadius:20}} >
                                <Text style={{ textAlign:'center',borderRadius:10,padding:5, fontSize: 24,backgroundColor:"#df9d01", color:'white',fontFamily:Fonts.ProximaNova, }}>Verify</Text>
                           
                        </TouchableOpacity>
                </View>

               

                
            </ScrollView>
        )
    }
}
const styles=StyleSheet.create({
    btn:{
        textAlign:'center',borderRadius:6,padding:5, fontSize: 18,
        backgroundColor:"#df9d01", color:'white',fontFamily:Fonts.ProximaNova, 
        borderColor:'black',
       
              
    }, 
    txtBox:{
        borderColor:'black',
        backgroundColor:'#D3D3D3',
        width:"100%",  
        marginTop:35,      
        fontSize:16,
        textAlign:'center',       
        flex: 1, marginLeft:5 ,
        borderRadius: 6, backgroundColor: 'white',
        borderBottomColor:'black',paddingLeft:20,
        paddingTop:10,
        fontFamily:Fonts.ProximaNova,
    }
})

export default withNavigation(Verify)