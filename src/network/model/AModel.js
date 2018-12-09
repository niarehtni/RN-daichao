import sysClassid from '../sysJson';
import dataAcquisition from '../dataAcquisition';
import common from '../../Common/common';

let NewsFindFrontInfoTempList = (params, getdata)=>{
  // 传参
  // page	int	 当前页   ：1
  // num	int	当前页显示条数: 5
  // orgid	string	机构id
  // searchField	string	channel, title, orgid
  // searchValue	string	频道id, 新闻标题的模糊查询, 机构id
  // userid	string	人员id

  params.classid = sysClassid.sysClassid.NewsColumn;
  dataAcquisition.findFrontInfoTempList(params, (res) => {
    if (res.result.flag != 1) {
      getdata("获取数据失败");
    };
    let Jsondata = res.infos;
    getdata(Jsondata);
  }, (err) => {
    getdata("获取数据失败");
  },
  )
}

export default{
  NewsFindFrontInfoTempList
};
