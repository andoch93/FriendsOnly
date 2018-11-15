import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableOpacity, Alert} from 'react-native';

export default class Category extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    _onPressButton() {
        Alert.alert('You tapped the button!');
    }

    render(){
        return(
                <TouchableOpacity onPress={this._onPressButton}>
                  <View>
                      <Text style={styles.tileText}>{this.props.title}</Text>
                  </View>
                </TouchableOpacity>

        )
    };
}

const styles = StyleSheet.create({
    tileText: {
        color:'white',
        textAlign:'center',
        paddingTop:25,
        fontFamily:'TrebuchetMS-Bold',
        fontSize:19
    },
});

AppRegistry.registerComponent('Category', () => Category);
