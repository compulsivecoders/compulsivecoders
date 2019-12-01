<template>
  <div :class="theme" class="post">
    <a :href="link" class="thumbnail">
      <figure class="image is-1by1">
        <img :src="imageSrc" :alt="title">
      </figure>
    </a>
    <div class="post-content">
      <a :href="routeLink">
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
  props: {
    title: {
      type: String,
      default: ''
    },
    imageSrc: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    mainTag: {
      type: String,
      default: ''
    },
    slug: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'dark'
    }
  },
  computed: {
    routeLink () {
      return `/${this.mainTag}/${this.slug}`
    }
  }
}
</script>

<style lang="scss" scoped>
  .post {
    padding-bottom: 20px;
    margin-bottom: 20px;

    &.dark {
      .post-title {
        color: white;
      }
      border-bottom: 1px solid #333;
    }

    &.light {
      .post-title {
        color: #666;
      }
      border-bottom: 1px solid #eee;
    }

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
