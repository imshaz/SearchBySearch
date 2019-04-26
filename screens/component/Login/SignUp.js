import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button, TouchableOpacity, 
    StyleSheet,Image
} from 'react-native';
import BackButton from './BackButton.js'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import {Fonts} from '../../../src/utils/Fonts';

export default class SignUp extends Component {

    static navigationOptions = {
        title: 'Sign Up',
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
    constructor(props) {
        super(props);

        buyer_props = [
            { label: 'Buyer', value: 0 },
            { label: 'Seller', value: 1 },
            
        ];
        

    }


    render() {
        console.log('props',this.props)
        return (
            <ScrollView style={styles.container}>
                <Text
                    style={{ fontFamily:Fonts.ProximaNova,color:'black', fontSize:26 , alignSelf: 'center', alignContent: 'center' }}>
                    Sign Up
                </Text>
                <Text
                    style={{fontFamily:Fonts.ProximaNova,color:'#5f5f5f', fontSize: 17, alignSelf: 'center', alignContent: 'center' }}>
                    Its Absolutely Free!
                </Text>
                <View />
                <Text
                    style={{fontFamily:Fonts.ProximaNova,color:'#5f5f5f', fontSize: 17, paddingTop: 25, paddingBottom:8,paddingLeft:10, alignContent: 'center' }}>
                    Select your Role
                </Text>


                <View style={{ flex: 1, flexDirection: 'row', paddingBottom:8 }}>
                    <RadioForm radio_props={buyer_props}
                        initial={0}
                        radioStyle={{paddingRight: 35}}
                        style={{fontFamily:Fonts.ProximaNova, margin: 10 }}
                        formHorizontal={true}
                        labelHorizontal={true}
                        labelColor="#5f5f5f"
                        selectedLabelColor='#5f5f5f'
                        buttonSize={18}
                        buttonOuterSize={20}
                        buttonStyle={{padding:10, fontFamily:Fonts.ProximaNova,color:'#5f5f5f' }}
                        buttonWrapStyle={{ marginLeft: 20 }}
                        buttonColor={'#2196f3'}
                        animation={true}
                        onPress={(value) => { this.setState({ value: value }) }}
                    /> 
                                     
                    </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TextInput style={{fontFamily:Fonts.ProximaNova,color:'#5f5f5f', flex: 1, borderRadius: 6,paddingLeft:15, backgroundColor: '#d3d3d3' }} placeholder='First Name' />
                    <Text> </Text>
                    <TextInput style={{fontFamily:Fonts.ProximaNova,color:'#5f5f5f', flex: 1, borderRadius: 6,paddingLeft:15, backgroundColor: '#d3d3d3' }} placeholder='Last Name' />
                </View>
                <View style={{ margin: 7 }} />
                <TextInput style={{fontFamily:Fonts.ProximaNova,color:'#5f5f5f', flex: 1, borderRadius: 6,paddingLeft:15, backgroundColor: '#d3d3d3' }} placeholder='Email Address' />

                <View style={{ margin: 7 }} />
                <View style={{ fontFamily:Fonts.ProximaNova,flex: 1, flexDirection: 'row' }}>
                    <TextInput style={{fontFamily:Fonts.ProximaNova,color:'#5f5f5f', flex: 1, borderRadius: 6,paddingLeft:15, backgroundColor: '#d3d3d3' }} placeholder='PK (+92)' />
                    <Text style={{ marginRight: 7 }}> </Text>
                    <TextInput style={{fontFamily:Fonts.ProximaNova,color:'#5f5f5f', flex: 2, borderRadius: 6,paddingLeft:15, backgroundColor: '#d3d3d3' }} placeholder='Mobile Number' />
                </View>

                <View style={{ margin: 7 }} />
                <TextInput style={{fontFamily:Fonts.ProximaNova,color:'#5f5f5f', flex: 1, borderRadius: 6,paddingLeft:15, backgroundColor: '#d3d3d3' }} placeholder='Password' />

                <View style={{ margin: 7 }} />
                <TextInput style={{fontFamily:Fonts.ProximaNova,color:'#5f5f5f', flex: 1, borderRadius: 6,paddingLeft:15, backgroundColor: '#d3d3d3' }} placeholder='Re-Type Password' />

                <View style={{ margin: 7 }} />

                <View style={{fontFamily:Fonts.ProximaNova,color:'#5f5f5f', flex:1,  alignItems:'center',paddingLeft:15, flexDirection:'row',marginTop:5, marginLeft:5}} >
                 <Text> By Signing up, you agree to  </Text>
                    <Text style={{color:'orange',textDecorationLine:'underline', fontWeight:'bold'}} onPress={()=>{console.log("Term & Condition")}} > Term & Condition </Text>
                 </View>

                <View style={{ margin: 7 }} />
                <View style={{fontFamily:Fonts.ProximaNova,flex:1,color:'#5f5f5f',flexDirection:'column', alignItems:'center', justifyContent:'center'}}> 
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Verify")}}  style={{width:"60%", borderRadius:20}}>
                            <Text  style={{ textAlign:'center',borderRadius:10,padding:5, fontSize: 24,backgroundColor:"#df9d01", color:'white',fontFamily:Fonts.ProximaNova, }}>SIGN UP </Text>
                        </TouchableOpacity>
                </View>
                
              

            </ScrollView>
        )
    }
}


const styles =StyleSheet.create({

    container:{
        marginBottom:2, 
        marginLeft:10, 
        marginRight:10, 
        marginTop:10
    }
})