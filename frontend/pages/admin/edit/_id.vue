<template>
  <post-form
    :title="title"
    :slug="slug"
    :description="description"
    :main-tag="mainTag"
    :thumbnail="thumbnail"
    :cover="cover"
    :content="content"
    :author="author"
    :is-published="isPublished"
    :submit-function="updatePost"
  />
</template>

<script>
import PostForm from '../../../components/form/PostForm'

export default {
  components: { PostForm },
  data () {
    return {
      id: null,
      title: null,
      slug: null,
      description: null,
      mainTag: null,
      thumbnailUrl: null,
      coverUrl: null,
      content: null,
      author: null,
      isPublished: null
    }
  },
  asyncData ({ store, params, app: { $axios } }) {
    return $axios.get(`/posts/${params.id}`)
      .then((data) => {
        return data.data
      })
  },
  methods: {
    updatePost (payload) {
      this.$axios.put('/posts/' + this.id, payload).then((response) => {
        this.$router.push('/admin/edit/' + response.data.id)
      })
    }
  }
}
</script>

<style>

</style>
