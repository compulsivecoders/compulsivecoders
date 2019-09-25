<template>
  <div class="columns">
    <div class="column">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input v-model="internalTitle" class="input is-small" type="text" placeholder="Title">
        </div>
      </div>
      <div class="field">
        <label class="label">Slug</label>
        <div class="control">
          <input v-model="internalSlug" class="input is-small" type="text" placeholder="your-slug">
        </div>
      </div>
      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <input v-model="internalDescription" class="input is-small" type="text" placeholder="Description">
        </div>
      </div>
      <div class="field">
        <label class="label">Main Tag</label>
        <div class="control">
          <div class="select is-small">
            <select v-model="internalMainTag">
              <option>Tech</option>
              <option>Maths</option>
              <option>Debug</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="label">Thumbnail URL</label>
        <div class="control">
          <input v-model="internalThumbnailUrl" class="input is-small" type="text" placeholder="https://">
        </div>
      </div>
      <div class="field">
        <label class="label">Cover URL</label>
        <div class="control">
          <input v-model="internalCoverUrl" class="input is-small" type="text" placeholder="https://">
        </div>
      </div>
      <div class="field">
        <label class="label">Content</label>
        <div class="control">
          <textarea v-model="internalContent" class="textarea is-small" placeholder="<h1>Hello World</h1>" />
        </div>
      </div>
      <div class="field">
        <label class="label">Author</label>
        <div class="control">
          <input v-model="internalAuthor" class="input is-small" type="text" placeholder="Albert Einstein">
        </div>
      </div>
      <div class="field">
        <label class="label">Secret</label>
        <div class="control">
          <input v-model="internalSecret" class="input is-small" type="text" placeholder="Secret Password">
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link" @click="submit">
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
    },
    submitFunction: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {
      internalTitle: null,
      internalSlug: null,
      internalDescription: null,
      internalMainTag: null,
      internalThumbnailUrl: null,
      internalCoverUrl: null,
      internalContent: null,
      internalAuthor: null,
      internalSecret: null
    }
  },
  methods: {
    submit () {
      this.submitFunction({
        title: this.internalTitle,
        slug: this.internalSlug,
        description: this.internalDescription,
        mainTag: this.internalMainTag,
        thumbnail: this.internalThumbnailUrl,
        cover: this.internalCoverUrl,
        content: this.internalContent,
        author: this.internalAuthor,
        secret: this.internalSecret
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
