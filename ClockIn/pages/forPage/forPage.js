Page({
  data: {
    input_data: [
      { id: 1, unique: "unique1", value:" " },
      { id: 2, unique: "unique2", value:" " },
    ] ,
    value: 0,
  },
  //前部插入元素函数
  addToFront: function (e) {
    const length = this.data.input_data.length + 1;
    this.data.input_data = [{ id: length, unique: 'unique_' + length }].concat(this.data.input_data)
    // console.log(this.data.input_data);
    this.setData({
      input_data: this.data.input_data
    })
  },
  //随机排序函数
  switch: function (e) {
    const length = this.data.input_data.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.input_data[x]
      this.data.input_data[x] = this.data.input_data[y]
      this.data.input_data[y] = temp
    }
    this.setData({
      input_data: this.data.input_data
    })
  },

  bindinput:function(e){
      var index = parseInt(e.currentTarget.dataset.bindex)
      var input_data = this.data.input_data
      input_data[index].value = e.detail.value
      this.setData({
        input_data: input_data,
        value: e.detail.value ,
      })
      console.log(input_data)
      console.log(index + " : " + this.data.value)

  }
})