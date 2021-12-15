<template>
  <div class="sign-in">
    <div class="form-wrapper">
      <logo class="logo"/>
      <div class="form"></div>
      <span>{{ $t('message.hello') }}</span>
      <lang-switcher class="lang-switcher"/>
    </div>
  </div>
</template>

<script>
import BaseLogo from './base/BaseLogo.vue';
import LangSwitcher from './base/LangSwitcher.vue';
import { SET_AUTH } from '../store/module/auth/actions';
import { mapGetters } from 'vuex';

export default {
  name: 'SignIn',
  components: {
    logo: BaseLogo,
    LangSwitcher
  },
  computed: {
    ...mapGetters(['isAutheficated'])
  },
  async created() {
    await this.$store.dispatch(SET_AUTH);
  },
  methods: {
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
    background-color: #004247;
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
    border: 2px solid #E0AE77;
    border-radius: 1.25rem;

    @include base-box-shadow;
  }

  .lang-switcher {
    position: absolute;
    top: 5%;
    right: 5%;
  }
</style>
