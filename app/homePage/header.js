import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Header extends Component{
  render() {
    return (
      <View>
        <Text style={headerStyle.word}>百思不得姐</Text>
      </View>
    );
  }
}


var headerStyle = StyleSheet.create({
  word:{
    fontSize:40,
    color:"#fff",
    textAlign:"center",
    backgroundColor:"#f40"
  }
})