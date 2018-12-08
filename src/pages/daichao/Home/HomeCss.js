import ScreenUtils from '../../../utils/ScreenUtils';

export default CssConfigs = {
    page:{
        backgroundColor: '#F0EFF5',
        flexDirection: 'column',
    },
    swiper: {
        // flex:1,
        height: 160,
    },
    img: {
        // width: ScreenUtils.screenW,
        height: 160,
    },
    column:{
        flexDirection: 'row',
        width: ScreenUtils.screenW,
        backgroundColor:'#fff'
    },
    columnTitle:{
        flex: 1,
        height:40,
        textAlign: 'center',
        fontSize: ScreenUtils.setSpText(5),
        lineHeight:40,
        color: '#FD5D5D',
    },
    line:{
        width:1,
        backgroundColor:'#ccc'
    },
    recommended: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        backgroundColor: '#fff',
        height:50,
        width: ScreenUtils.screenW,
    },
    recommendedTitle:{
        fontSize: ScreenUtils.setSpText(5),
        color: "#333333",
        lineHeight:50,
        paddingLeft: 10,
    },
    container: {
        // flex: 1,
        // paddingTop: 22,
        backgroundColor: '#F2F2F2',
        height: ScreenUtils.screenH*0.56,
        // marginBottom:100
    },
    list: {
        padding: 10,
        height: ScreenUtils.screenH * 0.2,
        backgroundColor: '#fff',
        marginBottom: 10,
        flexDirection: 'column',
    },
    listA:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 13
    },
    listimg:{
        width:40,
        height:40,
        marginRight: 22,
    },
    listTitle:{
        height: 40,
        fontSize: ScreenUtils.setSpText(7),
        lineHeight: 40
    },
    listName:{
       flexDirection: 'row',
       justifyContent: 'flex-start',
    },
    listBtn:{
        width:110,
        height:40,
        backgroundColor: '#FD5D5D',
        borderRadius: 8
    },
    listBtnTitle:{
        fontSize: ScreenUtils.setSpText(4),
        lineHeight: 40,
        color: '#fff',
        textAlign: 'center'
    },
    listRate:{
        fontSize: ScreenUtils.setSpText(5),
        lineHeight: 20,
        color: '#000',
    },
    listTime:{
        fontSize: ScreenUtils.setSpText(4),
        lineHeight: 20,
        color: '#666666',
    }
}
