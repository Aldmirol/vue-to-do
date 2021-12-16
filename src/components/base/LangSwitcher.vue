<template>
  <div @click="changeLang" class="lang-switcher">
    <span class="switcher-text">{{ currentLang }}</span>
  </div>
</template>

<script>
export default {
  name: 'LangSwitcher',
  data() {
    return {
      currentLang: this.$i18n.locale
    }
  },
  methods: {
    changeLang() {
      const targetLang = this.currentLang === 'en' ? 'ru' : 'en';
      this.$i18n.locale = targetLang;
      this.currentLang = targetLang;
    }
  }
}
</script>

<style lang="scss" scoped>
  .lang-switcher {
    width: 50px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid $gold-color;
    border-radius: 10px;
    cursor: pointer;

    @include base-box-shadow;
  }

  .lang-switcher:active {
    transform: scale(0.97);
  }

.switcher-text {
  font-family: 'Jos', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: $gold-color;
  text-shadow: $base-text-shadow;

  @include non-selectable-text;
}
</style>

