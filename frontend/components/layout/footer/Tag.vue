<template>
  <nuxt-link class="tag-link" :to="'/' + tag">
    #{{ name }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    tag: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .tag-link {
    margin-right: 10px;
    border: 1px solid #666;
    border-radius: 8px;
    padding: 2px 10px 2px 10px;
    background-color: transparent;
    color: white;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 0.6rem;
    font-family: 'OpenSansBold';

    &:hover {
      background-color: white;
      border: 1px solid white;
      color: #666;
    }
  }
</style>
