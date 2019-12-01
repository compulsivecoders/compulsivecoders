<template>
  <div class="super-container">
    <div class="main-container">
      <NavBar />
      <div class="content-container">
        <nuxt />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from '~/components/layout/NavBar.vue'
import Footer from '~/components/layout/Footer.vue'
export default {
  components: {
    NavBar, Footer
  }
}
</script>

<style lang="scss">
@import '../assets/theme';

.main-container {
  @include until-widescreen {
    margin-top: 0px;
  }

  margin-top: 100px;
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
