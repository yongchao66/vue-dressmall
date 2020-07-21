<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
    <main-tab-bar v-if="$route.meta.showTab" />
  </div>
</template>

<script>
  import MainTabBar from 'components/content/maintabbar/MainTabBar.vue'

  export default {
    name: "App",
    components: {
      MainTabBar
    }
  }
</script>

<style>
  @import 'assets/css/base.css';
  @import 'assets/font/iconfont.css';

  #app {
    margin: 0 auto;
    max-width: 768px;
    width: 100%;
  }
</style>
