<template>
  <div class="footer">
    <div class="footer-top-content">
      <div class="columns">
        <div class="column">
          <div class="footer-section">
            <AboutUs />
          </div>
          <div class="footer-section">
            <Tags />
          </div>
        </div>
        <div class="column">
          <div class="footer-section">
            <PopularPosts />
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom-content">
      <span class="mark">@CompulsiveCoders 2019</span>
    </div>
  </div>
</template>

<script>
import AboutUs from './footer/AboutUs'
import Tags from './footer/Tags'
import PopularPosts from './footer/PopularPosts'
export default {
  components: { AboutUs, Tags, PopularPosts }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/theme.scss';

  .footer {
    width: 100%;
    min-height: 100px;
    background-color: #1a1a1a;
    color: white;
    padding: 0px 100px 0px 100px;

    @include mobile {
      padding: 0px 30px 0px 30px;
    }

    .column {
      padding: 2rem;
    }

    .footer-top-content {
      padding: 80px 0px 30px 0px;
      border-bottom: 1px solid #333;
    }

    .footer-bottom-content {
      padding: 50px 0px 50px 0px;
      text-align: right;
      font-family: 'MontserratSemiBold';
      font-size: 0.8rem;
      color: #aaa;
    }

    .footer-section {
      margin-bottom: 30px;
    }
  }
</style>
