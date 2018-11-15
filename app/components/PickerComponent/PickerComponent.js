import React, {Component} from 'react';
import {AppRegistry, Text, View, Picker} from 'react-native';

export default class PickerComponent extends Component{
    constructor(){
        super();
        this.state = {
            category: 'Technology'
        }
    }
    render(){
        return(
            <View>
                <Text style={{paddingTop:50}}>Picker Component</Text>
                <Picker>
                    <item label="Technology" value="technology"/>
                    <item label="Business" value="business"/>
                    <item label="Cooking" value="cooking"/>
                </Picker>
            </View>
        )
    };
}

AppRegistry.registerComponent('PickerComponent', () => PickerComponent);
