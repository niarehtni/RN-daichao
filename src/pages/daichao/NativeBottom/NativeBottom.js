import React, { Component,PropTypes } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';
import { Button } from 'react-native-elements'
import Contacts from 'react-native-contacts';
import Home from '../Home/Home'
import TabNavigator from 'react-native-tab-navigator';
// import Css from './NativeBottomCss';
// const styles = StyleSheet.create(Css);



const dataSource = [
  {icon:require('./image/1.jpg'),selectedIcon:require('./image/1.jpg'),tabPage:'Home',tabName:'首页',component:Home},
  {icon:require('./image/2.jpg'),selectedIcon:require('./image/1.jpg'),tabPage:'Home',tabName:'文章',component:Home},
  {icon:require('./image/1.jpg'),selectedIcon:require('./image/1.jpg'),tabPage:'Home',tabName:'订单',component:Home},
  {icon:require('./image/1.jpg'),selectedIcon:require('./image/2.jpg'),tabPage:'Home',tabName:'我的',component:Home}
]
var navigation = null;


export default class NativeBottom extends Component {
constructor(props) {
  super(props);
  this.state = {
    selectedTab: 'NativeBottom'
  };
}
componentDidMount() {
  console.log('this.props:' + this.props.navigator);

}
//跳转下一个页面
goToNextPage() {

  // this.props.navigator.push({
  //   component: WebViewPage
  // })

}

render() {
    let tabViews = dataSource.map((item,i) => {
      return (
          <TabNavigator.Item
            title={item.tabName}
            selected={this.state.selectedTab===item.tabPage}
            titleStyle={{color:'black'}}
            selectedTitleStyle={{color:'#7A16BD'}}
            renderIcon={()=><Image style={styles.tabIcon} source={item.icon}/>}
            renderSelectedIcon = {() => <Image style={styles.tabIcon} source={item.selectedIcon}/>}
            tabStyle={{alignSelf:'center'}}
            onPress = {() => {this.setState({selectedTab:item.tabPage})}}
            key={i}
            >
            <item.component  navigation={navigation}/>
        </TabNavigator.Item>
      );
    })
    return (
      <View style={styles.container}>
        <TabNavigator
          hidesTabTouch={true}
          >
            {tabViews}
        </TabNavigator>
      </View>
    );
  }s
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  tabIcon:{
    width:23,
    height:23,
  }
});

module.exports = NativeBottom;