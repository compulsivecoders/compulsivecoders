<template>
  <post-form />
</template>

<script>
import PostForm from '../../components/form/PostForm'

export default {
  components: { PostForm },
  asyncData ({ store, params, app: { $axios } }) {
    return { slug: params.slug, category: params.category }
  }
}
</script>

<style>

</style>
