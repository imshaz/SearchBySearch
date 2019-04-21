import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
 
// import {Icon} from 'react-native-vector-icons/FontAwesome'; 


import CategoryItem from './CategoryItem';

export default class CategoryList extends Component {
    render() {
        return (
            <View>
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

               
                <View style={styles.circlebtn}>

                <MaterialIcons color="gray" size={29} name="arrow-drop-down-circle"/> 
                
                
                </View>
               

            </View>
        )
    }
}

const styles = StyleSheet.create({

    componentContainer: {
        flex: 1,
        // backgroundColor:'yellow',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',

        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    circlebtn: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop:-15
    }

})
