


import {withNavigation } from 'react-navigation'
// import {Icon} from 'react-native-vector-icons/FontAwesome'; 
import React,{ Component } from 'react';
import {Image,StyleSheet, View, Text} from 'react-native';


import BackButton from './Login/BackButton'
import CategoryItem from './CategoryItem';
import CloseButton from './CloseButton';

class ComponentList extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'ComponentList/category',
        headerTitle: (
            <View style={{flex:1, justifyContent:"center", alignItems:'center', paddingTop:5}}><Image
              style={{alignSelf:'center'}}
              source={require('../../assets/3.png')}
              />
              </View>
        ),
        tabBarVisible:false, 
        headerStyle: {
          backgroundColor: 'black',
        },
        // headerLeft:(<BackButton/>),
        headerRight: (<CloseButton/> 
          ),
        
      };

    render() {
        return (
            <View>
                <Text> Popular List(More TO BE ADDED)</Text>
                <View style={styles.componentContainer}>
                    <CategoryItem title="Shopping" name="shopping-cart" />
                    <CategoryItem title="Restaurants" name="utensils" />
                    <CategoryItem title="Movies" name="film" />
                    <CategoryItem title="Dcotor" name="stethoscope" />
                    <CategoryItem title="Travels" name="plane-departure" />
                    <CategoryItem title="Hotel" name="hotel" />
                    <CategoryItem title="Taxi" name="car" />
                    <CategoryItem title="Recharge" name="mobile-alt" />   
                    
                    <CategoryItem title="Travels" name="plane-departure" />
                    <CategoryItem title="Hotel" name="hotel" />
                    <CategoryItem title="Taxi" name="car" />
                    <CategoryItem title="Recharge" name="mobile-alt" />
                    
                </View>

               

            </View>
        )
    }
}

const styles = StyleSheet.create({

    componentContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',

 
    },
    circlebtn: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop:10,
    }

})





export default withNavigation(ComponentList)
