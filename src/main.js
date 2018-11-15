// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
const service = axios.create({
  // baseURL: '//cspg.ajutu.com/api'
  baseURL: '//127.0.0.1:3100/'
})
service.interceptors.response.use(response => {
  // console.log(response)
  if (response.status === 200) {
    let rs = response.data
    if (rs.code === 401) {
      ElementUI.MessageBox.alert('登录信息已过期，请重新登录', '提示', {
        confirmButtonText: '确定',
        type: 'warning',
        showClose: false
      }).then(action => {
        router.push('login')
      })
    } else if (rs.code > 10000) {
      // 约定code大于10000会不返回成功直接提示报错信息
      ElementUI.Message.error(rs.msg)
    } else {
      return rs
    }
  } else {
    return {
      code: -1,
      msg: '网络错误'
    }
  }
  return Promise.reject(response.data)
})
let token = localStorage.getItem('token')
if (token) {
  service.defaults.headers.token = token
}

Vue.prototype.$http = service

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
