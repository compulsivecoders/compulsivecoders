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
  asyncData ({ store, params, app: { $axios } }) {
    return { slug: params.slug, category: params.category }
  }
}
</script>

<style>

</style>
