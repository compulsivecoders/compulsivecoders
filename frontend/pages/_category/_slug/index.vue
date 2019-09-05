<template>
  <div class="columns">
    <div class="column">
      {{ post }}
    </div>
  </div>
</template>

<script>

export default {
  asyncData ({ store, params, app: { $axios } }) {
    return { post: params.slug }
  }
}
</script>

<style>

</style>
