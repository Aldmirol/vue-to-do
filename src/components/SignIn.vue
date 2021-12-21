<template>
  <div class="sign-in">
    <div class="form-wrapper">
      <logo class="logo"/>
      <div class="form">
        <login-input
          :placeholder="$t('message.common.loginInput.placeholder')"
          :faqMessage="$t('message.common.loginInput.faqMessage')"
          :errorMessage="$t('message.common.loginInput.errorMessage')"
          @input="value => params.email = value"
        />
        <password-input
          :placeholder="$t('message.common.passwordInput.placeholder')"
          :faqMessage="$t('message.common.passwordInput.faqMessage')"
          :errorMessage="$t('message.common.passwordInput.errorMessage')"
          :marginTop="'2%'"
          @input="value => params.password = value"
        />
        <base-button
          :placeholder="$t('message.signIn.button')"
          :disabled="isButtonDisabled"
          @click="signIn"
          :spinnerSize="'25px'"
          :isLoading="isButtonSpinner"
        />
        <div class="register-container">
          <button class="register-button">
            <span>{{ $t('message.signIn.registration') }}</span>
          </button>
        </div>
      </div>
      <lang-switcher class="lang-switcher"/>
    </div>
  </div>
</template>

<script>
import BaseLogo from './base/BaseLogo.vue';
import LangSwitcher from './base/LangSwitcher.vue';
import { SET_AUTH } from '../store/module/auth/actions';
import { mapGetters } from 'vuex';
import LoginInput from './common/LoginInput.vue';
import 'firebase/firestore'

export default {
  name: 'SignIn',
  inject: ['$validator'],
  components: {
    logo: BaseLogo,
    LangSwitcher,
    LoginInput
  },
  inject: ['$httpService'],
  data() {
    return {
      params: {
        email: '',
        password: ''
      },
      isButtonSpinner: false
    }
  },
  async created() {
    const profile = await this.$httpService.profile.getProfile('jZxNgvAwUFWZi1KrazepsmS2w4E2');
    console.log(profile.data());
  },
  computed: {
    ...mapGetters(['isAutheficated', 'getProfile']),
    isEmptyFields() {
      return this.params.email.length === 0 || this.params.password.length === 0;
    },
    isHasFieldsError() {
      return this.$validator.errors.has('password-input') || this.$validator.errors.has('login-input');
    },
    isButtonDisabled() {
      return this.isEmptyFields || this.isHasFieldsError;
    }
  },
  methods: {
    async signIn() {
      this.isButtonSpinner = true;
      await this.$store.dispatch(SET_AUTH, this.params);
      this.isButtonSpinner = false;
    }
  }
}
</script>

<style lang="scss" scoped>
  .sign-in {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: $sign-in-bgc;
  }

  .form-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo {
    margin-top: 10%;
  }

  .form {
    height: 450px;
    width: 490px;
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #E0AE77;
    border-radius: 1.25rem;

    @include base-box-shadow;
  }

  .lang-switcher {
    position: absolute;
    top: 5%;
    right: 5%;
  }

  .register-container {
    width: 90%;
    height: 50px;
    margin-top: 5%;
    display: flex;
    justify-content: center;
    align-items: center;

    .register-button {
      width: 140px;
      height: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Noto Serif', serif;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0.05rem;
      text-shadow: $base-text-shadow;
      cursor: pointer;
      border: 2px solid $sign-in-bgc;
      border-radius: 10px;
      background-color: $sign-in-bgc;
      color: $gold-color;
      outline: none;
      transition: all 0.3s ease;

      @include non-selectable-text;
    }

    .register-button:hover {
      border-color: $gold-color;

      @include base-box-shadow;
    }
  }
</style>
