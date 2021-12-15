<template>
  <div class="base-logo">
    <span class="title">TO DO LIST</span>
    <div class="line"></div>
    <span class="description">PLAN EVERYTHING</span>
  </div>
</template>

<script>
export default {
  name: 'BaseLogo'
}
</script>

<style lang="scss" scoped>
  .base-logo {
    height: 270px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Jos';
    color: #E0AE77;
    background-color: #3A444F;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 10px -5px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 0px 10px -5px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 0px 10px -5px rgba(34, 60, 80, 0.2);
  }

  .title {
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 0.2rem;
    text-shadow: 2px 1px 1px #E0AE77;
  }

  .line {
    width: 90%;
    height: 2px;
    margin: 15px 0 15px 0;
    background-color: #E0AE77;
    border-radius: 2px;
  }

  .description {
    font-size: 20px;
    font-weight: 100;
    letter-spacing: 0.2rem;
  }
</style>
