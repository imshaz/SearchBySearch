import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button, TouchableOpacity
} from 'react-native';

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';


export default class SignUp extends Component {

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
            <ScrollView style={{ padding: 20 }}>
                <Text
                    style={{ fontSize: 30, alignSelf: 'center', alignContent: 'center' }}>
                    Sign up
                </Text>
                <Text
                    style={{ fontSize: 18, alignSelf: 'center', alignContent: 'center' }}>
                    Its Absolutely Free!
                </Text>
                <View />
                <Text
                    style={{ fontSize: 16, paddingTop: 10, alignContent: 'center' }}>
                    Select your Role
                </Text>


                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <RadioForm radio_props={buyer_props}
                        initial={0}
                        radioStyle={{paddingRight: 20}}
                        style={{ margin: 10 }}
                        formHorizontal={true}
                        labelHorizontal={true}
                        buttonSize={10}
                        buttonOuterSize={20}
                        buttonStyle={{padding:10}}
                        buttonWrapStyle={{ marginLeft: 20 }}
                        buttonColor={'#2196f3'}
                        animation={true}
                        onPress={(value) => { this.setState({ value: value }) }}
                    /> 
                                     
                    </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TextInput style={{ flex: 1, borderRadius: 6, backgroundColor: '#d3d3d3' }} placeholder='First Name' />
                    <Text> </Text>
                    <TextInput style={{ flex: 1, borderRadius: 6, backgroundColor: '#d3d3d3' }} placeholder='Last Name' />
                </View>
                <View style={{ margin: 7 }} />
                <TextInput style={{ flex: 1, borderRadius: 6, backgroundColor: '#d3d3d3' }} placeholder='Email Address' />

                <View style={{ margin: 7 }} />
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TextInput style={{ flex: 1, borderRadius: 6, backgroundColor: '#d3d3d3' }} placeholder='PK (+92)' />
                    <Text> </Text>
                    <TextInput style={{ flex: 1, borderRadius: 6, backgroundColor: '#d3d3d3' }} placeholder='Mobile Number' />
                </View>

                <View style={{ margin: 7 }} />
                <TextInput style={{ flex: 1, borderRadius: 6, backgroundColor: '#d3d3d3' }} placeholder='Password' />

                <View style={{ margin: 7 }} />
                <TextInput style={{ flex: 1, borderRadius: 6, backgroundColor: '#d3d3d3' }} placeholder='Re-Type Password' />

                <View style={{ margin: 7 }} />

                <View style={{ flex:1,  alignItems:'center', flexDirection:'row',marginTop:5, marginLeft:5}} >
                 <Text> By Signing up, you agree to  </Text>
                    <Text style={{color:'orange',textDecorationLine:'underline', fontWeight:'bold'}} onPress={()=>{console.log("Term & Condition")}} > Term & Condition </Text>
                 </View>

                <View style={{ margin: 7 }} />
                <View style={{flex:1,flexDirection:'column', alignItems:'center', justifyContent:'center'}}> 
                        <TouchableOpacity>
                            <Button  color="orange" title="  Sign up   " />
                        </TouchableOpacity>
                </View>

  

                
            </ScrollView>
        )
    }
}
