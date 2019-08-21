<template>
  <div class="footer">
    <div class="footer-top-content">
      <div class="columns">
        <div class="column">
          <AboutUs />
        </div>
        <div class="column">
          <AboutUs />
        </div>
      </div>
    </div>
    <hr>
    <div class="footer-bottom-content">
      <span class="mark">Compulsive Coders 2019</span>
    </div>
  </div>
</template>

<script>
import AboutUs from '../footer/AboutUs'
export default {
  components: { AboutUs }
}
</script>

<style lang="scss" scoped>
  .footer {
    width: 100%;
    min-height: 100px;
    background-color: #1a1a1a;
    color: white;
    font-weight: bold;
    padding-top: 100px;
  }
</style>
