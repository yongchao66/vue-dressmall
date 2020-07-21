<template>
	<div class="login">
    <login-head />
    <login-content />
    <login-foot />
    <div class="protocol">
      <span>未注册的手机号验证后将自动创建蘑菇街账号, 登录即代表您已同意</span>
      <span class="policy">蘑菇街隐私政策</span>
    </div>
	</div>
</template>

<script>
  import LoginHead from './childComps/LoginHead'
  import LoginContent from './childComps/LoginContent'
  import LoginFoot from './childComps/LoginFoot'
	export default {
		name: 'Login',
    components: {
      LoginHead,
      LoginContent,
      LoginFoot
    }
	}
</script>

<style scoped>
  .login {
    padding: 0 25px;
  }

  .protocol {
    margin-top: 16px;
    font-size: 13px;
    color: #999;
    text-align: center;
  }

  .protocol .policy {
    color: #4a90e2;
  }
</style>
