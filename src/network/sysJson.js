//定义服务器地址以及所有的Classid

let dataUrl = "http://tizi.xingzi.org.cn/tizi/pub/admin/";
let sysClassid = {
  "NewsColumn": "f3d43154-9a62-42b3-8f2d-49511089f893",//新闻栏目ID
};







//==========================================================
//React 方式
export default{
  sysClassid,
  dataUrl
}

//==========================================================
//小程序方式
// module.exports = {
//   sysClassid: sysClassid,
//   dataUrl: dataUrl,
// }
