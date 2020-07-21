<template>
	<div class="cart-nav-bar">
    <nav-bar navbarColor='#666'>
      <i slot="left" class="iconfont icon-fanhui" @click="backClick"></i>
      <div slot='center'>购物车<span v-if="cartcount">({{cartcount}})</span></div>
      <div slot='right' class="right" v-if="cartcount" @click="changeClick">
        <span v-if="isShow">编辑</span>
        <span v-else>完成</span>
      </div>
    </nav-bar>
	</div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  import { mapGetters } from 'vuex'

	export default {
		name: 'CartNavBar',
    components: {
      NavBar
    },
    props: {
      isShow: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      ...mapGetters(['cartcount'])
    },
    methods: {
      backClick() {
        this.$router.back()
      },
      changeClick() {
        this.$emit('changeclick')
      }
    }
	}
</script>

<style scoped>
  .cart-nav-bar {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
  }

  i {
    font-size: 24px;
  }
</style>
