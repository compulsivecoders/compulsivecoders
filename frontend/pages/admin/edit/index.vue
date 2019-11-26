<template>
  <post-form />
</template>

<script>
import PostForm from '../../../components/form/PostForm'

export default {
  components: { PostForm },
  asyncData ({ store, params, app: { $axios } }) {
    return $axios.get(`/posts/${params.id}`)
      .then((data) => {
        return { post: data.data[0] }
      })
  }
}
</script>

<style>

</style>
