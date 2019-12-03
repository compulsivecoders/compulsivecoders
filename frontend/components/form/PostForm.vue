<template>
  <div class="columns">
    <div class="column">
      <div class="columns no-padding">
        <div class="column is-9">
          <div class="field">
            <label class="label">Title</label>
            <div class="control">
              <input v-model="internalTitle" class="input is-small" type="text" placeholder="Title">
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label class="label">Published</label>
            <div class="control">
              <input v-model="internalIsPublished" type="checkbox">&nbsp;Published
            </div>
          </div>
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
          <textarea v-model="internalDescription" class="textarea is-small" type="text" placeholder="Description" rows="2" />
        </div>
      </div>
      <div class="field">
        <label class="label">Main Tag</label>
        <div class="control">
          <div class="select is-small">
            <select v-model="internalMainTag">
              <option value="tech">
                Tech
              </option>
              <option value="maths">
                Maths
              </option>
              <option value="debug">
                Debug
              </option>
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
          <client-only placeholder="Loading editor">
            <ckeditor v-model="internalContent" :editor="editor" :config="{}" />
          </client-only>
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
    description: {
      type: String,
      default: ''
    },
    mainTag: {
      type: String,
      default: ''
    },
    thumbnail: {
      type: String,
      default: ''
    },
    cover: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    isPublished: {
      type: Boolean,
      default: false
    },
    submitFunction: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {
      editor: null,
      internalTitle: null,
      internalSlug: null,
      internalDescription: null,
      internalMainTag: null,
      internalThumbnailUrl: null,
      internalCoverUrl: null,
      internalContent: null,
      internalAuthor: null,
      internalSecret: null,
      internalIsPublished: null
    }
  },
  mounted () {
    this.internalTitle = this.title
    this.internalSlug = this.slug
    this.internalDescription = this.description
    this.internalMainTag = this.mainTag
    this.internalThumbnailUrl = this.thumbnail
    this.internalCoverUrl = this.cover
    this.internalContent = this.content
    this.internalAuthor = this.author
    this.internalIsPublished = this.isPublished
    if (window) {
      this.editor = require('@ckeditor/ckeditor5-build-balloon')
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
        secret: this.internalSecret,
        isPublished: this.internalIsPublished
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .column {
    max-width: 100%;
  }
</style>
