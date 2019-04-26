import React from 'react';
import { TouchableOpacity, Text} from 'react-native';
import { withNavigation } from 'react-navigation';

class CloseButton extends React.Component {
    render() {
        return <TouchableOpacity onPress={()=> this.props.navigation.goBack()} activeOpacity = { .5}>
        <Text style={{alignSelf:'center',fontSize:30, color:'white', paddingRight:10}}>X</Text></TouchableOpacity>
  
      // return <Button title="Back" onPress={() => { this.props.navigation.goBack() }} />;
    }
  }
  
  export default withNavigation(CloseButton);
  