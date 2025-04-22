/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
    showTabBar: boolean  // 添加这行
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}