<template>
  <div class="cart">
    <cart-nav-bar :is-show='isShow' @changeclick='changeClick' />
    <cart-logo v-if="!cartcount" />
    <div v-else class="cart-shop">
      <cart-list :cartlist='cartlist' />
      <cart-footer :is-show='isShow' />
    </div>
  </div>
</template>

<script>
  import CartNavBar from './childComps/CartNavBar'
  import CartLogo from './childComps/CartLogo'
  import CartList from './childComps/CartList'
  import CartFooter from './childComps/CartFooter'

  import { mapGetters } from 'vuex'

  export default {
    name: "Cart",
    components: {
      CartNavBar,
      CartLogo,
      CartList,
      CartFooter
    },
    data() {
      return {
        isShow: true
      }
    },
    computed: {
      ...mapGetters(['cartlist','cartcount'])
    },
    methods: {
      changeClick() {
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style scoped>
  .cart-shop {
    margin: 0 auto;
    max-width: 768px;
    min-height: calc(100vh - 49px);
    background-color: #f2f2f2;
  }
</style>
