import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
var {width,height} = require('Dimensions').get('window');
var navigate;
export default class Write extends Component<{}> {
  render() {
    navigate = this.props.navigate;
    var datas = [
      {
        imgSrc:'post_dz',
        imgtext:'发段子'
      },
      {
        imgSrc:'post_sp',
        imgtext:'发视频'
      },
      {
        imgSrc:'post_sy',
        imgtext:'发声音'
      },
      {
        imgSrc:'post_lj',
        imgtext:'发链接'
      },
      {
        imgSrc:'post_tp',
        imgtext:'发图片'
      },
      {
        imgSrc:'post_xc',
        imgtext:'发相册'
      }
    ]
    var img = datas.map((item,index)=>{
        return (
        <TouchableHighlight key={index} onPress={this._press.bind(this)} underlayColor="transparent">
          <View>
            <Image source={{uri:item.imgSrc}} style={styles.imgStyle}/>
            <Text style={styles.txtStyle}>{item.imgtext}</Text>
          </View>
        </TouchableHighlight>
        )
      })
    return (
      <View style={styles.container}>{img}</View>
    );
  }
  _press(){
    navigate('Entry', { msg: "data" })
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    flexWrap: "wrap",
    marginTop:width/4
  },
  imgStyle:{
    width:width/4,
    height:width/4,
    borderRadius:width/8,
    marginLeft:width/15,
    marginTop:20
  },
  txtStyle:{
    textAlign:'center',
    fontSize:20,
    marginTop:5,
    marginLeft:28
  }
});
