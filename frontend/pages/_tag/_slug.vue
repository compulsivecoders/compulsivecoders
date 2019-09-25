<template>
  <div class="container">
    <div class="section">
      <h1 class="title">
        {{ post.title }}
      </h1>
      <p>Views: {{ post.views }}</p>
      <section>
        <div v-html="post.content" />
      </section>
    </div>
  </div>
</template>

<script>

export default {
  asyncData ({ store, params, app: { $axios } }) {
    return $axios.get(`/posts/?category='${params.category}&slug=${params.slug}`)
      .then((data) => {
        return { post: data.data[0] }
      })
  }
}
</script>

<style>

</style>
