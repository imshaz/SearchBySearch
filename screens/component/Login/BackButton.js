import React from 'react';
import { Button, TouchableOpacity, Image} from 'react-native';
import { withNavigation } from 'react-navigation';

class BackButton extends React.Component {
  render() {
      return <TouchableOpacity onPress={()=> this.props.navigation.goBack()} activeOpacity = { .5}><Image style={{alignSelf:'center',width:30, height:18, marginLeft:15}}
      source={require('../../../assets/backTopArrow.png')}/></TouchableOpacity>

    // return <Button title="Back" onPress={() => { this.props.navigation.goBack() }} />;
  }
}

export default withNavigation(BackButton);

