<template>
  <div class="tags">
    <FooterTitle title="Hot Tags" />
    <div class="tags-container">
      <Tag name="Maths" />
      <Tag name="Tech" />
      <Tag name="Debug" />
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
