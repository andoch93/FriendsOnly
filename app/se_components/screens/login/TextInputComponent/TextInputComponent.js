import React, {Component} from 'react';
import {AppRegistry, Text, View, TextInput, StyleSheet} from 'react-native';

export default class TextInputComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value
        }
    }

    // allows the TextInput box to match the value being written in
    // onChangeText(value){
    //     this.setState({value: value});
    // }

    render(){
        return(
            <View>
                <TextInput
                    style={styles.textBox}
                    placeholder={this.props.defaultText}
                    value={this.state.value}
                    //onChangeText={(value) => this.onChangeText(value)}
                />
            </View>
        )
    };
}

const styles = StyleSheet.create({
  textBox: {
      marginTop: 20,
      paddingLeft:20,
      borderRadius: 4,
      borderWidth: 3,
      borderColor: '#357798',
      height:50,
      fontSize:20,
      backgroundColor:"white",
  }
});

AppRegistry.registerComponent('TextInputComponent', () => TextInputComponent);
