<template>
	<div id="tabbar" class="align-items">
		<tab-bar v-for="(item, index) in tabbarList"
									:key='index'
									:path='item.path'
									activeColor='#f69'>
			<img slot="item-icon"
						:src="item.img"
						:alt="item.title"
						class="image">
			<img slot="item-icon-active"
						:src="item.activeImg"
						:alt="item.title"
						class="image">
			<span slot="item-title" class="title">{{item.title}}</span>
		</tab-bar>
	</div>
</template>

<script>
	import TabBar from 'components/common/tabbar/Tabbar.vue'

	export default {
		name: "MainTabBar",
		components: {
			TabBar
		},
		data() {
			return {
				tabbarList: [
					{
						img: require('assets/img/tabbar/home.png'),
						activeImg: require('assets/img/tabbar/home_active.png'),
						title: '首页',
						path: '/home'
					},
					{
						img: require('assets/img/tabbar/category.png'),
						activeImg: require('assets/img/tabbar/category_active.png'),
						title: '分类',
						path: '/category'
					},
					{
						img: require('assets/img/tabbar/cart.png'),
						activeImg: require('assets/img/tabbar/cart_active.png'),
						title: '购物车',
						path: '/cart'
					},
					{
						img: require('assets/img/tabbar/profile.png'),
						activeImg: require('assets/img/tabbar/profile_active.png'),
						title: '我的',
						path: '/profile'
					}
				]
			}
		}
	}
</script>

<style>
	#tabbar {
		position: fixed;
    left: 0;
    right: 0;
		bottom: 0;
    z-index: 10;
    margin: 0 auto;
    max-width: 768px;
		height: 49px;
		background-color: #f6f6f6;
		box-shadow: 0 -1px 1px rgba(100,100,100,.2);
	}
</style>
