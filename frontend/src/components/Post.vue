<template>
  <section class="post">
     {{ post }}
     <article v-html="content">
     </article>
</section>
</template>

<script>
import showdown from 'showdown'
const converter = new showdown.Converter()

export default {
  name: 'Post',
  props: {
      post: {
         type: Object
      }
  },
  data () {
    return {
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
     .then(() => Prism.highlightAll())
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

article {
   margin: 1em 3em 150px 3em;
   padding: 1em 10% 1em 10%;
   text-align: left;
   /*box-shadow: 1px 0px 3px 3px #cccccc;*/
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
