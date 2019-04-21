import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import { SearchBar } from 'react-native-elements';

import {search} from 'react-native-vector-icons/FontAwesome'; 



export default class SearchBox extends Component {

    constructor(props) {
        super(props);
        this.state = { search: '' };
      }
    
      updateSearch = search => {
        this.setState({ search });
      };

      
  render() {
    const { search } = this.state;

    return (
      
            <SearchBar
                lightTheme={true}          
                placeholder="Search"
                onChangeText={this.updateSearch}
                value={search}/>
    );
  }
}

const styles = StyleSheet.create({


})
