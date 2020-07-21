<template>
	<div class="tab-control">
    <ul class="tab-control-list ui-flex">
      <li v-for="(item, index) in titles"
          :key='index'
          class="tab-control-item flex"
          :class="{active: index === currentIndex}"
          @click="itemClick(index)">
        <span>{{item}}</span>
      </li>
    </ul>
	</div>
</template>

<script>
	export default {
		name: 'TabControl',
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('tabClick', index)
      }
    }
	}
</script>

<style scoped>
  .tab-control {
    font-size: 0.875rem;
    line-height: 2.5rem;
    text-align: center;
    background-color: #fff;
  }

  .active {
    color: #f69;
  }

  .active span {
    display: inline;
    padding-bottom: 4px;
    border-bottom: 2px solid #f69;
  }
</style>
