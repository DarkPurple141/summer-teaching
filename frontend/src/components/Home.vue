<template>
  <div class="home">
    <h1>Teaching Repository</h1>
    <div v-for="card in cards">
      <article>
       <div class="card">
         <h2>{{ card.title }}</h2>
         <p>{{ card.description }}</p>
         <router-link :to="{ path: card.url }">More</router-link>
       </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      cards: [
         {
            title: "Labs",
            description: "Code from every week's labs in one place",
            url: '/code'
         },
         {
            title: "Notes",
            description: "Bits of pieces of things that may be worth thinking about!",
            url: '/notes'
         }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.home {
   margin: 10%;
}

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
