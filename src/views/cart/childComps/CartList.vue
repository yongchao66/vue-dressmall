<template>
	<div class="cart-list">
    <ul class="lists">
      <li v-for="(item, index) in cartlist"
          :key='index'
          class="item">
        <div class="item-top align-items">
          <div class="top-icon"></div>
          <div class="top-name">
            <img class="img" :src="item.logo" alt="">
            <span class="title">{{item.name}}</span>
            <i class="arrow iconfont icon-right"></i>
          </div>
          <div class="coupon">
            <span>领券</span>
          </div>
        </div>
        <div class="item-wrap ui-flex">
          <div class="wrap-left ui-flex">
            <check-icon style="line-height: 96px;"
                        :is-checked='item.checked'
                        @click.native='isCheck(item)' />
            <div class="image">
              <img :src="item.image" alt="">
            </div>
          </div>
          <div class="wrap-right">
            <div class="title overflow-2" @click="itemClick(item.id)">{{item.title}}</div>
            <p class="desc overflow-1">{{item.desc}}</p>
            <div class="right-bottom align-items">
              <div class="price flex overflow-1">
                <span>￥{{item.price}}</span>
              </div>
              <div class="box">
                <button @click="subClick(item.id)" class="btn reduce">-</button>
                <input class="count" type='number' readonly v-model="item.count" />
                <button @click="addClick(item.id)" class="btn add">+</button>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
	</div>
</template>

<script>
  import CheckIcon from 'components/content/checkicon/CheckIcon'

  import { mapActions } from 'vuex'
	export default {
		name: 'CartList',
    components: {
      CheckIcon
    },
    props: {
      cartlist: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      ...mapActions(['add','sub']),

      /**
       * 事件点击相关方法
      **/
      isCheck(item) {
        item.checked = !item.checked
      },
      addClick(id) {
        this.add(id)
      },
      subClick(id) {
        this.sub(id)
      },
      itemClick(id) {
        this.$router.push('/detail/' + id)
      }
    }
	}
</script>

<style lang="scss" scoped>
  .cart-list {
    padding-top: 44px;
    padding-bottom: 93px;
  }

  .lists {
    padding: 12px;

    .item {
      margin-bottom: 12px;
      background-color: #fff;
      border-radius: 10px;

      &:last-child {
         margin-bottom: 0;
      }
    }
  }

  .item-top {
    height: 40px;
    font-size: 14px;

    .top-icon {
      width: 42px;
      text-align: center;
    }

    .top-name {
      flex: 10;
      height: 100%;
      line-height: 40px;

      .img {
        width: 20px;
        height: 20px;
        border-radius: 100%;
      }

      .title {
        margin-left: 5px;
        margin-right: 3px;
        color: rgb(51,51,51);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .arrow {
        color: #999;
      }
    }

    .coupon {
      margin: 0 8px;
      color: #999;
    }
  }

  .item-wrap {
    padding: 8px 0;
  }

  .wrap-left {
    height: 96px;

    .image {
      width: 74px;
      height: 100%;
      border-radius: 5px;
      overflow: hidden;
    }
  }

  .wrap-right {
    padding: 0 8px;

    .title {
      margin-bottom: 8px;
      font-size: 13px;
    }

    .desc {
      font-size: 12px;
      line-height: 20px;
      color: #999;
    }

    .right-bottom {
      height: 35px;

      .price {
        font-size: 14px;
        color: #ff5000;

        span {
          width: 100%;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }

      .box {
        margin: 8px;
        height: 22px;
        line-height: 22px;
        text-align: center;

        .btn {
          width: 22px;
          height: 100%;
          font-size: 14px;
          color: #ccc;
          background-color: #fff;
          border: 1px solid #ccc;
        }

        .count {
          width: 40px;
          height: 100%;
          font-size: 14px;
          text-align: center;
          border-top: 1px solid #ccc;
          border-bottom: 1px solid #ccc;
          overflow: hidden;
        }
      }
    }
  }
</style>
