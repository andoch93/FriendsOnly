import React, {Component} from 'react';
import {AppRegistry, Text, View, Button, Alert, StyleSheet} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';


export default class WelcomeScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.header}>Welcome!</Text>
                <Button
                  style={styles.button}
                  onPress={() => {
                    this.props.navigation.dispatch(StackActions.reset({
                      index: 0,
                      actions: [
                        NavigationActions.navigate({ routeName: 'Categories' })
                      ],
                    }))
                  }}
                  title="Search Categories"
                />
                <Button
                  style={styles.button}
                  onPress={() => {
                    this.props.navigation.dispatch(StackActions.reset({
                      index: 0,
                      actions: [
                        NavigationActions.navigate({ routeName: 'Polls' })
                      ],
                    }))
                  }}
                  title="My Polls"
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

AppRegistry.registerComponent('WelcomeScreen', () => WelcomeScreen);
