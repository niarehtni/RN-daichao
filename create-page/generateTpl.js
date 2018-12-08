exports.vue = function (pageName) {
  var tpl = `import React, { Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';

import Css from './${pageName}Css';
const styles = StyleSheet.create(Css);

export default class ${pageName} extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: '${pageName}'
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
            <Text>${pageName}</Text>
        </View>
        );
    }
}
module.exports = ${pageName};
`
  return tpl
}

exports.js = function (pageName) {
var tpl = `
import ScreenUtils from '../../../utils/ScreenUtils';

export default CssConfigs = {
    page:{
        backgroundColor: '#F0EFF5',
        flexDirection: 'column',
    }
}
`
  return tpl
}
