import Vue from 'vue';
var Fly = require("flyio/dist/npm/wx");
//微信小程序引入
var fly = new Fly();
// 添加拦截器
fly.interceptors.request.use((config, promise) => {
    config.headers["X-Tag"] = "flyio";
    //给所有请求添加实例级自定义header
    return config;
})
fly.config.baseURL="https://www.easy-mock.com/mock/5d1b54b05594fb3177097d77/class";
Vue.prototype.$http = fly
export default fly 