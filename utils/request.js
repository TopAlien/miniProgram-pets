let baseUrl = ''
let token  = ""
const request = (config) =>{
  try {
    var value = wx.getStorageSync('token')
    if (value) {
      token = value
    }
  } catch (e) {
   console.log(e)
  }
  return new Promise(( resolve, reject )=>{
    wx.request({
      url: baseUrl+config.url,
      data: config.data,
      header:  { token: token || ''},
      method: config.method || 'POST',
      success: resolve,
      fail: reject,
      complete(res){
        // 身份过期拦截
        const { code } = res.data
        if(code === 10004){
          try { wx.removeStorageSync('token') } catch (e) { }
          wx.reLaunch({
            url: '/pages/login/login'
          })
        }
      }
    })
  })
}

module.exports = { request }