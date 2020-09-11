<template>
  <div class="home">
    <home-nav-bar :value='value' />
    <tab-control :titles='titles'
                  @tabClick='tabClick'
                  class="fixed"
                  v-show="isTabFixed"
                  ref='topTabControl' />
    <scroll class="content"
            ref='scroll'
            :probeType='3'
            @scroll='contentScroll'
            :pullUpLoad='true'
            @pullingUp='loadMore'>
      <home-swiper :banners="banners" @swiperImageLoad='swiperImageLoad' />
      <recommend :recommends="recommends" />
      <feature />
      <tab-control :titles='titles' @tabClick='tabClick' ref='tabControl' />
      <goods :goods="showGoods" @itemImageLoad='itemImageLoad' />
    </scroll>
    <back-top @click.native='backClick' v-show="isShowBackTop" />
  </div>
</template>

<script>
  import HomeNavBar from './childComps/HomeNavBar'
  import HomeSwiper from './childComps/HomeSwiper'
  import Recommend from './childComps/Recommend'
  import Feature from './childComps/Feature'

  import TabControl from 'components/content/tabcontrol/TabControl'
  import Goods from 'components/content/goods/Goods'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/common/backtop/BackTop'

  import {
    getHomeMultidata,
    getHomeGoods
  } from 'network/home'
  import {
    POP,
    NEW,
    SELL,
    BACKTOP_DISTANCE
  } from 'common/const'
  import {
    tabControlMixin,
    backTopMixin,
    debounceMixin
  } from 'common/mixin'

  export default {
    name: "Home",
    components: {
      HomeNavBar,
      HomeSwiper,
      Recommend,
      Feature,
      TabControl,
      Goods,
      Scroll,
      BackTop
    },
    mixins: [
      tabControlMixin,
      backTopMixin,
      debounceMixin
    ],
    data() {
      return {
        value: '秋季新款',
        banners: [],
        recommends: [],
        titles: ['流行', '新款', '精选'],
        goods: {
          'pop': {
            page: 0,
            list: []
          },
          'new': {
            page: 0,
            list: []
          },
          'sell': {
            page: 0,
            list: []
          }
        },
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0
      }
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.saveY = -this.$refs.scroll.getScrollY()
    },
    created() {
      this._getHomeMultidata()

      //请求商品数据
      this._getHomeGoods(POP)
      this._getHomeGoods(NEW)
      this._getHomeGoods(SELL)
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    methods: {
      /**
       * 事件监听相关的方法
       */
      contentScroll(position) {
        //判断BackTop是否显示
        const flag = Math.abs(Math.round(position.y)) > BACKTOP_DISTANCE
        if (flag != this.isShowBackTop) {
          this.isShowBackTop = flag
        }

        //tabControl是否吸顶
        const flag2 = Math.abs(Math.round(position.y)) > this.tabOffsetTop
        if (flag2 != this.isTabFixed) {
          this.isTabFixed = flag2
        }
      },
      loadMore() {
        this._getHomeGoods(this.currentType)
      },
      swiperImageLoad() {
        //获取tabControl的offsetTop
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      },
      /**
       * 网络请求相关的方法
       */
      _getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      _getHomeGoods(type) {
        const page = this.goods[type].page + 1

        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    height: 100vh;
  }

  .content {
    position: absolute;
    top: 44px;
    left: 0;
    bottom: 49px;
    right: 0;
    margin: 0 auto;
    max-width: 768px;
    overflow: hidden;
  }

  .fixed {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    z-index: 10;
    max-width: 768px;
    margin: 0 auto;
  }

  .padtop {
    margin-top: 40px;
  }
</style>
