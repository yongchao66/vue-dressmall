<template>
	<div class="wrapper" ref='wrapper'>
     <div class="content">
       <slot></slot>
     </div>
	</div>
</template>

<script>
  import BScroll from 'better-scroll'

	export default {
		name: 'Scroll',
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      },
      data: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
         click: true,
         //当 probeType 为 3 的时候，不仅在屏幕滑动的过程中，而且在 滚动动画运行过程中实时派发 scroll 事件。
         probeType: this.probeType,
         //用于做上拉加载功能,当上拉加载数据加载完毕后，需要执行 finishPullUp 方法
         pullUpLoad: this.pullUpLoad,
         //当窗口的尺寸改变的时候，需要对 better-scroll 做重新计算
         resizePolling: 60
       })

       //监听滚动的位置
       if (this.probeType === 2 || this.probeType === 3) {
         this.scroll.on('scroll', (position) => {
           this.$emit('scroll', position)
         })
       }

       //监听上拉事件
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      }
    },
    methods: {
      scrollTo(x, y, time=500) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      getScrollY() {
        return this.scroll ? Math.abs(this.scroll.y) : 0
      }
    },
    watch: {
      data() {
        setTimeout(this.refresh(), 50)
      }
    }
	}
</script>

<style scoped>

</style>
