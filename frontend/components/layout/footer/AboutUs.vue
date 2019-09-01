<template>
  <div class="about-us">
    <FooterTitle title="Who we are" />
    <h4 class="section-subtitle">
      Two Software Engineers passionate about modern web technologies
    </h4>
    <p class="section-content">
      Compulsive coders is more than a blog. We  experiment new web technologies from hosting to frontend, and wanto to share as much as we can with the community.
      We are two experienced software engineers who love to code and create apps and we hope that this website will help you in your own developer journey.
    </p>
    <p class="section-content">
      Gilbert & Charles.
    </p>
  </div>
</template>

<script>
import FooterTitle from './FooterTitle'
export default {
  components: { FooterTitle }
}
</script>

<style lang="scss" scoped>
  .section-subtitle {
    font-family: 'OpenSansBoldItalic';
    font-size: 1.1rem;
    margin-bottom: 10px;
  }

  .section-content {
    font-family: 'OpenSansItalic';
    font-size: 0.8rem;
    color: #ccc;
  }
</style>
