// pages/notebook/notebook.js

var util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
      textTitle:'what\'s new?',
      list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 从util中直接获取日期时间信息
    var TIME = util.formatTime(new Date());
    this.setData({
      time:TIME
    })

    // 获取月、日
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
    var Y = date.getFullYear();
    var M = (date.getMonth() + 1 < 10 ? '' + (date.getMonth() + 1) : date.getMonth() + 1);
    var D = date.getDate();
    var H = date.getHours();
    var m = date.getMinutes();
    this.setData({
      year: Y,
      month: M,
      day: D,
      hour:H,
      minutes: m
    })

    var courselist = [
      {img: "../../images/study.jpg",
      name:"不断学习"},
      {img: "../../images/study.jpg",
      name:"不断学习"},
      {img: "../../images/study.jpg",
      name:"不断学习"},
      {img: "../../images/study.jpg",
      name:"不断学习"}
  ]
  this.setData({
    list:courselist
  })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})