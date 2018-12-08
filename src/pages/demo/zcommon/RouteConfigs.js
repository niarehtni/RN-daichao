import {StackNavigator} from "react-navigation";

import detail from './pages/listDetail/listDetail'
import list from './pages/list/list'
import index from './pages/Index/Index'
import home from './pages/daichao/home/home'

export default RouteConfigs = {
    home: {
        screen: home,
        navigationOptions: ({
            navigation
        }) => ({
            // title: '',
        })
    },
    Home: {
        screen: list,
        navigationOptions: ({
            navigation
        }) => ({
            title: '首页',
        }),
    },
    detail: {
        screen: detail,
        navigationOptions: ({
            navigation
        }) => ({
            // title: '详情',

        }),
    },
    index: {
        screen: index,
        navigationOptions: ({
            navigation
        }) => ({
            title: '页面',

        }),
    }
    
}