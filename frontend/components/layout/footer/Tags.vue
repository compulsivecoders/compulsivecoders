<template>
  <div class="tags">
    <FooterTitle title="Hot Tags" />
    <div class="tags-container">
      <Tag name="Maths" tag="maths" />
      <Tag name="Tech" tag="tech" />
      <Tag name="Debug" tag="debug" />
    </div>
  </div>
</template>

<script>
import FooterTitle from './FooterTitle'
import Tag from './Tag'
export default {
  components: { FooterTitle, Tag }
}
</script>

<style lang="scss" scoped>
</style>
