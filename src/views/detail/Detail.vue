<template>
  <div class="detail">
    <detail-nav-bar @itemclick='titleClick' :current-index="currentIndex" />
    <scroll class="scroll"
            ref='scroll'
            :probe-type='3'
            @scroll='contentScroll'
            :data='[topImages, baseInfo, shopInfo, detailInfo, paramInfo, commentInfo, recommend]'
            :pullUpLoad='true'>
      <detail-swiper :topImages='topImages' />
      <detail-base-info :baseinfo="baseInfo" ref='base' />
      <detail-shop-info :shopInfo='shopInfo' />
      <detail-comment-info :commentInfo='commentInfo' ref='comment' />
      <detail-info :detailInfo='detailInfo' ref='detail' />
      <detail-param-info :paramInfo='paramInfo' />
      <detail-recommend :recommends="recommend" ref='recommend' />
    </scroll>
    <detail-bottom-bar @addcart='addToCart' />
    <back-top @click.native='backClick' v-show="isShowBackTop" />
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import DetailInfo from './childComps/DetailInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailRecommend from './childComps/DetailRecommend'
  import DetailBottomBar from './childComps/DetailBottomBar'

  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/common/backtop/BackTop'

  import {
    getDetail,
    gBaseInfo,
    gShopInfo,
    gParamInfo,
    getRecommends
  } from 'network/detail'

  import { backTopMixin } from 'common/mixin'
  import { BACKTOP_DISTANCE } from 'common/const'
  import { mapActions } from 'vuex'

  export default {
    name: 'Detail',
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailCommentInfo,
      DetailInfo,
      DetailParamInfo,
      DetailRecommend,
      DetailBottomBar,
      Scroll,
      BackTop
    },
    mixins: [backTopMixin],
    data() {
      return {
        id: null,
        topImages: [],
        baseInfo: {},
        shopInfo: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommend: [],
        themeTops: [],
        currentIndex: 0
      }
    },
    created() {
      this.id = this.$route.params.id
      this._getDetail()

      this._getRecommends()
    },
    updated() {
      this._getOffsetTops()
    },
    methods: {
      ...mapActions(['addCart']),
      /*
        事件点击相关的方法
      */
      titleClick(index) {
        this.$refs.scroll.scrollTo(0, -this.themeTops[index], 300)
      },
      //加入购物车
      addToCart() {
        const product = {}
        product.id = this.id
        product.image = this.topImages[0]
        product.title = this.baseInfo.title
        product.desc = this.baseInfo.desc
        product.price = this.baseInfo.realPrice
        product.name = this.shopInfo.name
        product.logo = this.shopInfo.logo
        this.addCart(product)
      },
      /*
        事件监听相关的方法
      */
      _getOffsetTops() {
        this.themeTops = []
        this.themeTops.push(this.$refs.base.$el.offsetTop)
        this.themeTops.push(this.$refs.comment.$el.offsetTop)
        this.themeTops.push(this.$refs.detail.$el.offsetTop)
        this.themeTops.push(this.$refs.recommend.$el.offsetTop)
        this.themeTops.push(Number.MAX_VALUE)
      },
      contentScroll(position) {
        const flag = Math.abs(Math.round(position.y))
        ///判断BackTop是否显示
        if (flag > BACKTOP_DISTANCE != this.isShowBackTop) {
          this.isShowBackTop = flag > BACKTOP_DISTANCE
        }

        this._listenScrollTheme(flag)
      },
      _listenScrollTheme(position) {
        this.themeTops.forEach( (item, index, el) => {
          if (position >= item && position < el[index + 1]) {
            if (this.currentIndex !== index) {
              this.currentIndex = index
            }
          }
        })
      },
      /*
        网络请求相关的方法
      */
      _getDetail() {
        getDetail(this.id).then(res => {
          const data = res.result

          //获取顶部图片信息
          this.topImages = data.itemInfo.topImages

          //获取商品信息
          this.baseInfo = new gBaseInfo(data.itemInfo, data.columns, data.shopInfo.services)

          //获取店铺信息
          this.shopInfo = new gShopInfo(data.shopInfo)

          //获取详情信息
          this.detailInfo = data.detailInfo

          //获取参数信息
          this.paramInfo = new gParamInfo(data.itemParams.info, data.itemParams.rule)

          //获取评论信息
          if (data.rate.list) {
            this.commentInfo = data.rate.list[0];
          }
        })
      },
      _getRecommends() {
        getRecommends().then(res => {
          this.recommend = res.data.list
        })
      }
    }
  }
</script>

<style scoped>
  .detail {
    height: 100vh;
  }

  .scroll {
    position: absolute;
    top: 44px;
    right: 0;
    left: 0;
    bottom: 49px;
    margin: 0 auto;
    max-width: 768px;
  }
</style>
