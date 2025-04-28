// pages/login/login.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isFocused:false,
    isFocused1:false,
    isFocused2:false

  },
  formSubmit(){
    wx.switchTab({
      url: '/pages/shouxie/shouxie',  
    });
  },
  formReset(){},
  onInputFocus(e:any){
    const type = e.currentTarget.dataset.type; // 获取输入框类型
   
      // 根据不同类型执行不同操作
      if (type === 'phone') {
        this.setData({
          isFocused1: true,
          isFocused: true
        });
        // 执行手机号输入框特有的逻辑
      } else if (type === 'password') {
        this.setData({
          isFocused2: true ,
          isFocused: true 
        });
      }
  },
  onInputBlur(e:any)
  {

    const type = e.currentTarget.dataset.type; // 获取输入框类型
   
      // 根据不同类型执行不同操作
      if (type === 'phone') {
        this.setData({
          isFocused1: false ,
          isFocused: false 
        });
        // 执行手机号输入框特有的逻辑
      } else if (type === 'password') {
        this.setData({
          isFocused2: false ,
          isFocused: false 

        });
      }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})