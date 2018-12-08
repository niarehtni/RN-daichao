import React, { Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  WebView,
  Platform
} from 'react-native';

import Css from './WebPagerCss';
const styles = StyleSheet.create(Css);

export default class WebPager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'WebPager'
        };
    }
    //跳转下一个页面
    goToNextPage() {

    }

    render() {
        return (
            <View style={styles.page}>
                {
                    Platform.OS === 'ios' ?
                    <View style={{ marginTop: 18 }}></View>
                    :
                    <View></View>
                }

                <WebView
                    bounces={false}
                    scalesPageToFit={true}
                    renderLoading = {true}
                    source={{uri:'https://www.baidu.com'}}
                    style={{width:'100%',height:'100%'}}
                />
            </View>
        );
    }
}
module.exports = WebPager;
