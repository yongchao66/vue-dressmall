<template>
	<div class="cart-footer justify align-items">
    <div class="cart-footer-check align-items justify" @click="AllSelectClick">
      <check-icon :is-checked='AllSelect' />
      <span>全选</span>
    </div>
    <div v-show="isShow" class="flex ui-flex">
      <div class="cart-footer-count flex">
        <span class="count">合计:</span>
        <span class="price">￥{{totalPrice}}</span>
      </div>
      <div class="cart-footer-patment">
        <span class="text">结算</span>
        <span class="number" v-show="totalCount">({{totalCount}})</span>
      </div>
    </div>
    <div v-show="!isShow" class="delete" @click="deleteClick">
      <span class="text">删除</span>
      <span class="number" v-show="totalCount">({{totalCount}})</span>
    </div>
	</div>
</template>

<script>
  import CheckIcon from 'components/content/checkicon/CheckIcon'

  import { mapGetters, mapActions } from 'vuex'
	export default {
    name: 'CartFooter',
    components: {
      CheckIcon
    },
    props: {
      isShow: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      ...mapGetters(['cartlist']),
      totalPrice() {
        return this.cartlist.filter( item => {
          return item.checked
        }).reduce((total, item) => {
          return total + item.price * item.count
        }, 0).toFixed(2)
      },
      totalCount() {
        return this.cartlist.filter( item => item.checked).length
      },
      AllSelect() {
        return !this.cartlist.find( item => !item.checked )
      }
    },
    methods: {
      ...mapActions(['delClick', 'delAllClick']),
      // 全选
      AllSelectClick() {
        if (this.AllSelect) {
          this.cartlist.forEach( item => item.checked = false)
        } else {
          this.cartlist.forEach( item => item.checked = true)
        }
      },

      // 删除
      deleteClick() {
        let delAll = this.cartlist.every( item => item.checked)
        let delHeight = this.cartlist.length

        if (delAll) {
          this.delAllClick(delHeight)
          this.isShow = false
        } else {
          this.cartlist.filter(item => {
            return item.checked
          }).forEach( item => {
            this.delClick(item.id)
          })
        }
      }
    }
	}
</script>

<style lang="scss" scoped>
  .cart-footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 49px;
    padding-right: 10px;
    margin: 0 auto;
    max-width: 768px;
    height: 44px;
    background-color: #fff;
    border-radius: 10px 10px 0 0;

    .cart-footer-check {
      span {
        font-size: 14px;
        color: #999;
      }
    }

    .cart-footer-count {
      padding-right: 8px;
      text-align: right;
      font-size: 14px;
      line-height: 32px;

      .price {
        margin-left: 5px;
        color: #ff5000;
      }
    }

    .cart-footer-patment {
      width: 84px;
      height: 32px;
      font-size: 15px;
      line-height: 32px;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      background: linear-gradient(90deg, #ff9000 0%, #ff5000 98%);
      border-radius: 16px;
      overflow: hidden;
    }
  }

  .delete {
    width: 84px;
    height: 32px;
    font-size: 15px;
    line-height: 32px;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    background: linear-gradient(to right, #ff7a00, #fe560a);
    border-radius: 16px;
    overflow: hidden;
  }
</style>
