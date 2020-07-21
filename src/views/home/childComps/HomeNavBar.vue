<template>
  <nav-bar navbarBg='#ff8198'>
    <i slot='left' class="categories iconfont icon-gengduo" @click="categories"></i>
    <div slot="center" class="nav-bar-serch" @click="sreachCLick">
      <i class="iconfont icon-sousuo"></i>
      <input type="text" readonly v-model="value">
    </div>
    <span slot='right' @click="loginClick">登录</span>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: 'HomeNavBar',
    components: {
      NavBar
    },
    props: {
      value: {
        type: String
      }
    },
    methods: {
      sreachCLick() {
        this.$router.push('/sreach')
      },
      categories() {
        this.$router.push('/category')
      },
      loginClick() {
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>
  .categories {
    font-size: 24px;
  }

  .nav-bar-serch {
    position: relative;
  }

  .nav-bar-serch i {
    position: absolute;
    left: 5px;
    font-size: 22px;
    color: #ccc;
  }

  .nav-bar-serch input {
    padding-left: 30px;
    width: 100%;
    height: 2rem;
    color: #999;
    border-radius: 1rem;
  }
</style>
