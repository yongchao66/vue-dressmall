<template>
	<div class="shop-info">
    <div class="shop-info-title ui-flex">
      <img :src="shopInfo.logo" alt="">
      <h4 class="flex">{{shopInfo.name}}</h4>
    </div>
    <div class="shop-inf-box align-items">
      <div class="box-left ui-flex flex">
        <div class="box-left-sells flex">
          <div class="count">{{shopInfo.fans | sellCountFilter}}</div>
          <div class="text">总销量</div>
        </div>
        <div class="box-left-goods flex">
          <div class="count">{{shopInfo.goodsCount}}</div>
          <div class="text">全部宝贝</div>
        </div>
      </div>
      <ul class="box-right flex">
        <li v-for="(item, index) in shopInfo.score"
            :key='index'
            class="box-right-item justify">
          <span class="title">{{item.name}}</span>
          <span class="score" :class="{'is-score' : item.isBetter}">{{item.score}}</span>
          <span class="better" :class="{'is-better' : item.isBetter}">{{item.isBetter ? '高' : '低'}}</span>
        </li>
      </ul>
    </div>
    <div class="box-button">
      <button>进店逛逛</button>
    </div>
	</div>
</template>

<script>
	export default {
		name: 'DetailShopInfo',
    props: {
      shopInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      sellCountFilter(value) {
        if (value < 10000) return value
        return (value / 10000).toFixed(1) + '万'
      }
    }
	}
</script>

<style lang="scss" scoped>
  .shop-info {
    padding: 24px 12px;
    border-bottom: 5px solid #f2f5f8;
  }

  .shop-info-title {
    img {
      width: 43px;
      height: 43px;
      border-radius: 50%;
      border: 1px solid rgba(0,0,0,.1);
    }

    h4 {
      margin-left: 10px;
      line-height: 45px;
    }
  }

  .shop-inf-box {
    margin-top: 14px;
    color: #333;

    .box-left {
      text-align: center;

      &:first-child {
        border-right: 1px solid #ddd;
      }
    }

    .count {
      font-size: 18px;
      line-height: 24px;
    }

    .text {
      margin-top: 10px;
      font-size: 12px;
    }
  }

  .box-right {
    padding-left: 20px;
    font-size: 13px;

    .box-right-item {
      padding: 5px 0;

      .score {
        color: #5ea732;
      }

      .better {
        background-color: #5ea732;
      }

      .is-score {
        color: #f13e3a;
      }

      .is-better {
        background-color: #f13e3a;
      }
    }
  }

  .box-button {
    margin-top: 10px;
    text-align: center;

    button {
      width: 150px;
      height: 32px;
      font-size: 14px;
      line-height: 32px;
      background-color: #f2f5f8;
      border-radius: 10px;
    }
  }
</style>
