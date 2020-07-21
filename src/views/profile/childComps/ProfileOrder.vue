<template>
	<div class="profile-order">
    <div class="order-top justify">
      <span class="title">我的订单</span>
      <span class="examine">查看全部订单 <i class="iconfont icon-right"></i></span>
    </div>
    <ul class="order-list align-items">
      <li v-for="(item, index) in list" :key='index' class="order-item flex">
        <div class="item-icon">
          <i class="iconfont" :class="item.icon"></i>
        </div>
        <div class="item-title">
          <span>{{item.title}}</span>
        </div>
      </li>
    </ul>
	</div>
</template>

<script>
	export default {
		name: 'ProfileOrder',
    data() {
      return {
        list: [
          {
            icon: 'icon-daifukuan',
            title: '待付款'
          },
          {
            icon: 'icon-daifahuo',
            title: '待发货'
          },
          {
            icon: 'icon-icon_daishouhuo2x',
            title: '待收货'
          },
          {
            icon: 'icon-pingjia',
            title: '评价'
          },
          {
            icon: 'icon-tuihuotuikuan-',
            title: '退款/售后'
          }
        ]
      }
    }
	}
</script>

<style lang="scss" scoped>
  .profile-order {
    margin: 8px 12px 0;
    background-color: #fff;
    border-radius: 10px;
  }

  .order-top {
    padding: 0 12px;
    height: 36px;
    line-height: 36px;
    border-bottom: 1px solid #ccc;

    .title {
      font-size: 14px;
      color: #000;
    }

    .examine {
      font-size: 12px;
      color: #999;

      i {
        font-size: 18px;
      }
    }
  }

  .order-item {
    padding: 10px 0;
    text-align: center;

    .item-icon i {
      font-size: 24px;
      color: #999;
    }

    .item-title {
      font-size: 12px;
    }
  }
</style>
