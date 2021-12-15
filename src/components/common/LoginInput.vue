<template>
  <div class="login-input">
    <span class="login-title">

    </span>
    <input class="login-input" type="text">
    <span class="login-error"></span>
  </div>
</template>

<script>
export default {
  name: 'LoginInput'
}
</script>

<style lang="scss" scoped>
  .login-input {
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
</style>
