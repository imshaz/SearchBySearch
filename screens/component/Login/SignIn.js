import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button, TouchableOpacity
} from 'react-native';

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';


export default class SignIn extends Component {

    constructor(props) {
        super(props);

        buyer_props = [
            { label: 'Buyer', value: 0 },
            { label: 'Seller', value: 1 },
            
        ];
        seller_props = [
            { label: 'Seller', value: 1 },
            
        ];

    }


    render() {
        console.log('props',this.props)
        return (
            <ScrollView style={{ padding: 20 }}>
                <Text
                    style={{ fontSize: 37, alignSelf: 'center', alignContent: 'center' }}>
                    Sign In
                </Text>
                <View />
                <Text
                    style={{ fontSize: 20, paddingTop: 30, alignContent: 'center' }}>
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

                {/* 
                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    onPress={(value) => {this.setState({value:value})}}
                    /> */}
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TextInput style={{ flex: 1, borderRadius: 6, backgroundColor: '#d3d3d3' }} placeholder='PK(+92)' />
                    <Text> </Text>
                    <TextInput style={{ flex: 3, borderRadius: 6, backgroundColor: '#d3d3d3' }} placeholder='Enter Number' />

                </View>
                <View style={{ margin: 5 }} />
                <TextInput style={{ flex: 1, borderRadius: 6, backgroundColor: '#d3d3d3' }} placeholder='Password' />

                <View style={{ margin: 5 }} />
                <View style={{flex:1,flexDirection:'column', alignItems:'center', justifyContent:'center'}}> 
                        <TouchableOpacity>
                            <Button  color="orange" title="  Sign In   " />
                        </TouchableOpacity>
                </View>

                <View style={{margin:5}} >
                    <Text style={{alignSelf:'center',color:'orange',textDecorationLine:'underline', fontWeight:'bold'}} > FORGOT PASSWORD </Text>
                 </View>

                 <View style={{ flex:1,  alignItems:'center', flexDirection:'row',marginTop:5, marginLeft:50}} >
                 <Text> New to Search By Search </Text>
                    <Text style={{color:'orange',textDecorationLine:'underline', fontWeight:'bold'}} onPress={()=>{
                        this.props.navigation.navigate('SignUp')
                        console.log("sign UP", this.props.navigation.navigate("SignUp"))}} > Sign Up </Text>
                 </View>
            </ScrollView>
        )
    }
}
