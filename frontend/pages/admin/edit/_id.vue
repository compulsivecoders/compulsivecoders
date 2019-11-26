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
  />
</template>

<script>
import PostForm from '../../../components/form/PostForm'

export default {
  components: { PostForm },
  data () {
    return {
      title: null,
      slug: null,
      description: null,
      mainTag: null,
      thumbnailUrl: null,
      coverUrl: null,
      content: null,
      author: null
    }
  },
  asyncData ({ store, params, app: { $axios } }) {
    return $axios.get(`/posts/${params.id}`)
      .then((data) => {
        return data.data
      })
  }
}
</script>

<style>

</style>
