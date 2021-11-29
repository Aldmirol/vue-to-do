<template>
  <h1>Hello World</h1>
</template>

<script>
import { SET_AUTH } from '../store/module/auth/actions';
import { mapGetters } from 'vuex';

export default {
  name: 'SignIn',
  computed: {
    ...mapGetters(['isAutheficated'])
  },
  async created() {
    await this.$store.dispatch(SET_AUTH);
  }
}
</script>
