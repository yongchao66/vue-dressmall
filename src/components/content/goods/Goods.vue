<template>
	<div class="goods">
    <ul class="goods-list flex-wrap">
      <li v-for="(item, index) in goods"
          :key="index"
          class="goods-item flex-basis-2"
          @click="itemClick(item.iid)">
        <img v-lazy="topImage(item)"
              :key="topImage(item)"
              class="good-item-image"
              @load="imageLoad"
              alt="">
        <p class="goods-item-title overflow-1">{{item.title}}</p>
        <div class="good-item-info justify">
          <span class="pirce">¥{{item.price}}</span>
          <span class="purchase">{{item.cfav}}人已买</span>
        </div>
      </li>
    </ul>
	</div>
</template>

<script>
	export default {
		name: "Goods",
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    computed: {
      topImage() {
         return item => {
            return item.img || item.image || item.show.img
         }
      }
    },
    methods: {
      imageLoad() {
        this.$emit('itemImageLoad')
      },
      itemClick(id) {
        this.$router.push('/detail/' + id)
      },
    }
	}
</script>

<style lang="scss" scoped>
  .goods-list {
    margin: 1.5%;
  }

  .goods-item {
    padding: 1.5%;
    color: #333;

    .good-item-image {
      border-radius: 5px;
    }

    .goods-item-title {
      line-height: 1.5rem;
      font-size: .13px;
      text-align: justify;
    }

    .good-item-info {
      align-items: center;
      font-size: 12px;

      .pirce {
        color: #ff5777;
      }

      .purchase {
        color: #999;
      }
    }
  }
</style>
