import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class SimpleComponent1 extends Component{
    // working with state
    constructor(){
        super();
        this.state = {
            showMessage: true
        }
    }

    // set default properties
    static defaultProps = {
        message: 'Hello There!'
    }

    // function that changes the state
    hideMsg(){
        this.setState({showMessage: false});
    }

    // method to display message by changing its setState
    displayMsg(){
        this.setState({showMessage: true});
    }

    // lifecycle method that calls(or "mounts" component before it gets rendered)
    componentWillMount(){
        this.hideMsg();
    }

    render(){
        let msg = this.state.showMessage ? this.props.message : 'No Message';
        // if(this.state.showMessage){
        //   msg = this.props.message;
        // } else {
        //   msg = 'no message';
        // }
        return(
            <View>
              <Text>{msg}</Text>
            </View>
        )
    };
}

// we can declare property types for components
// its not necessary but it helps validate our properties and their data types
// SimpleComponent1.propTypes = {
//     message: React.PropTypes.string
// }

AppRegistry.registerComponent('SimpleComponent1', () => SimpleComponent1);
