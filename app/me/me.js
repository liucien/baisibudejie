import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ListView
} from 'react-native';
var {width,height} = require('Dimensions').get('window');

var navigate;
export default class Me extends Component<{}> {
  constructor(){
    super();
    var ds = new ListView.DataSource({
      rowHasChanged:function(r1,r2){
        return r1!==r2;
      }
    })
    this.state= {
      dataSource:ds,
      login:"登录/注册"
    }
  }
  componentDidMount(){
    var url = 'http://api.budejie.com/api/api_open.php?a=list&c=subscribe&category_id=35';
    fetch(url).then((response)=>{
      return response.json();
    }).then((json)=>{
      this.setState({
        dataSource:this.state.dataSource.cloneWithRows(json.list),
      })
    })
  }
  // componentWillUpdate(){
  //   var msg = this.props.navigation.state.params.msg;
  //   console.log(msg)
  //   this.setState({
  //     login:msg
  //   })
  // }
  render() {
    navigate = this.props.navigate;
    return (
      <View style={{padding:10}}>
        <TouchableHighlight 
          underlayColor='transparent'
          onPress={this.login}>
            <View style={styles.login}>
              <Image source={{uri:"icon_tabbar_mine"}} style={styles.imgStyle}/>
              <Text style={styles.loginText}>{this.state.login}</Text>
            </View>
        </TouchableHighlight>
        <Text style={styles.groomStyle}>推荐关注</Text>
          <ListView
          showVerticalIndicator = {false}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow} />
      </View>
    );
  }
  _renderRow(rowData){
    return(
      <View style={styles.container1}>
        <View style={styles.container2}>
          <Image source={{uri:rowData.header}} style={styles.iconStyle}/>
          <Text style={styles.nameStyle}>{rowData.screen_name}</Text>
        </View>
        <Text>本周更新{rowData.tiezi_count}条</Text>
      </View>
    )
  }
  login(){
    navigate('Login', { msg: "data" })
  }
}

const styles = StyleSheet.create({
  container1: {
    flexDirection:"row",
    justifyContent:"space-between",
    display: 'flex',
    alignItems:'center',
    padding:5,
    borderBottomWidth:1,
    borderColor:'#fff'
  },
  container2: {
    flexDirection:"row",
    justifyContent:"space-between",
    display: 'flex',
    alignItems:'center',
    padding:5
  },
  login: {
    flexDirection:"row",
    display: 'flex',
    alignItems:'center',
  },
  imgStyle:{
    width:width/6,
    height:width/6,
  },
  loginText: {
    fontSize: 20,
    color: 'black',
  },
   groomStyle:{
    fontSize: 18,
    color: '#f40',
    marginLeft:5
   },
   nameStyle:{
    fontSize: 15,
    color: 'black',
    marginLeft:5
   },
   iconStyle:{
    width:width/8,
    height:width/8,
    borderRadius:width/16,
   }
});
