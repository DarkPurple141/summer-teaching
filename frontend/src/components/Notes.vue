<template>
   <div class="main">
     <div class="container">
       <h1>Notes</h1>
       <ol>
          <li v-for="post in posts">
             <router-link
             :to="{
                name: 'Post',
                params: {
                   title: post.name,
                   article: post.path
                }}">{{ post.name }}
             </router-link>
          </li>
       </ol>
     </div>
   </div>
</template>

<script>
export default {
  name: 'Notes',
  data () {
    return {
      posts: []
    }
  },
  mounted() {
     fetch('static/posts/meta.json', {
        credentials: 'same-origin'
     })
     .then(response => response.json())
     .then(data => {
        data.posts.forEach(item => {
           this.posts.push(item)
        })
     }).catch(err => {throw err})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
   padding-bottom: 200px;
}

h1, h2 {
  font-weight: normal;
}
ol, ul {
  font-size: 1.5rem;
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px;
}

</style>
