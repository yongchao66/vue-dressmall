import {
  ADD_TO_CART,
  ADD_COUNTER,
  ADD,
  SUB,
  DEL,
  DEL_ALL
} from './mutations_types.js'

export default {
  addCart(context, info) {
    //查看是否添加过
    const oldInfo = context.state.cartlist.find(item => item.id === info.id)

    //如果添加过数量就加1,否则添加新的
    if (oldInfo) {
      context.commit(ADD_COUNTER, oldInfo)
    } else {
      context.commit(ADD_TO_CART, info)
    }
  },
  
  // 增加某个商品的数量
  add(context, id) {
    const index = context.state.cartlist.findIndex( item => item.id === id )
    const info = context.state.cartlist[index]
        context.commit(ADD, info)
  },

  // 减少某个商品的数量
  sub(context, id) {
    const index = context.state.cartlist.findIndex( item => item.id === id )
    const info = context.state.cartlist[index]
        context.commit(SUB, info)
  },
  
  //删除单个或多个商品
  delClick(context, id) {
    let index = context.state.cartlist.findIndex( item => item.id === id)
    context.commit(DEL, index)
  },
  
  // 删除全部商品
  delAllClick(context, height) {
    context.commit(DEL_ALL, height)
  }
}
