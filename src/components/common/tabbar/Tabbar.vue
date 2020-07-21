<template>
	<div class="tabbar-item" @click="itemClick">
		<div v-if="!isActive" class="tabbar-item-icon">
      <slot name="item-icon"></slot>
    </div>
		<div v-else class="tabbar-item-icon">
      <slot name="item-icon-active"></slot>
    </div>
		<div :style="activeStyle" class="tabbar-item-title">
      <slot name="item-title"></slot>
    </div>
	</div>
</template>

<script>
	export default {
		name: "TarBar",
		props: {
			path: String,
			activeColor: {
				type: String,
				default: '#f00'
			}
		},
		data() {
			return {

			}
		},
		computed: {
			isActive() {
				return this.$route.path.indexOf(this.path) !== -1
			},
			activeStyle() {
				return this.isActive ? {color: this.activeColor} : {}
			}
		},
		methods: {
			itemClick() {
				this.$router.push(this.path)
			}
		}
	}
</script>

<style scoped>
	.tabbar-item {
		flex: 1;
		text-align: center;

	}
	.tabbar-item .tabbar-item-icon {
		width: 24px;
		height: 24px;
    margin: 0 auto;
    text-align: center;
	}

	.tabbar-item .tabbar-item-title {
		font-size: 14px;
	}
</style>
