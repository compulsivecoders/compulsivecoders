<template>
  <div class="columns">
    <div class="column is-8-desktop is-12-tablet">
      <div class="post-section">
        <h1 class="title">
          {{ post.title }}
        </h1>
        <p>Views: {{ post.views }}</p>
        <section>
          <!-- eslint-disable-next-line -->
          <div v-html="post.content" />
        </section>
      </div>
    </div>
    <div class="column is-hidden-touch">
      <CategoryPosts
        :tag="post.mainTag"
        theme="light"
      />
    </div>
  </div>
</template>

<script>
import 'highlight.js/styles/dracula.css'
import CategoryPosts from '../../components/commons/CategoryPosts'

function htmlDecode (input) {
  const e = document.createElement('textarea')
  e.innerHTML = input
  return e.value
}
export default {
  components: { CategoryPosts },
  asyncData ({ store, params, app: { $axios } }) {
    return $axios.get(`/posts/?category='${params.category}&slug=${params.slug}`)
      .then((data) => {
        return { post: data.data[0] }
      })
  },
  mounted () {
    // TODO Remove this code block as soon as Code block feature is available in CK Editor
    if (window) {
      const highlightJs = require('highlight.js')
      document.querySelectorAll('blockquote').forEach((block) => {
        const highlightedBlock = document.createElement('pre')
        const languageBlock = block.getElementsByTagName('p')[0]
        if (languageBlock) {
          const language = languageBlock.innerHTML
          block.removeChild(languageBlock)
          highlightedBlock.innerHTML =
            '<code class="hljs">' +
            highlightJs.highlight(language, htmlDecode(block.innerHTML.replace(/<p>/g, '').replace(/<\/p>/g, '\n'))).value +
            '</code>'
          block.parentNode.replaceChild(highlightedBlock, block)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    max-width: 90%;
  }
</style>
