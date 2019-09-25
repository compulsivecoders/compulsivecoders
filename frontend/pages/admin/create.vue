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
    return { slug: params.slug, mainTag: params.mainTag }
  },
  methods: {
    createPost (payload) {
      this.$axios.post('/posts', payload).then((response) => {
        this.$router.push('/admin/edit/' + response.data.id)
      })
    }
  }
}
</script>

<style>

</style>
