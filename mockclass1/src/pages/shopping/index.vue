<template>
  <div>
    <div class="header">
      <view class="van-hairline--bottom"></view>
    </div>
    <van-checkbox-group :value="result" >
      <van-checkbox v-for="(item, index) in Cart_list" :key="index" :name="item" catch:tap="onChange">
          <div class="Goods">           
                <div class="Goods_image">
                    <img :src="item.classdetali_img" alt />
                </div>
                <div class="Good_detail">
                    <div class="Good_title">
                    <view class="van-multi-ellipsis--l2">{{item.classdetali_title}}</view>
                    </div>
                    <div class="Good_Situation">
                    <div class="Good_price">￥{{item.classdetali_nowprice}}</div>
                    <div class="Good_Category">{{item.classdetali_sort}}</div>
                    </div>
                </div>
            </div>
      </van-checkbox>
    </van-checkbox-group>
    <!-- <van-checkbox-group :value="result" @change="check_onChange">
      <van-checkbox
        v-for="item in Cart_list "
        :key="item"
        :name="item"
        custom-class="custom_class"
        icon-class="icon_class1"
      >
        <div class="Goods">
          <div class="Goods_image">
            <img :src="item.classdetali_img" alt />
          </div>
          <div class="Good_detail">
            <div class="Good_title">
              <view class="van-multi-ellipsis--l2">{{item.classdetali_title}}</view>
            </div>
            <div class="Good_Situation">
              <div class="Good_price">￥{{item.classdetali_nowprice}}</div>
              <div class="Good_Category">{{item.classdetali_sort}}</div>
            </div>
          </div>
        </div>
      </van-checkbox>
    </van-checkbox-group> -->
    <!-- <checkbox-group @change="checkboxChange">
        <label class="checkbox" v-for="item in Cart_list" :key="item">
            <checkbox :value="item.name" :checked="item.checked" class="checkbox"/>
            <div class="Goods">           
                <div class="Goods_image">
                    <img :src="item.classdetali_img" alt />
                </div>
                <div class="Good_detail">
                    <div class="Good_title">
                    <view class="van-multi-ellipsis--l2">{{item.classdetali_title}}</view>
                    </div>
                    <div class="Good_Situation">
                    <div class="Good_price">￥{{item.classdetali_nowprice}}</div>
                    <div class="Good_Category">{{item.classdetali_sort}}</div>
                    </div>
                </div>
            </div>
        </label>
    </checkbox-group> -->
    <!-- <div>
        <radio-group class="radio-group" @change="radioChange">
        <label class="radio" v-for="(item, index) in items" :key="item.name">
            <radio :value="item.name" :checked="item.checked"/> 
            {{item.name}} -->
            <!-- <div class="Goods">           
                <div class="Goods_image">
                    <img :src="item.classdetali_img" alt />
                </div>
                <div class="Good_detail">
                    <div class="Good_title">
                    <view class="van-multi-ellipsis--l2">{{item.classdetali_title}}</view>
                    </div>
                    <div class="Good_Situation">
                    <div class="Good_price">￥{{item.classdetali_nowprice}}</div>
                    <div class="Good_Category">{{item.classdetali_sort}}</div>
                    </div>
                </div>
            </div> -->
        <!-- </label>
        </radio-group>
    </div> -->
    <!-- <van-checkbox-group :value="result" @change="onChange">
        <van-cell-group >
            <van-cell
            v-for=" item in list "
            :key="item"
            :title="item"
            value-class="value-class"
            clickable
            data-index="index"
            @click="toggle"
            >
            <van-checkbox catch:tap="noop" :class="index" :name="item " />
            </van-cell>
        </van-cell-group>
    </van-checkbox-group> -->
    <van-submit-bar
      :price="AllPrice"
      button-text="提交订单"
      @submit="onClickButton"
      bar-class="bar_class"
    >
      <van-tag type="primary">
        <van-radio-group :value="radio" @change="all_onChange">
          <van-radio name="1">全选</van-radio>
        </van-radio-group>
      </van-tag>
    </van-submit-bar>
  </div>
</template>

<script>
import fly from "@/utils/fly";
export default {
  data() {
    return {
       list: ['a', 'b', 'c'],
       result: ['a', 'b'],
       radio: "1",
       Cart_list: [],
    //    items: [
    //     {name: 'USA', value: '美国'},
    //     {name: 'CHN', value: '中国', checked: 'true'},
    //     {name: 'BRA', value: '巴西'},
    //     {name: 'JPN', value: '日本'},
    //     {name: 'ENG', value: '英国'},
    //     {name: 'TUR', value: '法国'}
    //   ]
    };
  },
  computed: {
    AllPrice() {
      return 0;
    }
  },
  method: {
    // radioChange (e) {
    //   console.log('radio发生change事件，携带value值为：', e.target.value)
    // },
    onChange(event) {
        console.log(event)
        // this.setData({
        // result: event.detail
        // });
    },
    noop() {},
    toggle(event) {
      const { index } = event.currentTarget.dataset;
      const checkbox = this.selectComponent(`.checkboxes-${index}`);
      checkbox.toggle();
    },
    all_onChange(event) {
      console.log("All_onchange");
    }
  },

  onLoad() {
  },
  onShow() {
    console.log("onShow");
    fly
      .get("classdetali")
      .then(res => {
        this.Cart_list = [];
        let classdetali = res.data.data.Class_Detali;
        for (let i = 0; i < this.$store.state.cart.class_id.length; i++) {
          let classdetaliFilter = classdetali.filter(
            item => item.class_id == this.$store.state.cart.class_id[i]
          );
          if (classdetaliFilter.length > 0) {
            this.Cart_list.push(...classdetaliFilter);
          }
        }
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>
<style>
.van-hairline--bottom {
  padding-bottom: 20px;
}
.van-checkbox__icon-wrap {
  padding-top: 27px !important;
  padding-left: 8px !important;
}
.bar_class {
  padding-left: 17px;
}
.value-class {
  flex: none !important;
}
</style>

<style scoped>
.Goods {
  height: 72px;
  display: flex;
}
.Goods_image img {
  width: 108px;
  height: 72px;
}
.Good_detail {
  margin: 11px 27px 0 14px;
}
.Good_detail .Good_title {
  font-size: 16px;
}
.Good_Situation {
  display: flex;
}
.Good_price {
  font-size: 11px;
  color: #f34646;
}
.Good_Category {
  margin-left: 12px;
  font-size: 11px;
  color: #a7abae;
}
</style>
