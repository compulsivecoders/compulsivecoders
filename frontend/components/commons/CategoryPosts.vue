<template>
  <div class="category-posts">
    <SectionTitle title="Posts in same category" />
    <div v-if="posts" class="posts-container">
      <PostLink
        v-for="(post, index) in posts.slice(0,3)"
        :key="index"
        :image-src="post.thumbnail"
        :title="post.title"
        :main-tag="post.mainTag"
        :slug="post.slug"
        :date="post.date"
        theme="light"
      />
    </div>
  </div>
</template>

<script>
import PostLink from './PostLink'
import SectionTitle from './SectionTitle'

export default {
  components: { SectionTitle, PostLink },
  props: {
    tag: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.$axios.get('/tags/' + this.tag + '/posts')
      .then((data) => {
        this.posts = data.data
      })
  }
}
</script>

<style lang="scss" scoped>
</style>
