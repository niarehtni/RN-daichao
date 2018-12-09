import React, { Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  WebView,
  Platform,
  Image,
  TouchableOpacity
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
    componentDidMount(){
        global.showLoading();
    }
    //跳转下一个页面
    goToNextPage() {
        this.props.navigation.navigate('Home')
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
                
                <View style={styles.navigateTop}>
                    <TouchableOpacity
                        onPress={()=>{
                            this.goToNextPage()
                    }}>

                        <Image style={styles.navigateIcon}
                        source={require('../../../image/return.png') }  
                        onPress={() => this.goToNextPage()}/>

                    </TouchableOpacity>
                    

                    <Text style={styles.navigateTitle}>网页</Text>
                    <Text style={styles.navigateTitle}></Text>
                </View>

                <WebView
                    bounces={false}
                    onLoadEnd={()=>{
                        global.closeLoading();
                    }}
                    mixedContentMode={'compatibility'}
                    scalesPageToFit={true}
                    // renderLoading = {true}
                    source={{uri:'http://www.baidu.com'}}
                    style={{width:'100%',height:'100%'}}
                />
            </View>
        );
    }
}
module.exports = WebPager;
