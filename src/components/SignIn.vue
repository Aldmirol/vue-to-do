<template>
  <div class="sign-in">
    <div class="form-wrapper">
      <logo class="logo"/>
      <div class="form"></div>
    </div>
  </div>
</template>

<script>
import BaseLogo from './base/BaseLogo.vue';
import { SET_AUTH } from '../store/module/auth/actions';
import { mapGetters } from 'vuex';

export default {
  name: 'SignIn',
  components: {
    logo: BaseLogo
  },
  computed: {
    ...mapGetters(['isAutheficated'])
  },
  async created() {
    await this.$store.dispatch(SET_AUTH);
  }
}
</script>

<style lang="scss" scoped>
  .sign-in {
    height: 100%;
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
    border: 2px solid #E0AE77;
    border-radius: 1.25rem;
    -webkit-box-shadow: 0px 0px 10px 5px rgb(29 29 30 / 20%);
    -moz-box-shadow: 0px 0px 10px 5px rgb(29 29 30 / 20%);
    box-shadow: 0px 0px 10px 5px rgb(29 29 30 / 20%);
  }
</style>
