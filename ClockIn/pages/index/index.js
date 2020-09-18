//index.js
//获取应用实例
import QRCode from '../../utils/weapp-qrcode'

const app = getApp()
var util = require('../../utils/util.js');

Page({
  data: {
    motto: 'What doesn\'t kill you makes you stronger',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    year:'hello'
 },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../notebook/notebook'
    })
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    new QRCode('myQrcode',{
      text:"hello",
      width:150,
      height:150,
      padding:0,
      callback:(res) =>{
        console.log(res.path)
      }
    })
  },

  // 上下班打卡
  copyTimeIn:function(){
    wx.setClipboardData({
      // data: this.data.motto,
      data: util.getTime1(new Date()),
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
    })    
  },

   getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
