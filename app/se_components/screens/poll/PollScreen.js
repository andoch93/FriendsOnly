import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class PollScreen extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <View>
                <Text>Poll Screen</Text>
            </View>
        )
    };
}

AppRegistry.registerComponent('PollScreen', () => PollScreen);
