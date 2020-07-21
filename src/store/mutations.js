import * as types from './mutations_types'
// import {
//   ADD_TO_CART,
//   ADD_COUNTER,
//   ADD,
//   SUB,
//   DEL
// } from './mutations_types.js'

export default {
  [types.ADD_COUNTER](state, oldInfo) {
    oldInfo.count ++
    localStorage.setItem('cartlist', JSON.stringify(state.cartlist))
  },
  [types.ADD_TO_CART](state, info) {
    info.count = 1
    info.checked = false
    state.cartlist.push(info)
    localStorage.setItem('cartlist', JSON.stringify(state.cartlist))
  },

  // 增加某个商品的数量
  [types.ADD](state, info) {
    info.count ++
    localStorage.setItem('cartlist', JSON.stringify(state.cartlist))
  },

  // 减少某个商品的数量
  [types.SUB](state, info) {
    info.count --
    localStorage.setItem('cartlist', JSON.stringify(state.cartlist))
  },

  //删除单个或多个商品
  [types.DEL](state, index) {
    state.cartlist.splice(index, 1)
    localStorage.setItem('cartlist', JSON.stringify(state.cartlist))
  },

  // 删除全部商品
  [types.DEL_ALL](state, height) {
    state.cartlist.splice(0, height)
    localStorage.removeItem('cartlist')
  }
}
