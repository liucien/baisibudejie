import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableHighlight,
  Button,
  RefreshControl,
  ActivityIndicator
} from 'react-native';

var {width,height} = require('Dimensions').get('window');
var navigate ;
export default class Desc extends Component{
  static navigationOptions = {
    header: null,
  };
  constructor(){
    super();
    var ds = new ListView.DataSource({
      rowHasChanged:function(r1,r2){
        return r1!==r2;
      }
    })
    this.state= {
      dataSource:ds,
      num:[1,41,10,29,31],
    }
  }
  componentDidMount(){
    var url = 'http://api.budejie.com/api/api_open.php?a=list&c=data&type='+ this.state.num[this.props.currentIndex];
    fetch(url).then((response)=>{
      return response.json();
    }).then((json)=>{
      this.setState({
        dataSource:this.state.dataSource.cloneWithRows(json.list),
      })
    })
  }
  componentDidUpdate(){
    var url = 'http://api.budejie.com/api/api_open.php?a=list&c=data&type='+ this.state.num[this.props.navIndex];
    // this.refs.totop.scrollTo({x:0,y: 0,animated:true});
    fetch(url).then((response)=>{
      return response.json();
    }).then((json)=>{
      this.setState({
        dataSource:this.state.dataSource.cloneWithRows(json.list)
      })
    })
  }
  //下拉刷新
  reloadWordData() {
    return new Promise((resolve) => {
      setTimeout(()=>{resolve()}, 2000)
    });
  }
  render() {
    navigate = this.props.navigate;
    return (
      <View>
        <ListView
        ref='totop'
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={this.reloadWordData.bind(this)} />}
          showVerticalIndicator = {false}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
        />
      </View>
    );
  }
  _renderRow(rowData){
    if (rowData.bimageuri !="") {
      return (
        <View style={{padding:10,borderBottomWidth:1,borderBottomColor:"#fff"}}>
            <View style={imgStyle.flexStyle}>
              <View style={imgStyle.headStyle}>
                <Image style={imgStyle.headImg} source={{uri:rowData.profile_image}} />
                <Text>{rowData.name}</Text>
              </View>
              <Text>{rowData.created_at}</Text>
            </View>
            <Text>{rowData.text}</Text>
            <TouchableHighlight onPress={this._press(rowData.id)}>
              <View style={imgStyle.flexStyle}>
                <Image style={imgStyle.image} source={{uri:rowData.bimageuri}} onPress={this._press(rowData.id)} />
                <Image style={imgStyle.voideStyle} source={require('../../images/v_play.png')} />
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.login} underlayColor="transparent">
              <View style={imgStyle.bottomStyle}>
                <View style={imgStyle.flexStyle}>
                  <Image style={imgStyle.bottomImage} source={require('../../images/love.png')} />
                  <Text>{rowData.love}</Text>
                </View>
                <View style={imgStyle.flexStyle}>
                  <Image style={imgStyle.bottomImage} source={require('../../images/hate.png')} />
                  <Text>{rowData.hate}</Text>
                </View>
                <View style={imgStyle.flexStyle}>
                  <Image style={imgStyle.bottomImage} source={require('../../images/repost.png')} />
                  <Text>{rowData.repost}</Text>
                </View>
                <View style={imgStyle.flexStyle}>
                  <Image style={imgStyle.bottomImage} source={require('../../images/comment.png')} />
                  <Text>{rowData.comment}</Text>
                </View>
              </View>
            </TouchableHighlight>
        </View>
      )
    }else{
      return (
        <View>
          <View style={{padding:10,borderBottomWidth:1,borderBottomColor:"#fff"}}>
            <View style={imgStyle.flexStyle}>
              <View style={imgStyle.headStyle}>
                <Image style={imgStyle.headImg} source={{uri:rowData.profile_image}} />
                <Text>{rowData.name}</Text>
              </View>
              <Text>{rowData.created_at}</Text>
            </View>
            <Text>{rowData.text}</Text>
            <View style={imgStyle.elseStyle}>
              <Image style={imgStyle.imagepic} source={{uri:rowData.cdn_img}} />
              {/*<Text style={imgStyle.elseText}>点击查看全图</Text>*/}
              <Button
                title="点击查看更多"
                onPress={this._press(rowData.id)}/>
            </View>
            <TouchableHighlight onPress={this.login} underlayColor="transparent">
              <View style={imgStyle.bottomStyle}>
                <View style={imgStyle.flexStyle}>
                  <Image style={imgStyle.bottomImage} source={require('../../images/love.png')} />
                  <Text>{rowData.love}</Text>
                </View>
                <View style={imgStyle.flexStyle}>
                  <Image style={imgStyle.bottomImage} source={require('../../images/hate.png')} />
                  <Text>{rowData.hate}</Text>
                </View>
                <View style={imgStyle.flexStyle}>
                  <Image style={imgStyle.bottomImage} source={require('../../images/repost.png')} />
                  <Text>{rowData.repost}</Text>
                </View>
                <View style={imgStyle.flexStyle}>
                  <Image style={imgStyle.bottomImage} source={require('../../images/comment.png')} />
                  <Text>{rowData.comment}</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      );
    }
  }
  //页面跳转
  _press(url){
    return function(){
      navigate('OtherDesc', { msg: url })
    }
  }
  login(){
    navigate('Login', { msg: "data" })
  }
}

var imgStyle = StyleSheet.create({
  flexStyle:{
    flexDirection:"row",
    justifyContent:"space-between",
    position:"relative"
  },
  headStyle:{
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center"
  },
  headImg:{
    width:width/10,
    height:width/10,
    borderRadius:width/20
  },
  voideStyle:{
    width:width/3,
    height:width/3,
    position:"absolute",
    left:"50%",
    top:"50%",
    marginLeft:-width/6,
    marginTop:-width/6,
  },
  image:{
    width:width,
    height:height/3.5,
    overflow:"hidden"
  },
  imagepic:{
    height:height/3.5,
    overflow:"hidden"
  },
  bottomStyle:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:10
  },
  bottomImage:{
    width:width/16,
    height:width/18,
  },
  elseStyle:{
    position:"relative"
  },
  elseText:{
    textAlign:"center",
    backgroundColor:"gray",
    opacity:0.5
  }
})