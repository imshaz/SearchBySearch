// import React from 'react';
// import { Button, Text, View } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { createStackNavigator, createBottomTabNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Home!</Text>
//         <Button
//           title="Go to Settings"
//           onPress={() => this.props.navigation.navigate('Settings')}
//         />
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
// }

// class SettingsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Settings!</Text>
//         <Button
//           title="Go to Home"
//           onPress={() => this.props.navigation.navigate('Home')}
//         />
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Details!</Text>
//       </View>
//     );
//   }
// }

// const HomeStack = createStackNavigator({
//   Home: { screen: HomeScreen },
//   Details: { screen: DetailsScreen },
// });

// const SettingsStack = createStackNavigator({
//   Settings: { screen: SettingsScreen },
//   Details: { screen: DetailsScreen },
// });

// export default createAppContainer(createBottomTabNavigator(
//   {
//     Home: { screen: HomeStack },
//     Settings: { screen: SettingsStack },
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, tintColor }) => {
//         const { routeName } = navigation.state;
//         let iconName;
//         if (routeName === 'Home') {
//           iconName = `ios-information-circle${focused ? '' : '-outline'}`;
//         } else if (routeName === 'Settings') {
//           iconName = `ios-options${focused ? '' : '-outline'}`;
//         }

//         // You can return any component that you like here! We usually use an
//         // icon component from react-native-vector-icons
//         return <Ionicons name={iconName} size={25} color={tintColor} />;
//       },
//     }),
//     tabBarOptions: {
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'gray',
//     },
//   }
// ));





import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator,createStackNavigator, createAppContainer } from 'react-navigation';

class LocalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Local!</Text>
      </View>
    );
  }
}

class NewsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>News!</Text>
      </View>
    );
  }
}
class VideoScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}
class MapsScreen extends React.Component {

  
  render() {
    this.props.navi
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}


//create stack navigation
const HomeStack = createStackNavigator({
  Local: { screen: LocalScreen },
  News: { screen: NewsScreen },
  
});

const ImageStack = createStackNavigator({
 
  Video: { screen: VideoScreen },  
  Maps: { screen: MapsScreen },
});

const navigation = createAppContainer(createBottomTabNavigator(
  {
    Home: HomeStack,
    Image: ImageStack,
  })); 


const TabNavigator = createBottomTabNavigator({
  Local: { screen: LocalScreen },
  News: { screen: NewsScreen },  
  Video: { screen: VideoScreen },  
  Maps: { screen: MapsScreen },
});
 
const Tab = createAppContainer(TabNavigator);

export default Tab; 