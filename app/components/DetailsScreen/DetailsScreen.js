
import React, {Component} from 'react';
import {AppRegistry, Text, View, Button} from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

export default class DetailsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('DetailsScreen', () => DetailsScreen);
