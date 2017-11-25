<template>
  <div class="labs">
    <h1>Labs</h1>
    <div v-if="error">
      ERROR: {{ error }}
    </div>
    <!-- card for each lab -->
    <div class="lab" v-for="lab in labs">
      <div class="lab-content">
         <h3>{{ lab.title }}</h3>
         <p>{{ lab.description }}</p>
         <router-link :to="{ path: 'code/' + lab.path }">More</router-link>
      </div>
   </div>
  </div>
</template>

<script>
import HTTP from '../http'

export default {
  name: 'Labs',
  data () {
    return {
      labs: [],
      error: false
    }
  },
  mounted () {
     HTTP.get('api/labs')
     .then(response => {
        response.data.forEach(item => {
           this.labs.push({
             title: item.name,
             path: item.path,
             description: "Lorem Ipsum"
          })
        })
     })
     .catch(err => {
        this.error = err
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
