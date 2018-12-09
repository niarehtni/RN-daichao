/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    Image,
    StyleSheet,
    View
} from 'react-native';
import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';


import Home from './src/pages/daichao/Home/Home';
import WebPager from './src/pages/daichao/WebPager/WebPager';
import Loading from './src/component/loading.js';

import Person from './src/pages/demo/Personal/Personal';
import HomePager from './src/pages/demo/HomePager/HomePager';

let self; //将App组件中的this赋给全局的self
global.showLoading = false; //所有子页面均可直接调用global.showLoading()来展示Loading
global.closeLoading = false; //所有子页面均可直接调用global.closeLoading()来关闭Loading

export  default class App extends Component<Props> {
    componentDidMount() {
        self = this;
        global.showLoading = function () {
            self.Loading.show();
        };
        global.closeLoading = function () {
            self.Loading.close();
        };
    }

    render() {
        if (Platform.OS === 'android') {
            return (
            <View style={[{flex: 1}]}>
                <Navi/>
                <Loading ref={r=>{this.Loading = r}} hide = {true} />
            </View>
               
            )
        }else{
            return (
            <View style={[{flex: 1}]}>
                <Navi/>
                <Loading ref={r=>{this.Loading = r}} hide = {true} />
            </View>
            )
        }
    }
}

 const TabNavigatorConfig = {
  initialRouteParams: {initPara: '初始页面参数'},
    cardStyle: {backgroundColor: "#ffffff"},
  headerMode: 'none', // 禁用头部
  navigationOptions: {gesturesEnabled: false} //禁用页面的手势
}

const Tab = TabNavigator({
    //Home页面的配置
    Home: {
        screen: Home,
        navigationOptions: {
            //tab 的属性
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./images/ic_home.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
            ),

        },
    },
    //个人中心页面的配置
    Personal: {
        screen: Person,
        navigationOptions: {
            //tab 的属性
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./images/ic_me.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                />
            ),
        },
    },

}, {
    cardStyle: {backgroundColor: "#ffffff"},
    navigationOptions: {gesturesEnabled: false}, //禁用页面的手势
    //设置TabNavigator的位置，有top和bottom两个值
    tabBarPosition: 'bottom',
    //是否在更改标签时显示动画，滑动时的渐变效果
    animationEnabled: false,
    //是否允许在标签之间进行滑动
    swipeEnabled: true,
    //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    backBehavior: "none",
    //设置Tab标签的属性
    tabBarOptions: {
        //Android属性
        upperCaseLabel: false,//是否使标签大写，默认为true
        //共有属性
        showIcon: true,//是否显示图标，默认关闭
        showLabel: true,//是否显示label，默认开启
        activeTintColor: '#4c7ee9',//label和icon的前景色 活跃状态下（选中）
        inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
        style: { //TabNavigator 的背景颜色
            backgroundColor: 'white',
            height: 55,
        },
        indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
            height: 0,
        },
        //文字的样式
        labelStyle: {
            fontSize: 13,
            marginTop: -5,
            marginBottom: 5,
        },
        iconStyle: {//图标的样式
            marginBottom: 5,
        }
    },
});


/*
 * 初始化StackNavigator
 */

 const StackNavigatorConfig = {
  initialRouteParams: {initPara: '初始页面参数'},
    cardStyle: {backgroundColor: "#ffffff"},
  headerMode: 'none', // 禁用头部
  navigationOptions: {gesturesEnabled: false} //禁用页面的手势
}

const Navi = StackNavigator({
    Tab: {
        screen: Tab,
        navigationOptions: ({navigation}) => ({
            headerTitle: '首页',
            //设置导航栏文字样式
            headerTitleStyle: {
                flex: 1,
                textAlign: 'center',
                fontWeight: 'normal',
                fontSize: 15,
                color: '#666'
            },
        }),
    },
    HomePager: {
        screen: HomePager,
    },
    Personal: {
        screen: Person,
    },
    WebPager:{
         screen: WebPager,
    }

},StackNavigatorConfig);
