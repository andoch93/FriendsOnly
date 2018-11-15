import React, {Component} from 'react';
import {AppRegistry, Text, View, TextInput, Alert, StyleSheet} from 'react-native';

export default class TextInputComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value
        }
    }

    static defaultProps = {
        value: "Hi There"
    }

    onChangeText(value){
        this.setState({value: value});
    }

    // allows you to see the item being submitted
    onSubmitEditing(e){
        console.log('onSubmitEditing called: ' + e)
    }

    onFocus(e){
        console.log('onFocus called');
    }

    onBlur(e){
        console.log('onBlur called');
    }

    render(){
        return(
            <View>
                <TextInput
                    style={styles.textBox}
                    placeholder={this.props.placeholder}
                    selectionColor='black'
                    selectTextOnFocus={false}
                    editable={this.props.editable}
                    maxLength={10}
                    value={this.state.value}
                    onFocus={(e) => this.onFocus(e)}
                    onBlur={(e) => this.onBlur(e)}
                    onChangeText={(value) => this.onChangeText(value)}
                    onSubmitEditing={(e) => this.onSubmitEditing(e.nativeEvent.text)}
                />
                <Text>{this.state.value}</Text>
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
