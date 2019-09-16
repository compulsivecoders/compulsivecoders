<template>
  <div class="columns">
    <div class="column">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input class="input is-small" type="text" placeholder="Title">
        </div>
      </div>
      <div class="field">
        <label class="label">Slug</label>
        <div class="control">
          <input class="input is-small" type="text" placeholder="your-slug">
        </div>
      </div>
      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <input class="input is-small" type="text" placeholder="your-slug">
        </div>
      </div>
      <div class="field">
        <label class="label">Category</label>
        <div class="control">
          <div class="select is-small">
            <select>
              <option>Tech</option>
              <option>Debug</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="label">Thumbnail URL</label>
        <div class="control">
          <input class="input is-small" type="text" placeholder="https://">
        </div>
      </div>
      <div class="field">
        <label class="label">Cover URL</label>
        <div class="control">
          <input class="input is-small" type="text" placeholder="https://">
        </div>
      </div>
      <div class="field">
        <label class="label">Content</label>
        <div class="control">
          <textarea class="textarea is-small" placeholder="<h1>Hello World</h1>" />
        </div>
      </div>
      <div class="field">
        <label class="label">Author</label>
        <div class="control">
          <input class="input is-small" type="text" placeholder="Albert Einstein">
        </div>
      </div>
      <div class="field">
        <label class="label">Secret</label>
        <div class="control">
          <input class="input is-small" type="text" placeholder="Secret Password">
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">
            Save
          </button>
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
    slug: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/theme.scss';

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

      .image {
        @include mobile {
          padding-top: 300px;
        }
      }

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
