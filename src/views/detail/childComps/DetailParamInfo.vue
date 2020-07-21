<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <div class="param-title">尺寸说明</div>
    <ul class="param-info-size">
      <li v-for="(item, index) in paramInfo.sizes[0]" :key='index' class="param-item align-items">
        <span v-for="(el, indey) in item" :key='indey' class="flex">{{el}}</span>
      </li>
    </ul>
    <div class="consult">*以上尺寸为实物人工测量，因测量方式不同会有1-2cm误差，相关数据仅为作参考，以收到实物为难。</div>
    <div class="param-title">产品参数</div>
    <ul class="param-info-s">
      <li v-for="(item, index) in paramInfo.infos" :key='index' class="param-item align-items">
        <span class="key">{{item.key}}</span>
        <span class="value">{{item.value}}</span>
      </li>
    </ul>
    <div class="param-info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailParamInfo',
    props: {
      paramInfo: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .param-info {
    padding: 12px;

    .param-title {
      height: 38px;
      padding-left: 10px;
      font-size: 16px;
      line-height: 38px;
      background-color: #f2f2f2;
    }

    .consult {
      padding: 12px 0;
      font-size: 14px;
      color: #999;
    }

    .param-item {
      padding: 10px 0;
      font-size: 14px;
      border-bottom: 1px solid #ddd;

      .key {
        flex: 4;
      }

      .value {
        flex: 8;
        color: #f69;
      }
    }
  }
</style>
