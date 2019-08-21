<template>
  <div class="card">
    <div class="card-image">
      <figure class="image clickable" :class="ratio">
        <img :src="imageSrc" :alt="title">
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <div class="card-tag">
          {{ tag }}
        </div>
        <h2 class="card-title">
          {{ title }}
        </h2>
        {{ description }}
      </div>
    </div>
    <div class="card-footer">
      <span class="publication-date">{{ date }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'imageSrc', 'description', 'link', 'title', 'ratio', 'tag', 'date'
  ]

}
</script>

<style lang="scss" scoped>
  @import '../../assets/colors.scss';

  .card {
    .card-tag {
      font-family: 'MontserratSemiBold';
      color: #0074D9;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      font-size: 0.8rem;
    }

    .card-title {
      font-family: 'MontserratSemiBold';
      font-size: 1.7rem;
      margin-top: 5px;
      margin-bottom: 20px;
      color: #555;
    }

    .card-content {
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 10px;
      font-size: 0.9rem;
      line-height: 1.7rem;
    }

    .card-image {
      overflow: hidden;
      img {
        object-fit: cover;
        opacity: 0.9;

        &:hover {
          opacity: 1;
        }
      }
    }

    .card-footer {
      padding-bottom: 20px;

      .publication-date {
        color: $grey;
        font-size: 0.75rem;
      }
    }

    margin-bottom: 30px;
    border-bottom: 1px solid #eee;
  }
</style>
