import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Button } from 'react-native'
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Avatar } from 'react-native-elements';
import VideoComponent from './VideoComponent';
import BottomIcons from './bottom/BottomIcons';





export default class CardItem extends Component {

  constructor() {
    super();

  }

  renderFollowingText = (following) => {


    // <View style={styles.following}>

    //         <View style={styles.following}>
    //           <Icon name='check' size={12} />
    //           <Text style={{ paddingLeft: 5 }}>Following</Text>
    //         </View>
    //         <Text style={{ paddingLeft: 5 }}> Follow</Text>
    //         {/* {this.renderFollowingText(_following)} */}
    //       </View>

    if (!following) {

      return <View style={styles.following}>
        <Icon name='check' size={12} />
        <Text style={{ paddingLeft: 5 }}>Following</Text>
        <Icon name="ellipsis-v" size={10} />
      </View>
    } else {
      return <View style={styles.following}>
        <Text style={{ paddingLeft: 5 }}> Follow</Text>
        <Icon style={{ marginLeft: 20, paddingBottom: 5 }} name="ellipsis-v" size={10} />
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

            <Text style={styles.title}> Bold </Text>

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
    // backgroundColor: 'gray',
  },

  top: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 2,
    // backgroundColor: 'blue',
  },
  title: {
    flexDirection: 'column',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    // backgroundColor: 'green',
  },
  timeDetails: {
    fontSize: 12,
    color: 'grey',
    // backgroundColor: 'pink',
  },
  video:{
      flex:1, alignSelf:'center', marginTop:10

  }, 
  following: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    // backgroundColor: 'green',

  }, 
  viewsCount:{

  }, 
  videoTitle:{

    fontSize:16, 
    fontWeight:'bold', 
    color: 'black'
  }


  



})
