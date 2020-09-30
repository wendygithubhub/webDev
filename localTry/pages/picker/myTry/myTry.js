// pages/picker/myTry/myTry.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:'2020-07-01',
    multiArray:[['无脊柱动物', '脊柱动物'],['扁形动物','线形动物','环节动物','软体动物','节肢动物'],['猪肉条虫','吸血虫']],
    objectMultiArray:[
      [
        {
          id: 0, 
          name:'无脊柱动物'
        },
        {
          id: 1,
          name: '脊柱动物'
        }
      ],[
        {id :1, namen:'扁形动物'},{id:2, name:'线形动物'},{id:3, name:'环节动物'},{id:4, name:'节肢动物'}
      ],[
        {id:0, name:'猪肉条虫'},{id:1, name:'吸血虫'}
      ]
    ],
    multiIndex: [0,0,0],

  },

  // 日期选择器
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },

  // 多选择器
  bindMultiPickerChange: function(e) {
    console.log('picker发送选择改变', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  }, 

  bindMultiPickerColumnChange: function(e){
    /////column为第多少列，value为第几个
    // console.log('修改的列为', e.detail.column, '，值为：', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    console.log("column: " + e.detail.column);
    switch(e.detail.column){
      case 0:// 第一列
        switch(data.multiIndex[0]){
          case 0: // 0列第0个
            data.multiArray[1] = ['扁性动物','线形动物','环节动物','软体动物','节肢动物'];  // 第二列
            data.multiArray[2] = ['猪肉条虫','吸血虫']; // 第三列
            break;
          case 1:
            data.multiArray[1] = ['鱼', '两栖动物','爬行动物']; // 第二列
            data.multiArray[2] = ['鲫鱼', '带鱼'];
            break;
          }
        // 每当动了第一列，都要把第二列和第三列的内容初始化
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
      case 1:// 动了第二列，需要同时判断第一列、第二列数据，同时更改第三列
        switch(data.multiIndex[0]){
          case 0:
            switch(data.multiIndex[1])
            {
              case 0:
                data.multiArray[2] = ['猪肉条虫', '吸血虫'];
              break;
              case 1:
                data.multiArray[2] = ['蝗虫'];
              break;
              case 2:
                data.multiArray[2] = ['蚂蚁', '蚂蟥'];
              break;
              case 3:
                data.multiArray[2] = ['河蚌','蜗牛'];
              break;
              case 4:
                data.multiArray[2] = ['昆虫','甲壳动物','蛛形动物','多足动物'];
              break;
            }
          case 1:
            switch(data.multiIndex[1])
            {
              case 0:
                data.multiArray[2] = ['鲫鱼','带鱼'];
              break;
              case 1:
                data.multiArray[2] = ['青蛙', '娃娃鱼'];
                break;
              case 2:
                data.multiArray[2] = ['蜥蜴', '龟','壁虎'];
            }

        
          
        }
    }

    this.setData(data);
  
  
  }
  
})