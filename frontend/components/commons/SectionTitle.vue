<template>
  <div class="title-container">
    <h3 class="title-hr">
      {{ title }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .title-container {
    position: relative;
    overflow: hidden;
    width: 100%;
  }

  h3 {
    color: #666;
    font-size: 1.4rem;
    font-family: 'MontserratRegular';
    font-weight: 700;
    position: relative;
    margin-bottom: 30px;

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      width: 100%;
      height: 1px;
      background-color: rgba(255,255,255,.12);
      margin-left: 20px;
    }
  }
</style>
