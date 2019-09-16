<template>
  <post-form
    :submit-function="createPost"
  />
</template>

<script>
import PostForm from '../../components/form/PostForm'

export default {
  components: { PostForm },
  asyncData ({ store, params, app: { $axios } }) {
    return { slug: params.slug, category: params.category }
  },
  methods: {
    createPost (payload) {
      this.$axios.post('/posts', payload)
    }
  }
}
</script>

<style>

</style>
