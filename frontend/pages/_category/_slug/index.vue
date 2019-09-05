<template>
  <div class="columns">
    <div class="column">
      Slug: {{ post }}
    </div>
  </div>
</template>

<script>

export default {
  asyncData ({ store, params, app: { $axios } }) {
    return { slug: params.slug }
  }
}
</script>

<style>

</style>
