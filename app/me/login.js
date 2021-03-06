import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TextInput,
    TouchableHighlight,
    Alert
} from 'react-native';
import MainPage from './MainPage';
var navigate;
var name;
var pass;
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:""
        };
    }
    render() {
        name = this.state.username;
        pass = this.state.password;
        navigate = this.props.navigation.navigate;
        // 获取到上页面的传值
        // var msg = this.props.navigation.state.params.msg;
        // console.log(msg)

    return (
        <View style={styles.container}>
            <View style={styles.item}><Text style={styles.textStyle}>用户帐号：</Text>
                <TextInput
                    ref="inputLoginName"
                    autoFocus={true}
                    underlineColorAndroid="gray"
                    placeholder="请输入用户名"
                    clearTextOnFocus={true}
                    clearButtonMode="while-editing"
                    style={{flex: 1}}
                    onChangeText={(text) => this.setState({username:text})}
                />
            </View>
            <View style={styles.item}><Text style={styles.textStyle}>用户密码：</Text>
                <TextInput
                    ref="inputLoginPwd"
                    underlineColorAndroid="gray"
                    placeholder="请输入密码"
                    clearTextOnFocus={true}
                    clearButtonMode="while-editing"
                    style={{flex: 1}}
                    onChangeText={(text) => this.setState({password:text})}
                />
            </View>
                <TouchableHighlight 
                    style={styles.login}
                    // underlayColor='transparent'
                    onPress={this.loginInMainpage}>
                    <Text style={styles.loginText}>登录</Text>
                </TouchableHighlight>
        </View>
        )
    }

    /**
     * 登录进入主页面
     */
    loginInMainpage(){
        if(name == "admin" && pass == "admin"){
            navigate('Me',{ msg: "已登录" })
        }else{
            Alert.alert(
              '提示',
              '账号或密码错误',
              [
                {text: '确定'},
              ],
              { cancelable: false }
)
        }
    }
    // loginInMainpage() {
    //     this.refs.inputLoginName.blur();
    //     this.refs.inputLoginPwd.blur();
    //     this.props.navigator.resetTo({
    //         component: MainPage,
    //         params: {
    //             logNmae: this.state.username,
    //             logPwd: this.state.userpwd,
    //             parentComponent: this,
    //             ...this.props
    //         },
    //     });
    // }

    setLoginName(input) {
        this.setState = {inputName: input}
        console.log(this.state.inputName)
    }

    setLoginPwd(input) {
        this.setState = {inputPwd: input}
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    textStyle: {
        fontSize: 18,
        color: 'black',
        marginRight: 10
    },
    login: {
        height: 40,
        backgroundColor: 'green',
        margin: 20,
        justifyContent: 'center',
    },
    loginText: {
        fontSize: 20,
        alignSelf: 'center',
        color: '#FFF'
    }

})