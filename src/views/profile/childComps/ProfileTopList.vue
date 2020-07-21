<template>
  <div class="profile-top-list align-items">
    <tab-bar v-for="(item, index) in list" :key='index'>
      <i slot="item-icon" class="iconfont" :class="item.icon" :style="{color: item.color}"></i>
      <span slot="item-title" class="title">{{item.title}}</span>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from 'components/common/tabbar/Tabbar'
  export default {
    name: 'ProfileTopList',
    components: {
      TabBar
    },
    data() {
      return {
        list: [{
            icon: 'icon-woguanzhudetougu',
            title: '关注店铺',
            color: '#f69'
          },
          {
            icon: 'icon-xiaoxiguanli',
            title: '消息',
            color: '#09c'
          },
          {
            icon: 'icon-favicon',
            title: '收藏夹',
            color: '#f90'
          },
          {
            icon: 'icon-zuji',
            title: '足迹',
            color: '#6c9'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .profile-top-list {
    height: 49px;
  }

  i {
    font-size: 24px;
  }

  .title {
    font-size: 12px;
  }
</style>
