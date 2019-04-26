import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity,Image } from 'react-native'
import { Divider ,Input} from 'react-native-elements'
import ImageLayout from "react-native-image-layout";
import { ScrollView } from 'react-native-gesture-handler';
import SearchBox from '../SearchBox';



export default class PhotoComponent extends Component {

  static navigationOptions = {
    title: 'Images',
    headerTitle: (
      <Image
        style={StyleSheet.absoluteFill}
        source={require('../../../assets/3.png')}
        />
  ),
    tabBarVisible:false, 
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'normal',
      textAlign:'center', 
      flex:1, 
      paddingRight:50,
      

    },
    
  };

  renderSearchBox=()=>{

    return <Input
          containerStyle={styles.containerStyle}
          inputContainerStyle={styles.inputContainerStyle}
          placeholder='Search'
          leftIcon={
            <TouchableOpacity style={{height:20, paddingRight:10}} onPress={()=>alert('what!')} activeOpacity = { .5}>
            <Image style={{height:18,width:18}}  source={require('../../../assets/search.png')}/>
          </TouchableOpacity>

             }
         />

            }
  
  // images=[
              
  //   { id:"1", title:'Cats',  uri: "https://images.pexels.com/photos/1469897/pexels-photo-1469897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  //   {
        
  //       id: "blpccx4cn",
  //       title:"ABC",
  //       uri: "https://randomuser.me/api/portraits/men/77.jpg"
  //   },
  //   {id:"dd", title:'Photo xy',   uri: "https://randomuser.me/api/portraits/men/44.jpg" },
  //   {id:"adsaf", title:'photo dfd',  uri: "https://randomuser.me/api/portraits/lego/7.jpg" },
  //   {id:"123", title:'photo gg',  uri: "https://randomuser.me/api/portraits/lego/2.jpg" },
  //   {id:"dsds", title:'llkdlks',  uri: "https://randomuser.me/api/portraits/lego/6.jpg" },
  //   {id:"asd", title:'sdfdsfsd',  uri: "https://images.pexels.com/photos/129753/pexels-photo-129753.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },


  // ]; 

  // renderPhoto=(URL,title)=>{

  //   return  <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
  //               <Image
  //                 style={{width:200, height:100}}
  //                 source={{uri: URL}}
  //               />
  //               <Text>{title} </Text>
  //             </View>
  // }

  render() {
    return (
      <View>
        <ScrollView> 
        {this.renderSearchBox()}

       
        {/* <SearchBox/> */}
        <View style={styles.tabs}> 
            <Text style={styles.selectedItem}> All </Text>
            <Text> Social </Text>
            <Text> News </Text>
            <Text> Videos </Text>
        </View>

        <Divider style={{height: 4, backgroundColor: '#EDECEC'}} />

       {/* { this.renderPhoto(`https://images.pexels.com/photos/1469897/pexels-photo-1469897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,"Title") }
      
      <View style={styles.photoGrid} > 
       {this.images.map(image=>{
           return this.renderPhoto(image.uri, image.title)
        })
        }
      </View> */}
    <ImageLayout
            images={[
              
              { id:"1", title:'Cats',  uri: "https://images.pexels.com/photos/1469897/pexels-photo-1469897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
              {
                  
                  id: "blpccx4cn",
                  title:"ABC",
                  uri: "https://randomuser.me/api/portraits/men/77.jpg"
              },
              {id:"dd", title:'Photo xy',   uri: "https://randomuser.me/api/portraits/men/44.jpg" },
              {id:"adsaf", title:'photo dfd',  uri: "https://randomuser.me/api/portraits/lego/7.jpg" },
              {id:"123", title:'photo gg',  uri: "https://randomuser.me/api/portraits/lego/2.jpg" },
              {id:"dsds", title:'llkdlks',  uri: "https://randomuser.me/api/portraits/lego/6.jpg" },
              {id:"asd", title:'sdfdsfsd',  uri: "https://images.pexels.com/photos/129753/pexels-photo-129753.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },

  
            ]}
        />

    

        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    marginTop:10,
    marginBottom:15,
  
  },

  inputContainerStyle:{
 
    margin:10, 
    // marginBottom:10, 
    borderRadius:10,

    backgroundColor:'#EDECEC', 
    borderColor:'white', 
    

  },
  tabs:{
    flexDirection:'row', 
    flex:1, 
    justifyContent:'space-evenly'
  },

  selectedItem:{

    borderBottomColor:'#f7a52b',
    backgroundColor: 'white',
    color: '#f7a52b', 
    borderBottomWidth: 2,             
    fontSize:14,            
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingRight:10, 
    paddingLeft:10,
   
  }, 
  photoGrid:{

    flex:1, 
    flexDirection:'row', 
    justifyContent:'center',
    flexWrap:'wrap',



  }
})
