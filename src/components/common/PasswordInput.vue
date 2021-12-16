<template>
  <div class="password-input-wrapper"
    :style="`width: ${width}; margin-top: ${marginTop}`"
  >
    <div class="title-wrapper">
      <span class="password-title">
        {{ $t('message.common.passwordInput.title') }}
      </span>
    </div>
    <div class="input-wrapper" :class="{ 'has-error': hasPasswordError }">
      <input class="password-input" type="text"
        :class="{ 'visible': isShowPassword }"
        :placeholder="placeholder"
        v-model="inputValue"
        name="password-input"
        @input="$emit('input', inputValue)"
        v-validate="{ 'password-input': true }"
      >
      <div class="faq-container">
        <div class="password-eye">
          <i :class="`far fa-eye${isShowPassword ? '' : '-slash'}`"
            class="password-eye"
            @click="isShowPassword = !isShowPassword"
          ></i>
        </div>
        <i class="far fa-question-circle" @mouseover="showNotice = true" @mouseleave="showNotice = false">
          <transition name="fade">
            <div v-show="showNotice" class="notice">
              {{ faqMessage }}
            </div>
          </transition>
        </i>
      </div>
    </div>
    <div class="error-wrapper">
      <span class="password-error">
        {{ errorMessageText }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PasswordInput',
  inject: ['$validator'],
  props: {
    width: {
      type: String,
      default() {
        return '90%'
      }
    },
    marginTop: {
      type: String,
      default() {
        return '5%'
      }
    },
    placeholder: String,
    faqMessage: String,
    errorMessage: String
  },
  data() {
    return {
      showNotice: false,
      inputValue: null,
      isShowPassword: false
    }
  },
  computed: {
    errorMessageText() {
      return this.hasPasswordError ? this.errorMessage : ''
    },
    hasPasswordError() {
      return this.$validator.errors.has('password-input');
    }
  }
}
</script>

<style lang="scss" scoped>
  .password-input-wrapper {
    height: 110px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Noto Serif', serif;
  }

  .title-wrapper {
    height: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .password-title {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.05rem;
    color: $gold-color;
    text-shadow: $base-text-shadow;

    @include non-selectable-text;
  }

  .input-wrapper {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    border: 1px solid $thin-gold-color;
    border-radius: 5px;

    @include base-box-shadow;

    .password-input {
      width: 75%;
      box-sizing: border-box;
      padding-top: 2px;
      font-size: 20px;
      font-family: 'Bullet';
      border-radius: 5px;
      border: none;
      outline: none;
      background-color: inherit;
      color: $gold-color;
    }

    .password-input::placeholder {
      color: $thin-gold-color;
      font-family: 'Noto Serif', serif;
    }

    .visible {
      padding-top: 0;
      font-family: 'Noto Serif', serif;
    }

    .faq-container {
      width: 20%;
      display: flex;
      justify-content: space-around;
      align-items: center;

      i {
        position: relative;
        font-size: 20px;
        cursor: pointer;
        color: $thin-gold-color;
        text-shadow: $base-text-shadow;
      }

      .password-eye {
        height: 100%;
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;

        i {
          font-size: 21px;
        }
      }
    }
  }

  .notice {
    height: 110px;
    width: 240px;
    box-sizing: border-box;
    padding: 10px;
    position: absolute;
    top: -50px;
    right: -260px;
    font-size: 16px;
    font-weight: 100;
    letter-spacing: 0.05rem;
    text-shadow: $base-text-shadow;
    border: 1px solid $notice-color;
    border-radius: 15px;
    color: $gold-color;
    background-color: $notice-color;

    @include base-box-shadow;
  }

  .notice::after {
    content: "";
    position: absolute;
    left: -31px;
    bottom: 35px;
    border: 15px solid transparent;
    border-right: 15px solid $notice-color;
  }

  .error-wrapper {
    height: 25px;
    width: 100%;
    display: flex;
    align-items: flex-end;
    font-size: 15px;
    font-weight: 600;
    color: $error-color;
    text-shadow: 2px 1px 1px #080400;
  }

  .has-error {
    border-color: $error-color;
    box-shadow: 0px 0px 5px 3px rgb(124 23 32 / 80%);
  }
</style>
