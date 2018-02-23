import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Other extends Component{
  render(){
  	var msg = this.props.navigation.state.params.msg;
    return (
      <View>
        <Text>其他页面</Text>
        <Text>{msg}</Text>
      </View>
    );
  }
}