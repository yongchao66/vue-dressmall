<template>
	<div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
    <div class="comment-header ui-flex">
      <h3 class="header-title flex">用户评论</h3>
      <div class="header-more">
        <span>更多</span>
        <i class="iconfont icon-right"></i>
      </div>
    </div>
    <div class="comment-user">
      <img class="user-image" :src="commentInfo.user.avatar" alt="">
      <span class="user-name">{{commentInfo.user.uname}}</span>
    </div>
    <div class="comment-message">
      <p class="desc">{{commentInfo.content}}</p>
      <div class="other">
        <span>{{commentInfo.created | createdDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
    </div>
    <div class='picture ui-flex'>
      <img v-for="(item, index) in commentInfo.images"
          :key="index"
          src="item"/>
    </div>
	</div>
</template>

<script>
  import {formatDate} from 'common/utils'
	export default {
		name: 'DetailCommentInfo',
    props: {
      commentInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      createdDate: function (value) {
        let date = new Date(value*1000)
        return formatDate(date, 'yyyy-MM-dd')
      }
    }
	}
</script>

<style lang="scss" scoped>
  .comment-info {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  .comment-header {
    line-height: 50px;
    color: #333;
    border-bottom: 1px solid #ddd;

    .header-title {
      font-size: 15px;
    }

    .header-more {
      span {
        font-size: 13px;
      }
    }
  }

  .comment-user {
    padding-top: 10px;
    padding-bottom: 5px;

    .user-image {
      width: 42px;
      height: 42px;
      border-radius: 50%;
    }

    .user-name {
      margin-left: 10px;
      font-size: 15px;
      color: #333;
    }
  }

  .comment-message {
    padding: 0 10px 16px;

    .desc {
      font-size: 14px;
      color: #777;
      line-height: 1.5;
    }

    .other {
      margin-top: 10px;
      font-size: 12px;
      color: #999;

      span:first-child {
        margin-right: 8px;
      }
    }
  }
  .picture {
    margin-top: 20rpx;
    
    img {
      max-width: 30%;
    }
  }
</style>
