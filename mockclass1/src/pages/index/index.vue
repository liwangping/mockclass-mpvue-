<template>
    <div>
        <div class="home">
            <!-- 首页搜索框 -->
            <div class="home_search_box">
                <div class="home_search">毕设 React 面试</div>
            </div>      
             <!-- 首页导航栏 -->
            <div class="home_nav">
                <van-tabs 
                    animated               
                    swipeable 
                    line-width="17" 
                    border="false"
                    nav-class="home_nav_tabs"
                    >
                   <!-- 首页推荐分页 -->
                   <!-- 推荐页面轮播图 -->
                    <van-tab title="推荐">
                        <swiper class="swiper_rocommend" 
                            :indicator-dots="false"
                            :autoplay="true"
                            :interval="3000" 
                            :duration="1000" 
                            :previous-margin="25"
                            :next-margin="20"
                            :circular="true"
                            @change="changecurrentIndex"
                            >
                            <a v-for='(img, index) in imgUrls' :key="img" @click="ToClassDetali" :data-id="img.class_id" >
                                <swiper-item >
                                <image 
                                    :src="img.img" 
                                    class="slide-image" :class="{ active: currentIndex == index}" 
                                    />
                                </swiper-item>
                            </a>
                        </swiper>
                        <div class="combat_span">实战推荐</div>
                        <!-- 课程列表 -->
                        <div class="class_lists">
                            <div v-for="class_one in class_list" :key = "class_one">
                                <div class="class_ls" @click="ToClassDetali" :data-id="class_one.class_id">                    
                                    <div class="class_photo">
                                        <img :src="class_one.img" alt=""/>
                                        <!-- 好坑的一个地方。图片路径出现问题 -->
                                        <!-- <img src="../../../static/images/class_2.png" alt=""/> -->
                                    </div>
                                    <div class="class_detail">
                                            <div class="class_title">{{class_one.title}}</div>
                                            <div class="class_more">
                                                <div class="class_price">￥{{class_one.price}}</div>
                                                <div class="class_grade">{{class_one.grade}}</div>
                                                <div class="class_watch">
                                                    <div class="class_watch_icon">
                                                        <van-icon name="contact" size="12px" />
                                                    </div>
                                                    <div class="class_watch_number">&nbsp;{{class_one.watch_number}}</div>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </van-tab>
                    <!-- 首页实战分页 --> 
                    <van-tab title="实战">
                        <swiper class="Combat_scroll_list" 
                                :indicator-dots="false"
                                :autoplay="false"
                                :previous-margin="10"
                                :next-margin="10"
                                :display-multiple-items="3"
                                >
                                    <block v-for='classSortOne in classSortDetali' :key="classSortOne">
                                        <swiper-item>
                                            <div class="Combat">
                                                <div class="Combat_title">{{classSortOne.name}}</div>
                                                <div class="class_number">{{classSortOne.number}}门课</div>
                                            </div> 
                                        </swiper-item>
                                    </block>
                        </swiper>
                        <div class="class_lists">
                            <div v-for="class_one in class_list" :key = "class_one" @click="ToClassDetali" :data-id="class_one.class_id" >
                                <div class="class_ls" >                    
                                    <div class="class_photo">
                                        <img :src="class_one.img" alt=""/>
                                        <!-- 好坑的一个地方。图片路径出现问题 -->
                                        <!-- <img src="../../../static/images/class_2.png" alt=""/> -->
                                    </div>
                                    <div class="class_detail">
                                            <div class="class_title">{{class_one.title}}</div>
                                            <!-- <span>../../../static/images/class_2.png</span> -->
                                            <div class="class_more">
                                                <div class="class_price">￥{{class_one.price}}</div>
                                                <div class="class_grade">{{class_one.grade}}</div>
                                                <div class="class_watch">
                                                    <div class="class_watch_icon">
                                                        <van-icon name="contact" size="12px" />
                                                    </div>
                                                    <div class="class_watch_number">&nbsp;{{class_one.watch_number}}</div>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </van-tab>
                </van-tabs>   
            </div>   
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import fly from '@/utils/fly'
import getClassList from '@/utils/getClassList'
export default {
    name: 'index',
    data (){
        return {
            active: 1,
            imgUrls: [],
            class_list:[], 
            classSortDetali:[],
            currentIndex: 0,
            indicatorDots: false,
            autoplay: false,
            interval: 5000,
            duration: 1000
        }
    },
    methods: {
        onChange(event) {
        wx.showToast({
        title: `切换到标签 ${event.detail.index + 1}`,
        icon: 'none'
        });
        } ,
        ToClassDetali(e){
            console.log(e.mp.currentTarget.dataset);
            wx.navigateTo({
                 url: '/pages/class_detali/main?id='+e.mp.currentTarget.dataset.id
                  })
        },
        changecurrentIndex(e){
             this.currentIndex = e.mp.detail.current
            // console.log("11111111", e.mp.detail.current)
        }
    },
    onLoad () {
        fly.get('home').then((res) => {
            console.log(res)
            var class_list = res.data.data.Class_list;
            var recommend = res.data.data.recommend;
            var classSortDetali = res.data.data.classSortDetali;
            // console.log(class_list)
            this.imgUrls = recommend;
            this.class_list = class_list;
            this.classSortDetali = classSortDetali;            
            // console.log(classdetalis); 
        }).catch((e)=> {
            console.log(e)
        }) 
    },
    
    }
</script>

<style>
/* 对导航栏的样式进行设置 */
.home_nav_tabs{
    height: 72rpx !important;
}
/* 消去导航栏的上下边框 */
.van-hairline--top-bottom:after{
    border-width: 0 0 !important;
}

</style>

<style scoped>
    .home_search_box{
        display: flex;
        justify-content: center;
    }
    .home_search{
        border: 1px solid #d9dde1;
        border-radius: 100rpx;
        height: 69rpx;
        width: 660rpx;
        text-align: center;
        line-height: 69rpx;
        color: #d9dde1;
        font-size: 30rpx;
    }
    .swiper_rocommend{
        height:140px;
    }
   /* 轮播图样式 */
    .slide-image{
        position: absolute;
        height: 100px;
        margin-left: 5px;
        margin-top: 5px;
        margin-bottom: 5px;
        z-index: 5;
        opacity: 0.6;
        border-radius: 10px;
    } 
    .active{
        opacity: 1;
        margin-top: 0;
        z-index: 100;
        transition: all .2s ease-in 0s;
        height: 110px;
        border-radius: 12px;
    }
    /* 实战推荐标签 */
    .combat_span{
        text-align: left;
        font-size: 15px;
        margin-left: 15px;
    }
    /* 课程列表 */
    .class_ls{
        display: flex;
        margin-top: 10px;
    }
    .class_lists{
        margin: 8px 15px;
    }
    /* 课程图片 */
    .class_lists .class_photo img{
        height:68px;
        width: 103px;
    }
    .class_detail{
        margin-left: 13px;
        border-bottom: 1px solid #f8f8f9;
    }
    .class_detail .class_title{
        font-size: 16px;
    }
    .class_detail .class_more{
        display: flex;
        font-size: 10px;
        margin-top: 10px;
        color: #7e8389;
    }
    .class_detail .class_grade{
        margin-left: 13px;
    }
    .class_detail .class_watch{
        margin-left: 17px;
        display: flex;
    }
    .Combat_scroll_list{
        height:60px;
        margin-bottom: 20px;
    }
    /* .wrapper {
        width: 375px;
        height: 80px;
        overflow: hidden;
        z-index: 2000;
    }
    .wrapper ul{
        height: 96px;
        width: 100%;
        white-space: nowrap;
        overflow-x: scroll;
        padding: 0;
        margin: 0; 
    }
    .wrapper li {
        display: inline-block;
        
    } */
    .Combat{
        position: relative;
        display:block;
        margin-right: 10px;
        font-size: 20px;
        border-radius: 10px;
        padding: 11px 8px;
        text-align: center;
        background-color: #fbf3e6;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%)
    }
    .Combat .Combat_title{
        width: 100%;
        font-size: 14px;
        color:#e3b357;
        word-break:keep-all;     
        white-space:nowrap; 
    }
    .Combat .class_number{
        font-size: 9px;
        color: #f0d7a7;
    }
</style>
