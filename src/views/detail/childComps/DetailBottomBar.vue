<template>
  <div class="detail-bottom-bar align-items">
    <div class="tabbar-left ui-flex flex">
      <tab-bar>
        <i slot="item-icon" class="icon iconfont icon-shop"></i>
        <span slot="item-title" class="title">店铺</span>
      </tab-bar>
      <tab-bar>
        <i slot="item-icon" class="icon active-icon iconfont icon-message"></i>
        <span slot="item-title" class="title">客服</span>
      </tab-bar>
      <tab-bar>
        <i slot="item-icon" class="icon iconfont icon-fav"></i>
        <span slot="item-title" class="title">收藏</span>
      </tab-bar>
    </div>
    <div class="tabbar-right ui-flex">
      <div @click="addClick" class="detail-but but-cart">
        <span class="cart">加入购物车</span>
      </div>
      <div class="detail-but but-buy">
        <span class="buy">立即购买</span>
      </div>
    </div>
  </div>
</template>

<script>
  import TabBar from 'components/common/tabbar/Tabbar.vue'

  export default {
    name: "DetailBottomBar",
    components: {
      TabBar
    },
    methods: {
      addClick() {
        this.$emit('addcart')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .detail-bottom-bar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    height: 49px;
    background-color: #f6f6f6;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
  }

  .icon {
    font-size: 24px;
    color: #999;

    &.active-icon {
      color: #09c;
    }
  }

  .tabbar-right {
    padding-right: 10px;
  }

  .tabbar-right .detail-but {
    width: 85px;
    font-size: 14px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    color: #fff;

    &.but-cart {
      background: linear-gradient(to right, #ffc500, #ff9402);
      border-radius: 18px 0 0 18px;
    }

    &.but-buy {
      background: linear-gradient(to right, #ff7a00, #fe560a);
      border-radius: 0 18px 18px 0;
    }
  }
</style>
