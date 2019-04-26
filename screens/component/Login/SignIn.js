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

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

import {Fonts} from '../../../src/utils/Fonts'

class SignIn extends Component {

    constructor(props) {
        super(props);

        buyer_props = [
            { label: 'Buyer', value: 0 },
            { label: 'Seller', value: 1 },
            
        ];
       

    }
    
    static navigationOptions = {
        title: 'Sign In',
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
                    style={{ color:'black', fontSize: 37, alignSelf: 'center', alignContent: 'center',fontFamily:Fonts.ProximaNova,  }}>
                    Sign In
                </Text>
                <View />
                <Text
                    style={{ color:'#5f5f5f', fontSize: 16,paddingLeft:20, paddingTop: 30, alignContent: 'center' ,fontFamily:Fonts.ProximaNova, }}>
                    Select your Role
                </Text>


                <View style={{fontFamily:Fonts.ProximaNova, flex: 1, flexDirection: 'row', color:'#5f5f5f' }}>
                    <RadioForm radio_props={buyer_props}
                        initial={0}
                        radioStyle={{paddingRight: 40}}
                        style={{ margin: 15,fontFamily:Fonts.ProximaNova,color:'#5f5f5f' }}
                        formHorizontal={true}
                        labelHorizontal={true}
                        labelColor="#5f5f5f"
                        selectedLabelColor='#5f5f5f'
                        buttonSize={15}
                        buttonOuterSize={20}
                        buttonStyle={{padding:10,color:'#5f5f5f'}}
                        buttonWrapStyle={{ marginLeft: 20 }}
                        buttonColor={'#2196f3'}
                        animation={true}
                        onPress={(value) => { this.setState({ value: value }) }}
                    /> 
                    </View>

        
                <View style={{ flex: 1, flexDirection: 'row', marginTop:20, marginLeft:5,fontFamily:Fonts.ProximaNova, }}>
                    <TextInput style={{ flex: 1, borderRadius: 6, backgroundColor: '#d3d3d3', paddingLeft:20,fontFamily:Fonts.ProximaNova,  }} placeholder='PK(+92)' />
                     <Text style={{width:10}}> </Text>
                    <TextInput style={{ flex: 2, borderRadius: 6, backgroundColor: '#d3d3d3',paddingLeft:20,fontFamily:Fonts.ProximaNova, }} placeholder='Enter Number' />

                </View>
                <View style={{ marginTop:25,  }} />
                <TextInput style={{ flex: 1, marginLeft:5 , borderRadius: 6, backgroundColor: '#d3d3d3',paddingLeft:20,fontFamily:Fonts.ProximaNova,  }} placeholder='Password' />

                <View style={{ marginTop: 25}} />

                <View style={{ alignItems:'center', justifyContent:'center'}}> 
                        <TouchableOpacity style={{width:"60%", borderRadius:20}} >
                                <Text style={{ textAlign:'center',borderRadius:10,padding:5, fontSize: 24,backgroundColor:"#df9d01", color:'white',fontFamily:Fonts.ProximaNova, }}>SIGN IN</Text>
                            {/* <Button style={{fontSize:30}} color="orange" title="  Sign In  " /> */}
                        </TouchableOpacity>
                </View>

                <View style={{margin:25}} >
                    <Text style={{alignSelf:'center',color:'#df9d01',fontFamily:Fonts.ProximaNova, textDecorationLine:'underline', fontWeight:'normal'}} > FORGOT PASSWORD </Text>
                 </View>

                 <View style={{ flex:1,  alignItems:'center', flexDirection:'row',marginTop:5, marginLeft:50}} >
                 <Text style={{color:'#5f5f5f',fontFamily:Fonts.ProximaNova,  }}> New to Search By Search </Text>
                    <Text style={{color:'#df9d01',textDecorationLine:'underline', fontWeight:'bold',fontFamily:Fonts.ProximaNova, }} onPress={()=>{
                        this.props.navigation.navigate('SignUp')
                        console.log("sign UP", this.props.navigation.navigate("SignUp"))}} > SIGN UP </Text>
                 </View>
            </ScrollView>
        )
    }
}


export default withNavigation(SignIn)