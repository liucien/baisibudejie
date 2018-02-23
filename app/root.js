import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
// import Header from './homePage/header';
// import Desc from './homePage/desc';
import Config from './homePage/config';
import Nav from './homePage/nav';
import Me from './me/me';
import Write from './write/write';
// import MainPage from './app/me/MainPage';
import TabNavigator from 'react-native-tab-navigator';
var {width,height} = require('Dimensions').get('window');
export default class Root extends Component<{}> {
  // static navigationOptions = {
  //   header: null,
  // };
  constructor(){
    super();
    this.state = {
      selectedTab:'nav'
    }
  }
  render() {
    var datas = [
      {
        selectedTitle:'nav',
        title:'首页',
        icon:'icon_tabbar_merchant_normal',
        selectedIcon:'icon_tabbar_merchant_selected',
        color:'gray',
        selectedColor:Config.color,
        Component:Nav
      },
      {
        selectedTitle:'write',
        title:'投稿',
        icon:'icon_tabbar_misc',
        selectedIcon:'icon_tabbar_misc_selected',
        color:'gray',
        selectedColor:Config.color,
        Component:Write
      },
      {
        selectedTitle:'me',
        title:'个人',
        icon:'icon_tabbar_mine',
        selectedIcon:'icon_tabbar_mine_selected',
        color:'gray',
        selectedColor:Config.color,
        Component:Me
      }
    ]
      var tabs = datas.map((item,index)=>{
        return this._TabNavigator(item,index);
      })
      return <TabNavigator>{tabs}</TabNavigator>
  }
  _TabNavigator(item,index){
    // console.log(this.props.navigation.navigate);
      return (
        <TabNavigator.Item
          key={index}
          selected={this.state.selectedTab === item.selectedTitle}
          title={item.title}
          renderIcon={() => <Image source={{uri:item.icon}} style={{width:20,height:20}}/>}
          renderSelectedIcon={() => <Image source={{uri:item.selectedIcon}} style={{width:20,height:20}}/>}
          titleStyle={{color:item.color}}
          selectedTitleStyle={{color:item.selectedColor}}
          onPress={() => this.setState({ selectedTab: item.selectedTitle })}>
          <item.Component navigate={this.props.navigation.navigate} />
        </TabNavigator.Item>
      )
  }
}
const styles = StyleSheet.create({
  container: {
    width:width,
    height:height
  }
});