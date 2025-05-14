// pages/login/login.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isFocused:false,
    isFocused1:false,
    isFocused2:false,
    isFocused3:false,
    verifyCode:false,
    isCounting: false, 
    countdownSecond: 60,
    timer:0,
    name:'',
    password:'',
    code:''

  },
  getVerificationCode() {
    if (this.data.isCounting) return;
    
    this.setData({ isCounting: true });
    this.startCountdown();
    
    wx.request({ url: 'api/send-code' });
  },

  startCountdown() {
    this.data.timer = setInterval(() => {
      if (this.data.countdownSecond <= 0) {
        clearInterval(this.data.timer);
        this.setData({ isCounting: false, countdownSecond: 60 });
        return;
      }
      this.setData({ countdownSecond: this.data.countdownSecond - 1 });
    }, 1000);
  },

  onUnload() {
    if (this.data.timer) clearInterval(this.data.timer);
  },
  onUsernameInput(e:any) {
    this.setData({ name: e.detail.value });
  },

  // 密码输入监听
  onPasswordInput(e:any) {
    this.setData({ password: e.detail.value });
  },
  formSubmit(e:any){
    // if('password' in e.detail.value)
    // {

    //   if (!(this.data.name === '18235121258' && this.data.password === '123456')) {
    //     wx.showToast({ title: '账号或密码错误', icon: 'none' });
    //     this.formReset()
    //     return;
    //   }
    // }else if('code' in e.detail.value)
    // {
    //   console.log("code登录")
    // }
    wx.switchTab({
      url: '/pages/shouxie/shouxie',  
    });
    wx.showToast({
      title: '登录成功',
      icon: 'none',      // 不显示默认图标
      duration: 10000,    // 1秒后自动关闭（单位：毫秒）[1,5](@ref)
      mask: false        // 允许用户点击其他区域（默认值）
    });
  },
  handleRegister(){
    wx.navigateTo({
      url: '/pages/register/register',
      success: () => console.log('跳转成功'),
      fail: (err) => console.error('跳转失败', err)
    });
  },
  formReset(){
    this.setData({
      name: '',
      password: ''
    });
  },
  handleAuthTap(){
    this.setData({
     verifyCode:!this.data.verifyCode
    });

  },
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
      }else if (type === 'code') {
        this.setData({
          isFocused3: true ,
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
      }else if (type === 'code') {
        this.setData({
          isFocused3: false ,
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