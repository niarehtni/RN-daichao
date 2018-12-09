//定义接口名称以及接口方法
import dataLink from './dataLink';
import sysJson from './sysJson';


//登录
let userLoginInterface = sysJson.dataUrl + "userLogin.do";

//查找登录页面的角色数据词典
let findOrgDataDicListInterface = sysJson.dataUrl +"user/dataDic/findOrgDataDicList.do";

//修改密码
let modifyPwdInterface = sysJson.dataUrl + "user/dataDic/modifyPwd.do";

// 增加/修改信息：
let updateFrontInfoInterface = sysJson.dataUrl+"information/Infohtml/updateFrontInfo.do"
// 删除信息：
let deleteInfoInterface = sysJson.dataUrl + "information/Infohtml/deleteInfo.do"
// 查询信息列表：
let findFrontInfoTempListInterface = sysJson.dataUrl +"information/Infohtml/findFrontInfoTempList.do"
// 查询信息详情
let findFrontTempInfoInterface = sysJson.dataUrl + "information/Infohtml/findFrontTempInfo.do"
//上传图片
let uploadFileOneInterface = sysJson.dataUrl+"system/enclosure/uploadFileOne.do"
//查看图片
let findimgfileInterface = sysJson.dataUrl + "system/enclosure/findimgfile.do"

//查找栏目列表
let findColumnListInterface = sysJson.dataUrl + "column/manageColumn/findColumnList.do"

//查找个人菜单列表
let findPeopleMenuListInterface = sysJson.dataUrl + "user/menu/findPeopleMenuList.do"

//上传图片
let plUploadFileInterface = sysJson.dataUrl + "system/enclosure/plUploadFile.do"

// =========================================================================

//登录
let userLogin = (params, callback, err)=>{
  dataLink.FetchUtil.dataLinkPostJson(userLoginInterface, params, callback, err)
}

//查找登录页面的角色数据词典
function findOrgDataDicList(params, callback, err) {
  dataLink.FetchUtil.dataLinkPostJson(findOrgDataDicListInterface, params, callback, err)
}

//修改密码
function modifyPwd(params, callback, err) {
  dataLink.dataLinkPostJson(modifyPwdInterface, params, callback, err)
}


//增加/修改信息：
function updateFrontInfo(params, callback, err) {
  dataLink.dataLinkPostJson(updateFrontInfoInterface, params, callback, err)
}

// 删除信息：
function deleteInfo(params, callback, err) {
  dataLink.dataLinkPostJson(deleteInfoInterface, params, callback, err)
}

// 查询信息列表：
let findFrontInfoTempList = (params, callback, err)=>{
  dataLink.dataLinkPostJson(findFrontInfoTempListInterface, params, callback, err)
}

// 查询信息详情
function findFrontTempInfo(params, callback, err) {
  dataLink.dataLinkPostJson(findFrontTempInfoInterface, params, callback, err)
}

// 上传图片
function uploadFileOne(params, callback, err) {
  dataLink.dataLinkPostJson(uploadFileOneInterface, params, callback, err)
}

// 查看图片
function findimgfile(params, callback, err) {
  dataLink.dataLinkPostJson(findimgfileInterface, params, callback, err)
}

//查找栏目列表
function findColumnList(params, callback, err) {
  dataLink.dataLinkPostJson(findColumnListInterface, params, callback, err)
}

//查找个人菜单列表
function findPeopleMenuList(params, callback, err) {
  dataLink.dataLinkPostJson(findPeopleMenuListInterface, params, callback, err)
}

//上传图片
function plUploadFile(params, callback, err) {
  dataLink.dataLinkPostJson(plUploadFileInterface, params, callback, err)
}


//================================================================================
//React方式
export default{
  userLogin,
  findOrgDataDicList,
  modifyPwd,
  updateFrontInfo,
  deleteInfo,
  findFrontInfoTempList,
  findFrontTempInfo,
  uploadFileOne,
  findimgfile,
  findColumnList,
  findPeopleMenuList,
  plUploadFile
}

//================================================================================
//微信小程序方式
// module.exports = {
//   userLogin: userLogin,
//   findOrgDataDicList: findOrgDataDicList,
//   modifyPwd: modifyPwd,
//   updateFrontInfo: updateFrontInfo,
//   deleteInfo: deleteInfo,
//   findFrontInfoTempList: findFrontInfoTempList,
//   findFrontTempInfo: findFrontTempInfo,
//   uploadFileOne: uploadFileOne,
//   findimgfile: findimgfile,
//   findColumnList: findColumnList,
//   findPeopleMenuList: findPeopleMenuList,
//   plUploadFile: plUploadFile
// }
