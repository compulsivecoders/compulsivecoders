<template>
  <div class="popular-posts">
    <FooterTitle title="Popular posts" />
    <div v-if="posts" class="posts-container">
      <Post
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
import FooterTitle from './FooterTitle'
import Post from './Post'
export default {
  components: { FooterTitle, Post },
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
