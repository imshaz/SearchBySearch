import React, { Component } from 'react'
import { Text, StyleSheet, View,ScrollView } from 'react-native'
import Tab from './TabNavigation'

import Header from './component/Header'; 
import SearchBox from './component/SearchBox';
import CategoryList from './component/CategoryList';
import LinkList from './component/LinkList';
import CardList from './component/CardList';
import PhotoComponent from './component/photo/PhotoComponent';
import TabText from './TabText';

 class Home extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container} >

        <ScrollView>
            <Header {...this.props}/>           
            <View style={{ margin: 2 }} />
            <SearchBox/> 
            <View style={{ margin: 2 }} />
            <TabText {...this.props}/>
            <View style={{ margin: 2 }} />
             {/* <Tab/>  */}

             <CategoryList/> 
             <View style={{ margin: 2 }} />
             <LinkList/> 
             <View style={{ margin: 2 }} />
             <CardList/>
             <View style={{ margin: 2 }} />
             {/* <CardList/>
             <CardList/> */}

             {/* <PhotoComponent/>   */}

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
        // backgroundColor: 'orange'
    }, 
      Header: {
        fontSize: 20,
        textAlign: 'center',
      }, 


})

export default Home; 
