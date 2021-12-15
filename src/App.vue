<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: null
    }
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

* {
  padding: 0;
  margin: 0;
  outline: none;
}

#app {
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
</style>
