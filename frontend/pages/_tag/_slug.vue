<template>
  <div class="container">
    <div class="section">
      {{ post.title }}
    </div>
  </div>
</template>

<script>

export default {
  asyncData ({ store, params, app: { $axios } }) {
    return $axios.get(`/posts/?category='${params.category}&slug=${params.slug}`)
      .then((data) => {
        return { post: data.data }
      })
  }
}
</script>

<style>

</style>
