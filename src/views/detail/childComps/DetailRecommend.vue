<template>
	<div class="detail-recommend">
    <titles icon='icon-recommend' text='官方推荐' />
    <goods :goods='recommends' />
	</div>
</template>

<script>
  import Titles from 'components/content/titles/Titles'
  import Goods from 'components/content/goods/Goods'
	export default {
		name: 'DetailRecommend',
    components: {
      Goods,
      Titles
    },
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

</style>
