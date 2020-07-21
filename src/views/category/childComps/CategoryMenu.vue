<template>
	<div class="category-menu">
    <ul class="category-menu-list">
      <li v-for="(item, index) in menulists"
          :key='index'
          class="category-menu-item"
          @click="itemClick(index)"
          :class="{active : currentIndex === index}">
          <span>{{item.title}}</span>
      </li>
    </ul>
	</div>
</template>

<script>
	export default {
		name: 'CategoryMenu',
    props: {
      menulists: {
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
        this.currentIndex = index

        const maitKey = this.menulists[index].maitKey
        const miniWallkey = this.menulists[index].miniWallkey

        this.$emit('tabclick', maitKey, miniWallkey)
      }
    }
	}
</script>

<style scoped>
  .category-menu-item {
    position: relative;
    height: 2.75rem;
    line-height: 2.75rem;
    font-size: 0.875rem;
    text-align: center;
    background-color: #eee;
  }

  .active {
    color: #e93b3d;
    background-color: #fff;
  }

  .active::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 2px;
    height: 2.75rem;
    background-color: #e93b3d;
  }
</style>
