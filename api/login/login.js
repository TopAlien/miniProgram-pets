import { request } from '../../utils/request.js'

const login = (data) =>{
  return request({
    url:'/login/login',
    data
  })
}

module.exports = {
  login
}
