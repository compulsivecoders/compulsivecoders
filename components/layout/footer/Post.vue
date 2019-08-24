<template>
  <div class="post">
    <a :href="link" class="thumbnail">
      <figure class="image is-1by1">
        <img :src="imageSrc" :alt="title">
      </figure>
    </a>
    <div class="post-content">
      <a :href="link">
        <h5 class="post-title">
          {{ title }}
        </h5>
      </a>
      <div class="post-meta">
        <div class="post-meta-content">
          <span class="post-date">
              {{ date }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['imageSrc', 'title', 'link', 'date']
}
</script>

<style lang="scss" scoped>
  .post {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #333;

    .thumbnail {
      width: 80px;
      display: inline-block;

      .image img {
        object-fit: cover;
        border-radius: 5px;
        border-color: transparent;
      }
    }

    .post-content {
      margin-left: 20px;
      display: inline-block;
      width: calc(100% - 110px);

      .post-title {
        color: white;
        font-family: 'MontserratSemiBold';
        font-size: 0.8rem;
        margin-bottom: 10px;
      }

      .post-date {
        color: #aaa;
        font-family: 'OpenSansRegular';
        font-size: 0.7rem;
      }
    }
  }
</style>
