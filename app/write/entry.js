import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TextInput,
  Button
} from 'react-native';
var {width,height} = require('Dimensions').get('window');
var navigate;
    
export default class Entry extends Component<{}> {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
     navigate  = this.props.navigation.navigate;
    // console.log(navigate)
    return(
      <View>
        <View style={styles.inputStyle}>
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.inputStyle}
            />
        </View>
        <Button
          onPress={this._press.bind(this)}
          title="发布"
        />
      </View>
    )
  }
  _press(){
    // function navigate(routeName, params, action) {
    //   return navigation.dispatch(_NavigationActions2.default.navigate({
    //     routeName: routeName,
    //     params: params,
    //     action: action
    //   }));
    // }
    navigate('Login', { msg: "data" })
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
  boxStyle:{
    width:width,
    height:height/3,
    borderColor: 'gray', 
    borderWidth: 1,
    borderStyle:'solid'
  },
  inputStyle:{
    height: height/3,
    borderColor: 'gray', 
    borderWidth: 1,
    borderStyle:'solid'
  }
});
