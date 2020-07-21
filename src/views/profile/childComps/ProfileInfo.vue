<template>
  <div class="profile-info align-items">
    <div class="porfile-info-left">
      <img src="~assets/img/profile/avatar.svg" alt="">
      <i class="iconfont icon-vip1"></i>
    </div>
    <div class="profile-info-center flex">
      <div class="set">
        <span>给自己设个呢称吧</span>
      </div>
      <div class="name">
        <span>账号:</span>
        <span></span>
      </div>
    </div>
    <div class="profile-info-right">
      <i class="iconfont icon-right"></i>
    </div>
  </div>
</template>

<script>

  export default {
    name: "ProfileInfo"
  }
</script>

<style lang="scss" scoped>
  .profile-info {
    padding: 12px;
  }

  .porfile-info-left {
    position: relative;
    width: 50px;
    height: 50px;

    i {
      position: absolute;
      bottom: -10px;
      right: 0;
      font-size: 30px;
      color: #006633;
    }
  }

  .profile-info-center {
    padding-left: 10px;
    font-size: 12px;
    color: #999;

    .set {
      margin-bottom: 3px;
      padding: 2px 14px 2px 5px;
      width: 120px;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 1px 1px rgba(100,100,100,.2);

      span {
        border-left: 2px solid #ff5000;
      }
    }

  }

  .profile-info-right {
    width: 40px;
    text-align: center;

    i {
      font-size: 30px;
      color: #999;
    }
  }
</style>
