<template>
  <div class="popular-posts">
    <FooterTitle title="Popular posts" />
    <div class="posts-container">
      <Post
        image-src="images/heroku-edit-files.webp"
        link="/"
        title="How to Edit a File on Heroku Dynos using Nano or Vim"
        date="2 months ago"
      />
      <Post
        image-src="images/laradock-permission-denied.webp"
        link="/"
        title="Laradock: How to fix Permission denied issue"
        date="2 months ago"
      />
      <Post
        image-src="images/laravel-multiple-vendors.webp"
        link="/"
        title="How to Split Dependencies into Multiple Vendors using Laravel Mix"
        date="2 months ago"
      />
    </div>
  </div>
</template>

<script>
import FooterTitle from './FooterTitle'
import Post from './Post'
export default {
  components: { FooterTitle, Post }
}
</script>

<style lang="scss" scoped>
</style>
