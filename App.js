import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import TextInputComponent from './app/components/TextInputComponent/TextInputComponent';
import PickerComponent from './app/components/PickerComponent/PickerComponent';
import LoginScreen from './app/se_components/screens/login/LoginScreen';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './app/components/HomeScreen/HomeScreen';
import DetailsScreen from './app/components/DetailsScreen/DetailsScreen';
import WelcomeScreen from './app/se_components/screens/welcome/WelcomeScreen';
import CategoryScreen from './app/se_components/screens/categories/CategoryScreen';
import PollScreen from './app/se_components/screens/poll/PollScreen';


export default createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
  Login: {
    screen: LoginScreen,
  },
  Welcome: {
    screen: WelcomeScreen,
  },
  Categories: {
    screen: CategoryScreen,
  },
  Polls: {
    screen: PollScreen,
  }
}, {
    initialRouteName: 'Login',
});


AppRegistry.registerComponent('mymobileapp', () => mymobileapp);
