import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class Home extends Component{
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="页面跳转"
        onPress={() =>
          navigate('Other', { msg: '数据显示一下' })
        }
      />
    );
  }
}