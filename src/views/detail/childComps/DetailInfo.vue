<template>
	<div class="detail-info clearfix" v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc">
      <div class="start"></div>
      <p class="desc">{{detailInfo.desc}}</p>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-iamge">
      <ul class="iamge-list">
        <li v-for="(item, index) in detailInfo.detailImage[0].list"
            :key='index'
            class="image-item">
          <img :src="item" alt="">
        </li>
      </ul>
    </div>
	</div>
</template>

<script>
	export default {
		name: 'DetailInfo',
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
	}
</script>

<style lang="scss" scoped>
  .detail-info {
    padding: 20px 12px;
  }

  .info-desc {
    .start,.end {
      position: relative;
      width: 90px;
      height: 1px;
      background-color: #a3a3a5;

      &:before {
        content: '';
        position: absolute;
        bottom: 0;
        width: 5px;
        height: 5px;
        background-color: #333;
      }
    }

    .end {
      float: right;

      &:before {
        right: 0;
      }
    }

    .desc {
      padding: 15px 0;
      font-size: 14px;
      text-align: justify;
    }
  }

  .info-key {
    font-size: 15px;
    line-height: 24px;
  }

  .image-item {
    margin-bottom: 5px;

    &:last-child {
      margin-bottom: none;
    }
  }
</style>
