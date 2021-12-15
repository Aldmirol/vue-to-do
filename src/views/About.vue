<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="$router.push({ name: 'SignIn' })">Previous page</button>
  </div>
</template>

<script>
export default {
  name: 'About'
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
