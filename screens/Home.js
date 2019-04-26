import React, { Component } from 'react'
import { Text, StyleSheet, View,ScrollView,Image,TouchableOpacity, Platform } from 'react-native'

import {Header, Divider, Avatar } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Tab from './TabNavigation'

// import { Avatar } from 'react-native-elements'

// import Header from './component/Header'; 
import SearchBox from './component/SearchBox';
import CategoryList from './component/CategoryList';
import LinkList from './component/LinkList';
import CardList from './component/CardList';
import PhotoComponent from './component/photo/PhotoComponent';
import Icon from 'react-native-vector-icons/FontAwesome'
import TabText from './TabText';

 class Home extends Component {

  constructor(props){
    super(props);
  }


  _moveToPhoto(){
      console.log("_moveToPhoto",this.props)
  }

  _renderHeader(){

      return (
        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
          <TouchableOpacity  onPress={()=>alert('what')} activeOpacity = { .5}>
            <Image style={{height:15,width:9, paddingRight:2}}  source={require('../assets/LocationAbove.png')}/>
          </TouchableOpacity>
         <Text style={{fontSize:18, color:'white',marginLeft:8, marginRight:3}}>Location</Text>    
         <Icon style={{paddingTop:5}} color="white" size={25} name="angle-down"/>  
        </View> )

    
  }

  _renderUserIcon=()=>{
    // alert('what')
   return <TouchableOpacity onPress={()=>{this.props.navigation.navigate('SignIn')}} activeOpacity = { .5}>
        <Image style={{height:18, width:18}} source={require('../assets/userHeader.png')}/>
        </TouchableOpacity>
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>

        <ScrollView>
          <Header backgroundColor='black' containerStyle={{marginTop: Platform.OS === 'ios' ? 0 : - 30}}
            leftComponent={<TouchableOpacity onPress={()=>this.props.navigation.openDrawer()} activeOpacity = { .5}>
            <Image style={{width: 28, height: 18}} source={require('../assets/hamburger.png')}/></TouchableOpacity>}
           
            centerComponent={this._renderHeader()}
            rightComponent={this._renderUserIcon()}
          />
            <SearchBox/>        
             
              <TabText {...this.props}/>
              <Divider style={{height: 4, backgroundColor: '#d8d8d8'}} />        
              <CategoryList/>
              <Divider style={{height: 5, backgroundColor: '#d8d8d8'}} />
              <View style={styles.circlebtn}>

              <Avatar
                rounded
                raised
                onPress={()=>{this.props.navigation.navigate('ComponentList')}}
                style={{height:20, width:20}}
                source={require('../assets/dropdown128.png')}
              />

              {/* TODO: Revrse ICON COLOR */}
                {/* <Icon reverse={true} color="black" size={25} name="chevron-circle-down"/>  */}
              </View>
              <LinkList/> 
              <Divider style={{height: 5, backgroundColor: '#d8d8d8'}} /> 

              <CardList/>
              <View style={{ margin: 2 }} />
            </ScrollView>
             
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    container:{  
        flex:1,   
        flexDirection:'column',
        justifyContent:'flex-start', 
        backgroundColor: 'white'
    }, 
      Header: {
        fontSize: 20,
        textAlign: 'center',
      },
      circlebtn: {
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop:-13,
          backgroundColor:'transparent'
      }, 
      bg:{
        backgroundColor:'transparent'
      }
})

export default Home; 
