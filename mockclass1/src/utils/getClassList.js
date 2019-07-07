import Vue from 'vue';
import fly from './fly';


function getClassList(){
    wx.showLoading({
        title: '加载中',
    })
    fly.get('classdetali').then((res) => {
        console.log('get:',res)
        // var classdetali = res.data.data.ClassDetali
        // console.log(Vue.prototype.classdetali)
        // return (Vue.prototype.classdetali)
        Vue.prototype.$res = res;
        wx.hideLoading();
        // return classdetali;
        console.log("完成加载")
        return res;
    })
    .catch((e) => {
        console.log("catch:", e) 
    })
}


export default getClassList;
