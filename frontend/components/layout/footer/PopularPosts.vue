<template>
  <div class="popular-posts">
    <FooterTitle title="Popular posts" />
    <div v-if="posts" class="posts-container">
      <PostLink
        v-for="(post, index) in posts.slice(0,3)"
        :key="index"
        :image-src="post.thumbnail"
        :title="post.title"
        :main-tag="post.mainTag"
        :slug="post.slug"
        :date="post.date"
      />
    </div>
  </div>
</template>

<script>
import PostLink from '../../commons/PostLink'
import FooterTitle from './FooterTitle'
export default {
  components: { FooterTitle, PostLink },
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.$axios.get('/posts')
      .then((data) => {
        this.posts = data.data
      })
  }
}
</script>

<style lang="scss" scoped>
</style>
