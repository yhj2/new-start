// app.ts
App<IAppOption>({
  globalData: {
    showTabBar:false
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    console.log("logs:",logs)

    // 登录
    wx.login({
      success: res => {
        console.log("res.code:",res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },
})