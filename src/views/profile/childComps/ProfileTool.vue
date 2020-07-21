<template>
	<div class="profile-tool">
    <div class="tool-top justify">
      <span class="title">我的工具</span>
      <span class="examine">查看全部工具 <i class="iconfont icon-right"></i></span>
    </div>
    <ul class="tool-list align-items flex-wrap">
      <li v-for="(item, index) in list" :key='index' class="tool-item flex-basis-4">
        <div class="item-icon">
          <i class="iconfont" :class="item.icon"></i>
        </div>
        <div class="item-title">
          <span>{{item.title}}</span>
        </div>
      </li>
    </ul>
	</div>
</template>

<script>
	export default {
		name: 'ProfileTool',
    data() {
      return {
        list: [
          {
            icon: 'icon-qiandao0101',
            title: '签到'
          },
          {
            icon: 'icon-kefu',
            title: '客服'
          },
          {
            icon: 'icon-shoucang',
            title: '达人中心'
          },
          {
            icon: 'icon-yijianfankui',
            title: '意见反馈'
          },
          {
            icon: 'icon-dizhi',
            title: '收获地址'
          },
          {
            icon: 'icon-jifen',
            title: '积分商城'
          }
        ]
      }
    }
	}
</script>

<style lang="scss" scoped>
  .profile-tool {
    margin: 8px 12px 0;
    background-color: #fff;
    border-radius: 10px;
  }

  .tool-top {
    padding: 0 12px;
    height: 36px;
    line-height: 36px;
    border-bottom: 1px solid #ccc;

    .title {
      font-size: 14px;
      color: #000;
    }

    .examine {
      font-size: 12px;
      color: #999;

      i {
        font-size: 18px;
      }
    }
  }

  .tool-item {
    padding: 10px 0;
    text-align: center;

    .item-icon i {
      font-size: 24px;
      color: #999;
    }

    .item-title {
      font-size: 12px;
    }
  }
</style>
