import React, {Component} from 'react';
import {AppRegistry, Text, View, Button, Alert, StyleSheet} from 'react-native';
import TextInputComponent from './TextInputComponent/TextInputComponent';
import { StackActions, NavigationActions } from 'react-navigation';

export default class LoginScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.header}>FriendzOnly</Text>
                <TextInputComponent style={styles.box} defaultText="Username"/>
                <TextInputComponent style={styles.box} defaultText="Password"/>
                <Button
                  style={styles.button}
                  onPress={() => {
                    this.props.navigation.dispatch(StackActions.reset({
                      index: 0,
                      actions: [
                        NavigationActions.navigate({ routeName: 'Welcome' })
                      ],
                    }))
                  }}
                  title="Log In"
                />
            </View>
        )
    };
}

const styles = StyleSheet.create({
  container: {
      backgroundColor:'#032053',
      height: 900
  },
  box: {
      paddingTop:1000,
      color:'#aeddcb'
  },
  button: {
      paddingTop:100,
      fontSize:300,
      color:'#e7dac7'
  },
  header: {
      paddingTop:100,
      textAlign:'center',
      color:'#aeddcb',
      fontSize:50
  }
});

AppRegistry.registerComponent('LoginScreen', () => LoginScreen);
