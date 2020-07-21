import { POP, NEW, SELL } from './const'
import { debounce } from './utils'

const types = [POP, NEW, SELL]

export const tabControlMixin = {
  data() {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      this.currentType = types[index]

      this.$refs.topTabControl.currentIndex = index
      this.$refs.tabControl.currentIndex = index

      this.$refs.scroll.scrollTo(0, -this.tabOffsetTop, 500)
    }
  }
}

export const debounceMixin = {
  mounted() {
    //监听goods中的item图片加载完成事件
    this.itemImageLoad()
  },
  methods: {
    itemImageLoad() {
      debounce(this.$refs.scroll.refresh(), 100)
    }
  }
}

export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    }
  }
}
