<template>
  <nav-bar navbarColor='#666'>
    <i slot="left" class="iconfont icon-fanhui" @click="backClick"></i>
    <div slot='center' class="ui-flex">
      <span v-for="(item, index) in titleInfo"
            :key='index'
            @click="itemClick(index)"
            class="flex"
            :class="{'active' : index === currentIndex}">{{item}}</span>
    </div>
    <i slot="right" class="iconfont icon-Cart" @click="cartClick"></i>
  </nav-bar>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: 'DetailNavBar',
    components: {
      NavBar
    },
    props: {
      currentIndex: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        titleInfo: ['商品', '评论', '详情', '推荐'],
      }
    },
    methods: {
      itemClick(index) {
        this.$emit('itemclick', index)
      },
      backClick() {
        this.$router.back()
      },
      cartClick() {
        this.$router.replace('/cart')
      }
    }
	}
</script>

<style scoped>
  .active {
    color: #f69;
  }

  i {
    font-size: 24px;
  }
</style>
