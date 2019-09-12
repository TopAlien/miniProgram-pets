import { request } from '../../utils/request.js'

const fetchList = (data) => {
  return request({
    url: '/user/getUserAccountDetails',
    data
  })
}

module.exports = {
  fetchList
}
