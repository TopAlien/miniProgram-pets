//index.js
Page({
  data: {
    activeName: '0',
    cardCur: 0,
    swiperList: [
      {
      id: 0,
      type: 'image',
      url: '../../assets/home/banner.png'
    }, 
    {
      id: 1,
      type: 'image',
      url: '../../assets/home/banner.png',
    }, 
    {
      id: 2,
      type: 'image',
      url: '../../assets/home/banner.png'
    }, 
    {
      id: 3,
      type: 'image',
      url: '../../assets/home/banner.png'
    }
    ],
    cardList:[
      {
        id: 0,
        url: '../../assets/home/gift.png',
        link:"/pages/home/gift/index",
        text:"宠物福利"
      },
      {
        id: 1,
        url: '../../assets/home/star.png',
        link: "/pages/home/star/index",
        text: "推荐好物"
      },
      {
        id: 2,
        url: '../../assets/home/tag.png',
        link: "/pages/home/hot/index",
        text: "热门活动"
      }, 
      {
        id: 3,
        url: '../../assets/home/news.png',
        link: "/pages/home/news/index",
        text: "宠物百科"
      }
    ],
    weStory:[
      {
        id: 0,
        url: '../../assets/home/miao2.png',
        text:'那年秋天一起去旅 行',
        comment: 2000,
        like:3320
      },
      {
        id: 1,
        url: '../../assets/home/miao1.png',
        text: '小猫太挑食了，什 么都不爱吃',
        comment: 2000,
        like: 3320
      },
      {
        id: 2,
        url: '../../assets/home/miao2.png',
        text: '那年秋天一起去旅 行',
        comment: 2000,
        like: 3320
      },
      {
        id: 3,
        url: '../../assets/home/miao1.png',
        text: '小猫太挑食了，什么都不爱吃小猫太挑食了，什 么都不爱吃小猫太挑食了，什 么都不爱吃小猫太挑食了，什 么都不爱吃',
        comment: 2000,
        like: 3320
      }
    ]
  },
  onLoad() {
    this.towerSwiper('swiperList');
    // 初始化towerSwiper 传已有的数组名即可
  },
  cardLink(event){
    let targetId = event.target.dataset.targetid
    wx.navigateTo({
      url: this.data.cardList[targetId].link
    })
  },
  onChange(event) {
    this.setData({
      activeName: event.detail
    });
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
  }
})
