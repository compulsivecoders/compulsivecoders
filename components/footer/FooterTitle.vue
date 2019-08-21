<template>
  <div class="title-container">
    <h3 class="title-hr">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style lang="scss" scoped>
  .title-container {
    position: relative;
    overflow: hidden;
  }

  h3 {
    color: white;
    font-size: 1.4rem;
    font-family: 'MontserratRegular';
    position: relative;
    margin-bottom: 20px;

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
