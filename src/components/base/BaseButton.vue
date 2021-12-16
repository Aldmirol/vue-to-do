<template>
  <button class="base-button"
    :style="`width: ${width}; margin-top: ${marginTop}; height: ${height};
      background-color: ${bgColor}
    `"
    :disabled="disabled"
    :class="disabled ? 'disabled' : 'enabled'"
  >
    <span>{{ placeholder }}</span>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    placeholder: String,
    width: {
      type: String,
      default() {
        return '80%';
      }
    },
    marginTop: {
      type: String,
      default() {
        return '5%'
      }
    },
    height: {
      type: String,
      default() {
        return '70px';
      }
    },
    bgColor: {
      type: String,
      default() {
        return '#004247';
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .base-button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Noto Serif', serif;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.1rem;
    cursor: pointer;
    border: 1px solid $gold-color;
    border-radius: 5px;
    outline: none;
    color: $gold-color;

    @include base-box-shadow;

    span {
      text-shadow: $base-text-shadow;
    }
  }

  .disabled {
    opacity: 0.3;
  }

  .enabled:active {
    transform: scale(0.99);
  }
</style>

