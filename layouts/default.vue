<template>
  <div class="main-container">
    <NavBar />
    <div class="content-container">
      <nuxt />
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/layout/NavBar.vue'
export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
@import '../assets/theme';

.main-container {
  margin-top: 100px;
  border-radius: 8px;
  max-width: 1200px;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 6px 30px rgba(0,0,0,0.1);
}

.content-container {
  background-color: white;
  padding: 30px;
}
</style>
