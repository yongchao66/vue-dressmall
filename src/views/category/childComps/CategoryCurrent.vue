<template>
	<div class="category-current">
    <ul class="c-current-list flex-wrap">
      <li v-for="(item, index) in categoryCurrent"
          :key="index"
          class="c-current-item">
         <a :href="item.link">
           <img :src="item.image" :alt="item.title">
           <p>{{item.title}}</p>
         </a>
      </li>
    </ul>
	</div>
</template>

<script>
	export default {
		name: 'CategoryCurrent',
    props: {
      categoryCurrent: {
        type: Array,
        default() {
          return []
        }
      }
    }
	}
</script>

<style lang="scss" scoped>
  .c-current-item {
    padding: 12px 0;
    width: calc(100% / 3);
    text-align: center;

    img {
      width: 3.75rem;
      height: 3.75rem;
    }

    p {
      font-size: 0.75rem;
      margin-top: 12px;
    }
  }
</style>
