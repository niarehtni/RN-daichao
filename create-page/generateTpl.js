exports.vue = function (pageName) {
  var tpl = `import React, { Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Css from './${pageName}Css';
const styles = StyleSheet.create(Css);

export default class ${pageName} extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: ${pageName}
        };
    }
    //跳转下一个页面
    goToNextPage() {

    }

    render() {
        return (
        <View>
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
