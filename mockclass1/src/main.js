import Vue from 'vue';
import App from './App';
import store from './store/index';
import "../static/vant-weapp/common/index.wxss"
// import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$store = store
// 绑定vue的原型链上，让每个vue组件都可以拿到

Vue.prototype.getList = function () {
  wx.showLoading({
    title: '加载中',
})
this.$http.get('sell#!method=get').then((res)=>{
   console.log(res)
    wx.hideLoading();
  }).catch((e)=>{
  console.log(e)
})
}

//初始化才能使用云开发
// wx.cloud.init({
//     traceUser: true
//   })

const app = new Vue(App)
app.$mount()
