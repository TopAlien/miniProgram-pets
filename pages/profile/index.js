// pages/profile/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lineTab:[
      {
        id: 0,
        url:'../../assets/profile/dog.png',
        link:'/pages/profile/adopt/index',
        text:'领养'
      },
      {
        id: 1,
        url: '../../assets/profile/pets.png',
        link: '/pages/profile/foster/index',
        text: '寄养'
      },
      {
        id: 2,
        url: '../../assets/profile/service.png',
        link: '/pages/profile/service/index',
        text: '服务'
      },
      {
        id: 3,
        url: '../../assets/profile/collection.png',
        link: '/pages/profile/collection/index',
        text: '收藏'
      },
      {
        id: 4,
        url: '../../assets/profile/setting.png',
        link: '/pages/profile/setting/index',
        text: '设置'
      }
    ]
  },
  checkTab(event){
    let active = event.target.dataset.activeid
    wx.navigateTo({
      url: this.data.lineTab[active].link
    })
  }
})