<template>
	<div class="cart-logo">
    <div class="logo-icon">
      <img src="~assets/img/cart/cart.png" alt="">
    </div>
    <p class="cart-desc">亲、您的购物车空空如也!</p>
    <button @click="buttonClick" class="cart-button">去逛逛</button>
	</div>
</template>

<script>
	export default {
    name: 'CartLogo',
    methods: {
      buttonClick() {
        this.$router.replace('/home')
      }
    }
	}
</script>

<style scoped>
  .cart-logo {
    padding-top: 50px;
    font-size: 16px;
    text-align: center;
    color: #999;
  }

  .logo-icon img {
    width: 220px;
    height: 160px;
  }

  .cart-button {
    margin-top: 18px;
    width: 100px;
    height: 36px;
    line-height: 36px;
    color: #858585;
    background-color: #f2f2f2;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
