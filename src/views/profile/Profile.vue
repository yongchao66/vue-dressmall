<template>
	<div class="profile">
    <nav-bar navbarBg='#ff8198' v-slot:center>个人资料</nav-bar>
    <profile-info />
    <profile-top-list />
    <profile-order />
    <profile-tool />
	</div>
</template>

<script>
  import ProfileInfo from './childComps/ProfileInfo'
  import ProfileTopList from './childComps/ProfileTopList'
  import ProfileOrder from './childComps/ProfileOrder'
  import ProfileTool from './childComps/ProfileTool'

  import NavBar from 'components/common/navbar/NavBar'


	export default {
		name: "Profile",
    components: {
      ProfileInfo,
      ProfileTopList,
      ProfileOrder,
      ProfileTool,
      NavBar,
    },
    data() {
      return {

      }
    }
	}
</script>

<style scoped>
  .profile {
    height: 100vh;
    background: rgba(192,192,192, .1);
  }
</style>
