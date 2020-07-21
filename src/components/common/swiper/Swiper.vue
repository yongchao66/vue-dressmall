<template>
	<div id="banner">
    <div class="swiper"
         @touchstart='touchstart'
         @touchmove='touchmove'
         @touchend='touchend'>
      <slot></slot>
    </div>
    <ul class="indicator" v-if="showIndicator && slideCount > 1">
      <li class="indicator-item"
          v-for="(item, index) in slideCount"
          :key='index'
          :style="indiColor(index)">
      </li>
    </ul>
	</div>
</template>

<script>
	export default {
		name: 'Swiper',
    props: {
      interval: {
        type: Number,
        default: 3000
      },
      duration: {
        type: Number,
        default: 300
      },
      moveRatio: {
        type: Number,
        default: 0.25
      },
      showIndicator: {
        type: Boolean,
        default: true
      },
      indicatorColor: {
        type: String,
        default: 'rgba(212,62,46,1)'
      }
    },
    data() {
      return {
        slideCount: 0, //元素个数
        totalWidth: 0, // swiper的宽度
        swiperStyle: {}, // swiper样式
        currentIndex: 1, // 当前的index
        scrolling: false, // 是否正在滚动
      }
    },
    mounted() {
      setTimeout( () => {
        this.handleDom();

        this.startTimer();
      }, 300)
    },
    computed: {
      indiColor() {
        return index => {
          return index === this.currentIndex-1 ? {background: this.indicatorColor} : {}
        }
      }
    },
    methods: {
      /**
       * 拖动事件
       */
      touchstart(e) {
        //如果正在滚动, 不可以拖动
        if (this.scrolling) return
        //停止定时器
        this.stopTimer()
        //保存开始触摸位置
        this.startX = e.touches[0].pageX
      },
      touchmove(e) {
        // 计算拖动的距离
        this.currentX = e.touches[0].pageX
        this.distance = this.currentX - this.startX
        let currentPosition = -this.currentIndex * this.totalWidth
        let moveDistance = this.distance + currentPosition

        this.setTransform(moveDistance)
      },
      touchend() {
        //获取移动的距离
        let currentMove = Math.abs(this.distance)
        let currentTatio = this.totalWidth * this.moveRatio

        //判断最终的距离
        if (this.distance === 0) return
        else if (this.distance > 0 && currentMove > currentTatio) {
          this.currentIndex --
        } else if (this.distance < 0 && currentMove > currentTatio) {
          this.currentIndex ++
        }

        this.scrollContent(-this.currentIndex * this.totalWidth)

        this.startTimer()
      },
      /**
       * 控制上一个, 下一个
       */
      prev() {
        this.changeItem(-1)
      },
      next() {
        this.changeItem(1)
      },

      changeItem(num) {
        this.stopTimer()

        this.currentIndex += num
        this.scrollContent(-this.currentIndex * this.totalWidth)

        this.startTimer()
      },
      /**
       * 定时器操作
       */
      startTimer() {
        this.playTimer = window.setInterval( () => {
          this.currentIndex ++
          this.scrollContent(-this.currentIndex * this.totalWidth)
        }, this.interval)
      },
      stopTimer() {
        window.clearInterval(this.playTimer)
      },

      /**
       * 滚动到正确的位置
       */
      scrollContent(currentPosition) {
        this.scrolling = true

        this.setTransition()
        this.setTransform(currentPosition)

        this.checkPosition()

        this.scrolling = false
      },

      /**
       * 校验正确的位置
       */
      checkPosition() {
        window.setTimeout( () => {
          this.swiperStyle.transition = '0s'

          if (this.currentIndex >= this.slideCount + 1) {
            this.currentIndex = 1
            this.setTransform(-this.currentIndex * this.totalWidth)
          } else if (this.currentIndex <= 0) {
            this.currentIndex = this.slideCount
            this.setTransform(-this.currentIndex * this.totalWidth)
          }

        }, this.duration)
      },
      /**
       * 设置过度时间
       */
      setTransition() {
        this.swiperStyle.transition = this.duration + 'ms'
        this.swiperStyle.webkitTransition = this.duration + 'ms'
        this.swiperStyle.msTransition = this.duration + 'ms'
        this.swiperStyle.mozTransition = this.duration + 'ms'
        this.swiperStyle.oTransition = this.duration + 'ms'
      },
      /**
       * 设置滚动的位置
       */
      setTransform(position) {
        this.swiperStyle.transform = `transfrom3d(${position}px, 0, 0)`
        this.swiperStyle.webkitTransform = `translate3d(${position}px, 0, 0)`
        this.swiperStyle.msTransform = `translate3d(${position}px, 0, 0)`
        this.swiperStyle.mozTransform = `translate3d(${position}px, 0, 0)`
        this.swiperStyle.oTransform = `translate3d(${position}px, 0, 0)`
      },

      /**
       * 操作DOM, 添加slide
       */
      handleDom() {
        //获取元素
        let oSwiper = document.querySelector('.swiper')
        let iSlide = document.querySelectorAll('.swiper .slide')


        //保留元素个数
        this.slideCount = iSlide.length;

        //如果大于1个, 那么在前后分别添加一个slide
        if (this.slideCount > 1) {
          let cloneFirst = iSlide[0].cloneNode(true)
          let cloneLast = iSlide[this.slideCount - 1].cloneNode(true)
          oSwiper.insertBefore(cloneLast, iSlide[0])
          oSwiper.appendChild(cloneFirst)
          this.totalWidth = oSwiper.offsetWidth
          this.swiperStyle = oSwiper.style
        }

        // 4.让swiper元素, 显示第一个(目前是显示前面添加的最后一个元素)
        this.setTransform(-this.totalWidth)
      }
    }
	}
</script>

<style scoped>
  #banner {
    position: relative;
    overflow: hidden;
  }

  .swiper {
    display: flex;
    display: -moz-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
  }

  .indicator {
    position: absolute;
    bottom: 8px;
    display: flex;
    display: -moz-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    justify-content: center;
    -webkit-justify-content: center;
    width: 100%;
  }

  .indicator-item {
    width: 8px;
    height: 8px;
    margin: 0 5px;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 4px;
  }
</style>
