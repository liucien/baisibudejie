import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

var {width,height} 
= require('Dimensions').get('window');
import Desc from './desc';
import Header from './header';
export default class Nav extends Component{
  constructor(){
    super();
    this.state = {
      titles:[
        "全部","视频","图片","段子","声音",
        "更多"
      ],
      currentIndex : 0
    }
  }
  _press(index){
    var that = this;
    return ()=>{
      var scrollView = that.refs.sc;
      scrollView.scrollTo({
        x:index*60 - width/2 + 60/2,
        y:0,
        animated:true
      });
      that.setState({
        currentIndex:index
      })

    }    
  }
  render(){
    var titleComponents = this.state.titles.map((item,index)=>{
      var color = this.state.currentIndex==index?'#f40':'black';
      return (
        <Text 
        key={index} 
        style={[myStyle.itemContainer,{color:color,borderBottomColor:color}]}
        onPress={this._press(index)}
        >{item}</Text>
      );
    });
    return (
      <View>
        <View>
          <Header />
          <ScrollView 
            ref='sc'
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            >
            {titleComponents}
          </ScrollView>
        </View>
        <Desc navIndex={this.state.currentIndex} navigate={this.props.navigate}/>
      </View>
    )
  }
  
}

var myStyle = StyleSheet.create({
  container:{},
  itemContainer:{
    width:60,
    height:40,
    textAlign:'center',
    paddingTop:10
  }
});