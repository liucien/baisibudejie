import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';
var {width,height} = require('Dimensions').get('window');

export default class OtherDesc extends Component{
  render(){
  	var msg = this.props.navigation.state.params.msg;
    var url = "http://a.f.winapp111.com/share/" + msg + ".html?wx.qq.com&appname="
    return (
      <View style={styles.container}>
        <WebView
          source={{uri: url}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          scalesPageToFit={true}
          startInLoadingState ={true}
          />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width:width,
    height:height
  }
});
