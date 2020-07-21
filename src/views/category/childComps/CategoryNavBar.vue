<template>
  <nav-bar navbarBg='#ff8198'>
    <i slot='left' class="back iconfont icon-fanhui" @click="backClick"></i>
    <div slot="center" class="nav-bar-serch" @click="sreachCLick">
      <i class="iconfont icon-sousuo"></i>
      <input type="text" readonly v-model="value">
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: 'CategoryNavBar',
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
      backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .back {
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
