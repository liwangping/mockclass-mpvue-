<template>
    <div>
       <div class="mine_header">
           <div class="person_image">
               <img src="../../../static/images/mine_image.png" alt="">
           </div>
           <div class="person_more">
                <div class="person_name">
                    <strong>慕UI0338532</strong>
                </div>
                <div class="person_detail">
                    <span class="title">学习时长</span>
                    <span class="content">98小时41分</span>
                    <span class="title">经验</span>
                    <span class="content">3644</span>
                </div>
           </div>      
       </div>
       <div class="headline"></div>
       <div class="mine_lists">
           <div class="list">
               <div class="icon"></div>
               <div class="title">我的实战</div>
           </div>        
           <div class="list">
               <div class="icon"></div>
               <div class="title">我的订单</div>
           </div>        
           <div class="list">
               <div class="icon"></div>
               <div class="title">优惠券</div>
           </div>        
           <div class="list">
               <div class="icon"></div>
               <div class="title">
                   客服/反馈
                    <span class="time">周一至周五 09:00-19:00</span>
               </div>
           </div>        
       </div>
    </div> 
</template>

<script>
// import { Button } from 'vant';
export default {

}
</script>

<style scoped>
.mine_header{
    display: flex;
}
.person_image{
    width: 62px;
    height: 62px;
    margin-left: 20px;
}
.person_image img{
    width: 100%;
    height: 100%;
}
.person_name{
    font-size: 20px;
}
.person_more{
    padding: 10px;
}
.person_detail .title{
    font-size: 11px;
    line-height: 100%;
    color: #9ea2a6;
    margin-right: 6px;
}
.person_detail .content{
    font-size: 11px;
    line-height: 100%;
    color: #70757b;
    margin-right: 20px;
}
.headline{
    height: 9px;
    background-color: #f3f5f7;
    border-top: 2px solid #dce2e7;
}
.list{
    height: 60px;
    display: flex;
}
.list .icon{
    width: 60px;
}
.list .title{
    width: 100%;
    border-bottom: 1px solid #e6e8eb;
    font-size: 14px;
    color:#50595e;
    line-height: 60px;
}
.time{
    color: #c4c8cb;
    float: right;
    margin-right: 31px;
    font-size: 13px;
}

</style>
