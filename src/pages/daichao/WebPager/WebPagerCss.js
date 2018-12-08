
import ScreenUtils from '../../../utils/ScreenUtils';

export default CssConfigs = {
    page:{
        flex:1,
        backgroundColor: '#F0EFF5',
        flexDirection: 'column',
    },
    navigateTop: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        backgroundColor: "#fff",
        height: 50,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        padding: 5,
    },
    navigateIcon: {
        width: 30,
        height:30,
        marginTop: 5,
        // width:ScreenUtils.screenW*0.2
    },
    navigateTitle: {
        width: ScreenUtils.screenW-70,
        textAlign: "center",
        lineHeight: 40,
        fontSize: ScreenUtils.setSpText(6),
        // width: ScreenUtils.screenW * 0.8,
    }

}
