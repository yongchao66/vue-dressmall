<template>
	<div class="titles align-items">
    <div class="line justify-center align-items">
      <div class="text">
        <i class="iconfont" :class="icon"></i>
        <span>{{text}}</span>
      </div>
    </div>
	</div>
</template>

<script>
	export default {
		name: 'Titles',
    props: {
      icon: String,
      text: String
    }
	}
</script>

<style scoped>
  .titles {
    height: 32px;
    background-color: #f2f2f2;
  }

  .titles .line {
    margin: 0 auto;
    width: 66%;
    height: 1px;
    background-color: #ccc;
  }

  .text {
    position: relative;
    padding: 0 16px;
    color: #999;
    background-color: #f2f2f2;
  }

  .text::before,.text::after {
    content: '';
    position: absolute;
    top: 8px;
    width: 4px;
    height: 4px;
    background-color: #ccc;
    transform: rotate(45deg);
  }

  .text::before {
    left: 0;
  }

  .text::after {
    right: 0;
  }

  .text i {
    margin-right: 6px;
    font-size: 18px;
  }

  .text span {
    font-size: 14px;
  }
</style>
