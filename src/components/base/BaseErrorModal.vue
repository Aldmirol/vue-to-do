<template>
  <transition name="fade">
    <div class="error-wrapper">
      <div class="error-modal">
        <div class="error-title">{{ $t('message.errorModal.title') }}</div>
        <div class="error-message">{{ errorMessage }}</div>
        <base-button
          :width="'50%'"
          :height="'20%'"
          :placeholder="'OK'"
          @click="$emit('close')"
        />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'BaseErrorModal',
  props: {
    errorMessage: String
  }
}
</script>

<style lang="scss" scoped>
  .error-wrapper {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(3px);
  }

  .error-modal {
    height: 300px;
    width: 320px;
    position: relative;
    z-index: 6;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-family: 'Noto Serif', serif;
    font-weight: 600;
    font-size: 18px;
    text-shadow: $base-text-shadow;
    border: 2px solid $gold-color;
    border-radius: 12px;
    background-color: $sign-in-bgc;
    color: $gold-color;
  }

  .error-title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    letter-spacing: 0.1rem;
    color: $error-color;
  }
</style>

