import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Button } from 'react-native'
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Avatar } from 'react-native-elements';
import VideoComponent from './VideoComponent';
import BottomIcons from './bottom/BottomIcons';



import {Fonts} from '../../src/utils/Fonts'


export default class CardItem extends Component {

  constructor() {
    super();

  }

  renderFollowingText = (following) => {


    if (following) {

      return <View style={styles.following}>
        <Icon name='check' size={12} />
        <Text style={{ paddingLeft: 5, fontFamily:Fonts.ProximaNova}}>Following</Text>
        <Icon style={{ marginLeft: 10, paddingBottom: 0 }}  name="ellipsis-v" size={13} />
      </View>
    } else {
      return <View style={styles.following}>
        <Text style={{ paddingLeft: 5, fontFamily:Fonts.ProximaNova }}> Follow</Text>
        <Icon style={{ marginLeft: 10, paddingBottom: 0 }} name="ellipsis-v" size={13} />
      </View>
    }
  }



  render() {
    const users = [
      {
        name: 'brynn',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      }];

    const _following = true;

    return (

<View style={styles.topContainer}> 
      <View style={styles.container}>

        <View style={styles.top}>
          <Avatar
            rounded
            source={{
              uri:
                'https://randomuser.me/api/portraits/men/1.jpg',
            }}
          />
          <View style={styles.title}>

            <Text style={styles.title}> Gobble </Text>

            <Text style={styles.timeDetails} > 2 Hours  </Text>
          </View>

        </View>
        {/* <Text> Card Component </Text> */}
        {this.renderFollowingText(_following)}

        


      </View>
     
      <VideoComponent style={styles.video}/>
      <BottomIcons/>

      <Text style={styles.viewsCount}> 660 Views </Text>
      <Text style={styles.videoTitle}> This is ABC Video Title</Text>
      
      </View> 
    )
  }
}

const styles = StyleSheet.create({

  topContainer: {
    
   
    flexDirection: 'column',

    // backgroundColor: 'pink',

  },
  container: {
    flex: 1,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    fontFamily:Fonts.ProximaNova,
    // backgroundColor: 'gray',
  },

  top: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 2,
    marginBottom:10,
    
    // backgroundColor: 'blue',
  },
  title: {
    flexDirection: 'column',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    fontFamily:Fonts.ProximaNovaRegular,
    // backgroundColor: 'green',
    marginLeft:5,
  },
  timeDetails: {
    fontSize: 12,
    color: 'grey',
    marginLeft:8,
    fontFamily:Fonts.ProximaNova
    // backgroundColor: 'pink',
  },
  video:{
      flex:1, alignSelf:'center', marginTop:10

  }, 
  following: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'flex-end',
    marginLeft: 20,
    marginRight:10,
    fontFamily:Fonts.ProximaNova
    // backgroundColor: 'green',

  }, 
  viewsCount:{

    paddingLeft:5, 
    fontFamily:Fonts.ProximaNova
  }, 
  videoTitle:{
    fontSize:16, 
    fontWeight:'bold', 
    color: 'black', 
    paddingLeft:5,
    fontFamily:Fonts.ProximaNovaRegular
  }

})
