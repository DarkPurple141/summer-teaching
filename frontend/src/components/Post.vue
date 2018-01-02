<template>
  <section class="post">
     <h1>{{ title }}</h1>
     <article v-html="content">
     </article>
</section>
</template>

<script>
import showdown from 'showdown'
const converter = new showdown.Converter()

export default {
  name: 'Post',
  data () {
    return {
      title: this.$route.params.title,
      content: ''
     }
  },
  mounted() {
     fetch(`static/posts/${this.$route.params.article}`, {
        credentials: 'same-origin'
     })
     .then(response => response.text())
     .then(data => {
        this.content = converter.makeHtml(data)
     })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
