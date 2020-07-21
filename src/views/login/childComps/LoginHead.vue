<template>
  <nav-bar class="login-hand" navbarColor='#000'>
    <i slot='left' class="iconfont icon-fanhui" @click="backClick"></i>
    <span slot='center'>蘑菇街登录</span>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: 'LoginHead',
    components: {
      NavBar
    },
    methods: {
      backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .login-hand {
    box-shadow: none;
  }
</style>
