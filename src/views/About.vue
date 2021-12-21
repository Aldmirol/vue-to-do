<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="$router.push({ name: 'SignIn' })">Previous page</button>
  </div>
</template>

<script>
import { GET_PROFILE } from '../store/module/profile/actions';
import { mapGetters } from 'vuex';

export default {
  name: 'About',
  created() {
    const uid = localStorage.getItem('uid');

    this.$store.dispatch(GET_PROFILE, uid);
  },
  data() {
    return {
      profile: {}
    }
  },
  computed: {
    ...mapGetters(['getProfile'])
  }
}
</script>

<style lang="scss" scoped>
  .about {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(245, 166, 166);
  }
</style>
