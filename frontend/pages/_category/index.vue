<template>
  <div class="columns">
    <div class="column">
      <Card
        v-for="(post, index) in posts.slice(0,3)"
        :key="index"
        :ratio="randomRatio()"
        :image-src="post.thumbnail"
        :title="post.title"
        :description="post.description"
        :category="post.category"
        :tag="post.tag"
        :date="post.date"
      />
    </div>
    <div class="column">
      <Card
        v-for="(post, index) in posts.slice(3,6)"
        :key="index"
        :ratio="randomRatio()"
        :image-src="post.thumbnail"
        :title="post.title"
        :description="post.description"
        :category="post.category"
        :tag="post.tag"
        :date="post.date"
      />
    </div>
    <div class="column">
      <Card
        v-for="(post, index) in posts.slice(6,9)"
        :key="index"
        :ratio="randomRatio()"
        :image-src="post.thumbnail"
        :title="post.title"
        :description="post.description"
        :category="post.category"
        :date="post.date"
        :slug="post.slug"
      />
    </div>
  </div>
</template>

<script>
import Card from '../../components/commons/Card'

export default {
  components: {
    Card
  },
  asyncData ({ store, params, app: { $axios } }) {
    return $axios.get('/posts/?category=' + params.category)
      .then((data) => {
        return { posts: data.data }
      })
  },
  methods: {
    randomRatio () {
      const availableRatio = ['is-1by1', 'is-4by3', 'is-4by5']
      const randomIndex = Math.floor(Math.random() * 3)
      return availableRatio[randomIndex]
    }
  }
}
</script>

<style>

</style>
