<template>
  <div class="quich-login">
    <h5 class="other-login">其他登录方式</h5>
    <div class="quich-type">
      <span class="icon-mlogin">QQ</span>
      <span class="icon-mlogin">微信</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LoginFoot'
  }
</script>

<style scoped>
  .quich-login {
    margin-top: 88px;
    font-size: 12px;
    border-top: 1px solid rgba(0, 0, 0, .1);
  }

  .quich-login .other-login {
    margin: -11px auto 0;
    width: 140px;
    color: rgba(0, 0, 0, .2);
    text-align: center;
    background-color: #fff;
  }

  .quich-type {
    margin-top: 25px;
    text-align: center;
  }

  .quich-type .icon-mlogin {
    margin: 0 15px;
    padding-top: 52px;
    width: 48px;
    color: rgba(0, 0, 0, .4);
  }
</style>
