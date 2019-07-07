<template>
    <div>
        <!-- 课程详情 -->
        <div class="classdetali_detali" v-for="item in classdetali" :key="item">
            <div class="classdetali_sort">
                {{item.classdetali_sort}}
            </div>
            <div class="classdetali_title">
                <strong>{{item.classdetali_title}}</strong>
            </div>
            <div class="classdetali_describe">
                {{item.classdetali_describe}}
            </div>
            <div class="classdetali_price">
                <div class="price">
                    <div class="classdetali_nowprice">{{item.classdetali_nowprice}}</div>
                    <div class="classdetali_oldprice">{{item.classdetali_oldprice}}</div>
                </div>           
                <div class="Try_watch" @click="Try_watch">
                    <div class="title">试看</div>
                    <div class="button">
                        <van-icon name="play-circle-o"  color="#d48e05" size="25px"/>
                    </div>
                </div>
            </div>
            <div class="classdetali_more">
                <div class="classdetali_Parameters" @click="show_Parameters">
                    <div class="classdetali_Parameters__title">参数</div>
                    <div class="classdetali_Parameters__content">{{item.classdetali_grade}} {{item.classdetali_time}}小时 {{item.classdetali_ppoplenumber}}人学 {{item.classdetali_goodPraise}}好评度</div>
                    <div class="more">
                        <van-icon name="ellipsis"  size="12px"/>
                    </div>
                </div>
                <!-- 弹出层 -->
                <van-popup 
                :show="classdetali_Parameters_show"
                 @close="classdetali_Parameters_onClose"
                 position="bottom"
                 custom-style="classdetaliParameters_show_popup"
                 >
                 <div class="classdetaliParameters_show">
                     <div class="classdetaliParameters_show_header">
                        <div class="classdetaliParameters_show_title">课程信息</div>
                        <div class="box_close">
                            <van-icon name="cross" size="15" @click="classdetali_Parameters_onClose"/>
                        </div>
                     </div>
                     <div class="classdetaliParameters_show_list">
                         <div class="classdetaliParameters_show_ls">
                             <div class="classdetaliParameters_show_name"> 难度 </div>
                             <div class="classdetaliParameters_show_content">{{item.classdetali_grade}}</div>                        
                         </div>
                         <div class="classdetaliParameters_show_ls">
                             <div class="classdetaliParameters_show_name"> 时长 </div>
                             <div class="classdetaliParameters_show_content">{{item.classdetali_time}}小时</div>                        
                         </div>
                         <div class="classdetaliParameters_show_ls">
                             <div class="classdetaliParameters_show_name"> 学习人数 </div>
                             <div class="classdetaliParameters_show_content">{{item.classdetali_ppoplenumber}}人学</div>                        
                         </div>
                         <div class="classdetaliParameters_show_ls">
                             <div class="classdetaliParameters_show_name"> 好评度 </div>
                             <div class="classdetaliParameters_show_content">{{item.classdetali_goodPraise}}好评度</div>                        
                         </div>
                     </div>
                     <div class="classdetaliParameters_show_list">
                         <div class="classdetaliParameters_show_ls">
                             <div class="classdetaliParameters_show_name"> 难度 </div>
                             <div class="classdetaliParameters_show_content">{{item.classdetali_grade}}</div>                        
                         </div>
                         <div class="classdetaliParameters_show_ls">
                             <div class="classdetaliParameters_show_name"> 时长 </div>
                             <div class="classdetaliParameters_show_content">{{item.classdetali_time}}小时</div>                        
                         </div>
                         <div class="classdetaliParameters_show_ls">
                             <div class="classdetaliParameters_show_name"> 学习人数 </div>
                             <div class="classdetaliParameters_show_content">{{item.classdetali_ppoplenumber}}人学</div>                        
                         </div>
                         <div class="classdetaliParameters_show_ls">
                             <div class="classdetaliParameters_show_name"> 好评度 </div>
                             <div class="classdetaliParameters_show_content">{{item.classdetali_goodPraise}}好评度</div>                        
                         </div>
                     </div>                     
                     <div class="closs_button" @click="classdetali_Parameters_onClose" >
                         完成
                     </div>
                 </div>
                 </van-popup>
                <view class="van-hairline--top"></view>
                <div class="classdetali_Parameters" @click="show_server">
                    <div class="classdetali_Parameters__title">服务</div>
                    <div class="classdetali_Parameters__content">问答专区 源码开发 教辅材料 Git代码存储</div>
                    <div class="more">
                        <van-icon name="ellipsis"  size="12px"/>
                    </div>
                </div>
            </div>        
        </div>
        <div class="myVideo_Box" :class = "{ show : isVideoShow}">
                <span class="close_myVideo" @click="close_myVideo">关闭</span>
                <video id="myVideo" src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400" enable-danmu danmu-btn controls></video>
        </div>
         <!-- 购物栏 -->
         <div class="GooosAction">
             <div class="Wapper">
                 <div class="icon">
                     <van-icon name="chat"  color="#d9dde1" size="25px"/>
                 </div>
                 <div class="name">咨询</div>
             </div>
             <div class="Wapper">
                 <div class="icon" @click="isstar">
                     <van-icon name="star"
                        :color = "starcolor"
                        size = "25px"/>
                 </div>
                 <div class="name">收藏</div>
             </div>
             <div class="right">
                <div class="button_Bar">
                    <div class="addToCart" @click="addToCart">加入购物车</div>
                    <div class="nowBuy">立即购买</div>
                </div>
             </div>          
         </div>
    </div>
</template>

<script>
import fly from '@/utils/fly'
export default {
    name: 'index',
    data (){
        return {
            classdetali_Parameters_show: false,
            classdetali:[],
            star: false,
            isVideoShow: false,
            // videoContext: []
        }
    },
    methods: {
        show_Parameters() {
            this.classdetali_Parameters_show = true
        },
        classdetali_Parameters_onClose(){
            this.classdetali_Parameters_show = false
        },
        //试看
        Try_watch(){
            this.isVideoShow = !this.isVideoShow
        },
        close_myVideo(){
            this.isVideoShow = false;
            console.log("close_myVideo", this.videoContext)
            this.videoContext.stop();
        },
        //收藏操作
        isstar(){
            let collect_Class_id = this.$store.state.collect.class_id 
            let isStar =  collect_Class_id.some(item => {
                return item == this.classdetali[0].class_id
            })
            if (!isStar){ 
                 this.$store.commit('addStar',this.classdetali[0].class_id);
                 wx.showToast({
                    title: '已收藏至我的实战', 
                    icon: 'none',
                    duration: 2000
                })
            }else{
                 this.$store.commit('reduceStar',this.classdetali[0].class_id );
                 wx.showToast({
                    title: '已取消收藏', 
                    icon: 'none',
                    duration: 2000
                })
            }   

            this.star = !isStar;      
        },
        //加入购物车
        addToCart(){
            console.log(this.$store.state.cart.class_id)
            let cart_Class_id = this.$store.state.cart.class_id 
            let iscart =  cart_Class_id.some(item => {
                return item == this.classdetali[0].class_id
            })
            if(!iscart){
                this.$store.commit('addCart',this.classdetali[0].class_id);
                wx.showToast({
                    title: '加入购物车成功', 
                    icon: 'none',
                    duration: 2000
                })
            }else {
                wx.showToast({
                    title: '商品已在购物车内',
                    icon: 'none',
                    duration: 2000
                    })
            }
            console.log(this.$store.state.cart.class_id)
        }
    },
    computed:{ 
        count () {
            return this.$store.state.count
        },
        //计算属性变更元素颜色
        starcolor () {
            return this.star ? '#d48e05':'#d9dde1'
        }
    },
    onLoad (options) {
        fly.get('classdetali').then((res) => {
            let classdetali = res.data.data.Class_Detali;
            let classdetaliFilter = classdetali.filter(item => item.class_id == options.id)
            this.classdetali= classdetaliFilter;
        }).catch((e)=> {
            console.log(e);
        }) 
    },
    onReady (res) {
        this.videoContext = wx.createVideoContext('myVideo')
        console.log(this.videoContext)
    }
}
</script>
<style lang="stylus">
.van-popup--bottom
    border-top-left-radius 10px !important 
    border-top-right-radius 10px !important
    top 300px !important
</style>

<style lang="stylus" scoped>
.classdetali_detali
    margin 0 20px
    .classdetali_sort
        width 81px
        height 29px
        background-color #d48e05
        border-radius 14px
        font-size 13px
        line-height 29px
        text-align center
        color #fff
        margin-top 20px
    .classdetali_title
        font-size 29px
        color #2b333b
        margin-top 10px
    .classdetali_describe
        font-size 14px
        color #797e83
    .classdetali_price
        margin-top 16px
        display flex
        justify-content space-between
        .classdetali_nowprice
                font-size 19px
                color #d69412
        .classdetali_oldprice
                font-size 11px
                color #eaebec
                text-decoration line-through
    .Try_watch
        display flex
        .title
            color #d48e05
            font-size 12px
            line-height 25px
            margin-right 9px
    
    .classdetali_more
        margin-top 20px
        background-color #f3f5f7
        border-radius 15px
        .classdetali_Parameters
            line-height 17px
            padding 12px 
            display flex
            .classdetali_Parameters__title
                font-size 12px
                color #2c343c
                width 25px             
            .classdetali_Parameters__content
                width 213px
                margin-left 13px
                margin-right 42px
                font-size 11px
                color #70767c
    .classdetaliParameters_show
        margin auto 20px
        .classdetaliParameters_show_header
            display flex
            justify-content space-between
            border-bottom 2px solid #d79516
            .classdetaliParameters_show_title
                font-size 15px
                color #d79516
                line-height 54px
            .box_close
                margin-top 20px
        .classdetaliParameters_show_list
            .classdetaliParameters_show_ls
                display flex
                line-height 43px
                border-bottom 2px solid #e8eaed
                .classdetaliParameters_show_name
                    font-size 11px
                    color #535a60
                    width 84px
                .classdetaliParameters_show_content
                    font-size 11px
                    color #6d7378
        .closs_button
            text-align center
            line-height 35px
            background-color #d48e05
            color #fff
            border-radius 17px
            margin-bottom 20px
            font-size 16px
.myVideo_Box
        position fixed
        bottom 200px
        width 100%
        display none
.myVideo_Box.show
        display block
    #myVideo
        width 100%
    .close_myVideo
        position fixed
        right 0px
        z-index 10000
.GooosAction
    position fixed
    bottom 0
    height 60px
    background-color #fff
    width 100%
    display flex
    align-items center
    padding-left 12px
    .Wapper
        width 35px
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .name
            font-size 11px
    .right
        flex 1
        display flex
        justify-content center
        align-items center
        .button_Bar
            display flex
            width 246px
            .addToCart
                flex 1
                line-height 45px
                font-size 18px
                color #fff
                background-color #e5bb69
                display: flex
                justify-content: center
                align-items: center
                border-top-left-radius 23px
                border-bottom-left-radius 23px
            .nowBuy
                flex 1
                line-height 45px
                font-size 17px
                color #fff
                background-color #d48e05
                display flex
                justify-content center
                align-items center
                border-top-right-radius 23px
                border-bottom-right-radius 23px


        

</style>

