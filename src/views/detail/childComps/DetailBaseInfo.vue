<template>
	<div class="base-info" v-if="Object.keys(baseinfo).length !== 0">
    <div class="base-info-title">{{baseinfo.desc}}</div>
    <div class="base-info-price">
      <span class="new-price">{{baseinfo.newPrice}}</span>
      <span class="old-price">{{baseinfo.oldPrice}}</span>
      <span class="discount" v-if="baseinfo.discount">{{baseinfo.discount}}</span>
    </div>
    <div class="base-info-other justify">
      <span>{{baseinfo.columns[0]}}</span>
      <span>{{baseinfo.columns[1]}}</span>
      <span>{{baseinfo.services[baseinfo.services.length-1].name}}</span>
    </div>
    <ul class="base-info-service flex-wrap">
      <li v-for="index in baseinfo.services.length-1"
          :key='index'
          class="service-item flex">
          <img class='icon' :src="baseinfo.services[index].icon" >
          <span>{{baseinfo.services[index-1].name}}</span>
      </li>
    </ul>
	</div>
</template>

<script>
	export default {
		name: 'DetailBaseInfo',
    props: {
      baseinfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
	}
</script>

<style lang="scss" scoped>
  .base-info {
    padding: 12px;
    border-bottom: 6px solid #f2f5f8;

    .base-info-title {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #222;
      text-align: justify;
    }

    .base-info-price {
      margin-top: 10px;

      .new-price {
        font-size: 22px;
        color: #f30;
      }

      .old-price {
        padding: 0 5px;
        font-size: 13px;
        color: #999;
        text-decoration: line-through;
      }

      .discount {
        position: relative;
        top: -5px;
        padding: 2px 5px;
        font-size: 12px;
        color: #fff;
        background-color: #f69;
        border-radius: 8px;
      }
    }

    .base-info-other {
      margin-top: 16px;
      font-size: 13px;
      line-height: 30px;
      color: #999;
      border-bottom: 1px solid rgba(100,100,100, .1);
    }

    .base-info-service {
      margin-top: 16px;

      .service-item {
        text-align: center;

        .icon {
          width: 12px;
          height: 12px;
          position: relative;
          top: 1px;
          right: 3px;
        }

        span {
          font-size: 12px;
          color: #333;
        }
      }
    }
  }
</style>
