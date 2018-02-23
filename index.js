import { AppRegistry } from 'react-native';//读取到RN中的注册模块
import App from './App';//读书自己书写的第一个页面JS模块

AppRegistry.registerComponent('demo', () => App);//将读取到的模块注册到当前程序
