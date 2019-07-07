// 修改状态
// import * as types from './mutation-types'

// const matations ={
//     /**
//      * state:当前状态树
//      * v: 提交matations时传的参数
//      */
//     [tyoes.SET_OPEN_ID] (state, v) {
//         state.openId = v;
//     }
// }


const mutations = {
    add(state) {
        state.count++;
    },
    reduce(state){
        state.count--;
    },
    addStar(state, class_id){
        state.collect.class_id.push(class_id)
    },
    reduceStar(state, class_id){
        state.collect.class_id = state.collect.class_id.filter(item => item != class_id)
    },
    addCart(state, class_id){
        state.cart.class_id.push(class_id)
    },
    reduceCart(state, class_id){
        state.cart.class_id = state.cart.class_id.filter(item => item != class_id)
    },

}

export default mutations