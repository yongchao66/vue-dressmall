<template>
	<div class="header" :style="navbarStyle">
    <div class="header-left"><slot name="left"></slot></div>
    <div class="header-center"><slot name="center"></slot></div>
    <div class="header-right"><slot name="right"></slot></div>
	</div>
</template>

<script>
	export default {
    name: "NavBar",
    props: {
      navbarBg: {
        type: String,
        default: '#fff'
      },
      navbarColor: {
        type: String,
        default: '#fff'
      }
    },
    computed: {
      navbarStyle() {
        return {
          backgroundColor: this.navbarBg,
          color: this.navbarColor
        }
      }
    }
	}
</script>

<style scoped>
  .header {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    display: flex;
    display: -moz-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    margin:  0 auto;
    max-width: 768px;
    height: 2.75rem;
    line-height: 2.75rem;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
  }
  
  .header-left,.header-right {
    flex: 2;
    -ms-flex: 2;
    -webkit-flex: 2;
    -webkit-box-flex: 2;
    -moz-box-flex: 2;
  }

  .header-center {
    flex: 8;
    -ms-flex: 8;
    -webkit-flex: 8;
    -webkit-box-flex: 8;
    -moz-box-flex: 8;
  }
</style>
