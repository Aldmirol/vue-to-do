<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view/>
    </transition>
    <error-modal
      v-if="isError"
      :errorMessage="getError"
      @close="closeErrorModal"
    />
  </div>
</template>

<script>
import HttpService from '@/services/http/index';
import { mapGetters } from 'vuex';
import BaseErrorModal from './components/base/BaseErrorModal.vue';
import {PURGE_ERROR} from './store/module/auth/actions';
export default {
  components: {
    'error-modal': BaseErrorModal
  },
  provide: {
    $httpService: new HttpService()
  },
  data() {
    return {
      transitionName: null
    }
  },
  computed: {
    ...mapGetters(['getError']),
    isError() {
      return this.getError.length !== 0;
    }
  },
  methods: {
    closeErrorModal() {
      this.$store.dispatch(PURGE_ERROR);
    }
  },
  created() {
    this.$router.push({ name: 'About' })
      .catch(e => {
        console.log(e);
      });
  },
  watch: {
    $route(to, from) {
      this.transitionName = to.name === 'About' ? 'slide-left' : 'slide-right';
    }
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Jos';
  src: url('./assets/fonts/JosefinSlab.ttf');
}
@font-face {
  font-family: 'Bullet';
  src: url('./assets/fonts/bullet.otf');
}

* {
  padding: 0;
  margin: 0;
  outline: none;
}

#app,
body {
  height: 100vh;
  width: 100vw;
}

.slide-left-leave-active,
.slide-left-enter-active {
  transition: 0.15s;
}
.slide-left-enter {
  transform: translate(100%, 0);
}
.slide-left-leave-to {
  transform: translate(-100%, 0);
}

.slide-right-leave-active,
.slide-right-enter-active {
  transition: 0.15s;
}
.slide-right-enter {
  transform: translate(-100%, 0);
}
.slide-right-leave-to {
  transform: translate(100%, 0);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
