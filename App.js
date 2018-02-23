// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   Image
// } from 'react-native';
// // import Header from './homePage/header';
// // import Desc from './homePage/desc';
// import Config from './app/homePage/config';
// import Nav from './app/homePage/nav';
// import Me from './app/me/me';
// // import MainPage from './app/me/MainPage';
// import Write from './app/write/write';
// import TabNavigator from 'react-native-tab-navigator';
// var {width,height} = require('Dimensions').get('window');
// export default class App extends Component<{}> {
//   constructor(){
//     super();
//     this.state = {
//       selectedTab:'nav'
//     }
//   }
//   render() {
//     var datas = [
//       {
//         selectedTitle:'nav',
//         title:'首页',
//         icon:'icon_tabbar_homepage',
//         selectedIcon:'icon_tabbar_homepage_selected',
//         color:'gray',
//         selectedColor:Config.color,
//         Component:Nav
//       },
//       {
//         selectedTitle:'write',
//         title:'投稿',
//         icon:'icon_tabbar_misc',
//         selectedIcon:'icon_tabbar_misc_selected',
//         color:'gray',
//         selectedColor:Config.color,
//         Component:Write
//       },
//       {
//         selectedTitle:'me',
//         title:'个人',
//         icon:'icon_tabbar_mine',
//         selectedIcon:'icon_tabbar_mine_selected',
//         color:'gray',
//         selectedColor:Config.color,
//         Component:Me
//       }
//     ]
//       var tabs = datas.map((item,index)=>{
//         return this._TabNavigator(item,index);
//       })
//       return <TabNavigator>{tabs}</TabNavigator>
//   }
//   _TabNavigator(item,index){
//       return (
//         <TabNavigator.Item
//           key={index}
//           selected={this.state.selectedTab === item.selectedTitle}
//           title={item.title}
//           renderIcon={() => <Image source={{uri:item.icon}} style={{width:20,height:20}}/>}
//           renderSelectedIcon={() => <Image source={{uri:item.selectedIcon}} style={{width:20,height:20}}/>}
//           titleStyle={{color:item.color}}
//           selectedTitleStyle={{color:item.selectedColor}}
//           onPress={() => this.setState({ selectedTab: item.selectedTitle })}>
//           <item.Component />
//         </TabNavigator.Item>
//       )
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     width:width,
//     height:height
//   }
// });
import Desc from './app/homePage/desc.js'
import OtherDesc from './app/homePage/otherdesc.js'
import Root from './app/root.js'
import Write from './app/write/write';
import Entry from './app/write/entry';
import Login from './app/me/login';
import Me from './app/me/me';

// import Home from './home.js'
// import Other from './other.js'

import {
  StackNavigator,
} from 'react-navigation';

const App = StackNavigator({
  Root: { screen: Root },
  Desc: { screen: Desc },
  OtherDesc: { screen: OtherDesc },
  Write: { screen: Write },
  Entry: { screen: Entry },
  Login: { screen: Login },
  Me: { screen: Me },
  // Other: { screen: Other },
  // Home: { screen: Home },
});
module.exports = App;