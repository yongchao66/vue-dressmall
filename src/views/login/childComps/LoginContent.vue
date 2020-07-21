<template>
  <div class="login-content">
    <div v-if="isShow" class="wraper">
      <div class="input-container">
        <label class="area-box">
          <span class="area-code">+86</span>
          <i class="area-icon"></i>
        </label>
        <input type="tel" placeholder="请输入手机号" class="mobile">
      </div>
      <div class="input-container">
        <input type="tel" placeholder="请输入验证码" class="authcode">
        <button class="btn">获取验证码</button>
      </div>
    </div>
    <div v-else class="wraper">
      <div class="input-container">
        <input type="tel" placeholder="用户名/邮箱/手机号" class="phone">
      </div>
      <div class="input-container">
        <input type="password" placeholder="请输入密码" class="pass">
        <button class="btn">忘记密码</button>
      </div>
    </div>
    <div class="login-btn">登录</div>
    <div class="quick-btn justify">
      <span class="planb-login" @click="typeClick">{{text}}</span>
      <span class="quick-reg">手机快速注册</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LoginContent',
    data() {
      return {
        isShow: true,
        text: '帐号密码登录'
      }
    },
    methods: {
      typeClick() {
        this.isShow = !this.isShow
        if (this.isShow) {
          this.text = '帐号密码登录'
        } else {
          this.text = '短信验证码登录'
        }
      }
    }
  }
</script>

<style scoped>
  .input-container {
    position: relative;
    margin-top: 20px;
    padding: 10px 0;
    height: 50px;
    border-bottom: 1px solid #efefef;
  }

  .area-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 72px;
    line-height: 50px;
  }

  .area-box .area-code {
    width: 50px;
    text-align: center;
  }

  .area-box .area-icon {
    position: absolute;
    top: 22px;
  }

  .input-container input {
    width: 100%;
    height: 100%;
  }

  .input-container .mobile {
    padding-left: 72px;
  }

  .input-container .authcode {
    padding-right: 110px;
  }

  .input-container .pass {
    padding-right: 110px;
  }

  .input-container .btn {
    position: absolute;
    top: 12px;
    right: 0;
    width: 110px;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #848689;
    background-color: #fff;
    border-left: 1px solid #ccc;
  }

  .login-btn {
    margin-top: 14px;
    height: 50px;
    line-height: 50px;
    color: #fff;
    text-align: center;
    background-color: green;
    border-radius: 25px;
  }

  .quick-btn {
    margin-top: 20px;
    font-size: 14px;
    color: #999;
  }
</style>
