import React, {Component} from 'react';
import {AppRegistry, Text, View, Button} from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Login' })
              ],
            }))
          }}
        />
      </View>
    );
  }
}




AppRegistry.registerComponent('HomeScreen', () => HomeScreen);
