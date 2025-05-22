// custom-tab-bar/index.ts
Component({
  data: {
    showTabBar: true,
    selected: 0,
    color: "#2c2c2c",
    selectedColor: "#1296db",
    list: [{
      pagePath: "/pages/shouxie/shouxie",
      iconPath: "/image/message-comments.png",
      selectedIconPath: "/image/message-comments-hl.png",
      text: "消息"
    }, {
      pagePath: "/pages/lianxiren/lianxiren",
      iconPath: "/image/customer-group.png",
      selectedIconPath: "/image/customer-group-hl.png",
      text: "联系人"
    },
    {
        pagePath: "/pages/faxian/faxian",
        iconPath: "/image/global-trade-fill.png",
        selectedIconPath: "/image/global-trade-fill-hl.png",
        text: "发现"
      },
    {
      pagePath: "/pages/wode/wode",
      iconPath: "/image/customer-bussinessman.png",
      selectedIconPath: "/image/customer-bussinessman-hl.png",
      text: "我的"
    }
  ]
  },
  attached() {
  },
  methods: {
    switchTab(e:any) {
      const data = e.currentTarget.dataset
      const url = data.path
      console.log(data)
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})