<template>
	<div class="recommend">
    <ul class="ui-flex">
      <li v-for="(item, index) in recommends" :key="index" class="recommend-item flex">
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
		name: 'Recommend',
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
	}
</script>

<style scoped>
  .recommend {
    padding: 10px 0 20px;
    text-align: center;
    font-size: 0.75rem;
    border-bottom: 10px solid #eee;
  }

  .recommend-item img {
    margin-bottom: 10px;
    width: 4.25rem;
  }
</style>
