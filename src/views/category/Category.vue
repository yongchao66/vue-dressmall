<template>
  <div class="category">
    <category-nav-bar :value='value' />
    <div class="category-wrapper ui-flex">
      <scroll class="category-left">
        <category-menu :menulists='categoryMenu' @tabclick='menuClick' />
      </scroll>
      <tab-control :titles='titles'
                    @tabClick='tabClick'
                    class="fixed"
                    v-show="isTabFixed"
                    ref='topTabControl' />
      <scroll class="category-right flex"
              ref='scroll'
              :probeType='3'
              @scroll='contentScroll'>
        <category-current :categoryCurrent='categoryCurrent' />
        <tab-control :titles='titles' @tabClick='tabClick' ref='tabControl' />
        <goods :goods='showGoods' @itemImageLoad='itemImageLoad' />
      </scroll>
    </div>
  </div>
</template>

<script>
  import CategoryNavBar from './childComps/CategoryNavBar'
  import CategoryMenu from './childComps/CategoryMenu'
  import CategoryCurrent from './childComps/CategoryCurrent'

  import Scroll from 'components/common/scroll/Scroll'
  import Goods from 'components/content/goods/Goods'
  import TabControl from 'components/content/tabcontrol/TabControl'

  import {
    getCategory,
    getCurrent,
    getCurrentGood
  } from 'network/category'
  import {
    POP,
    NEW,
    SELL
  } from 'common/const'
  import {
    tabControlMixin,
    debounceMixin
  } from 'common/mixin'

  export default {
    name: "Category",
    components: {
      CategoryNavBar,
      CategoryMenu,
      CategoryCurrent,
      Scroll,
      Goods,
      TabControl
    },
    mixins: [
      tabControlMixin,
      debounceMixin
    ],
    data() {
      return {
        value: '小白鞋',
        categoryMenu: [],
        categoryCurrent: [],
        categoryGoods: {
          'pop': [],
          'new': [],
          'sell': []
        },
        titles: ['热门', '新款', '精选'],
        tabOffsetTop: 0,
        isTabFixed: false
      }
    },
    created() {
      this._getCategory()
    },
    computed: {
      showGoods() {
        return this.categoryGoods[this.currentType]
      }
    },
    methods: {
      /**
       * 事件监听相关的方法
       */
      menuClick(maitKey, miniWallkey) {
        this._getCurrent(maitKey)

        this._getCurrentGood(miniWallkey, POP)
        this._getCurrentGood(miniWallkey, NEW)
        this._getCurrentGood(miniWallkey, SELL)

        this.$refs.scroll.scrollTo(0, 0, 500)
      },
      contentScroll(position) {
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop

        const flag = Math.abs(Math.round(position.y)) > this.tabOffsetTop
        if (flag != this.isTabFixed) {
          this.isTabFixed = flag
        }
      },
      /**
       * 网络请求相关的方法
       */
      _getCategory() {
        getCategory().then(res => {
          this.categoryMenu = res.data.category.list
          const maitKey = this.categoryMenu[0].maitKey
          const miniWallkey = this.categoryMenu[0].miniWallkey

          this._getCurrent(maitKey)
          this._getCurrentGood(miniWallkey, POP)
          this._getCurrentGood(miniWallkey, NEW)
          this._getCurrentGood(miniWallkey, SELL)
        })
      },
      _getCurrent(maitKey) {
        getCurrent(maitKey).then(res => {
          this.categoryCurrent = res.data.list
        })
      },
      _getCurrentGood(miniWallkey, type) {
        getCurrentGood(miniWallkey, type).then(res => {
          this.categoryGoods[type] = res
        })
      }
    }
  }
</script>

<style scoped>
  .category {
    height: 100vh;
  }

  .category-wrapper {
    position: absolute;
    top: 44px;
    left: 0;
    bottom: 49px;
    right: 0;
    margin: 0 auto;
    max-width: 768px;
    overflow-y: hidden;
  }

  .category-left {
    width: 80px;
  }

  .fixed {
    position: fixed;
    top: 44px;
    right: 0;
    z-index: 10;
    width: calc(100% - 80px);
  }
</style>
