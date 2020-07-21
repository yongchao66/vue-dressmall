<template>
	<div class="check-icon">
    <i v-if="isChecked" class="iconfont icon-checksurface checked"></i>
    <i v-else class="iconfont icon-check01"></i>
	</div>
</template>

<script>
	export default {
		name: 'CheckIcon',
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    }
	}
</script>

<style lang="scss" scoped>
  .check-icon {
    width: 42px;
    color: #999;
    text-align: center;

    i {
      font-size: 30px;
    }

    .checked {
      color: #ff5000;
    }
  }
</style>
