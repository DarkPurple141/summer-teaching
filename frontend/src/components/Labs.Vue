<template>
  <div class="labs">
    <h1>Labs</h1>
    <div v-if="error">
      ERROR: {{ error }}
    </div>
    <div v-show="!loaded">LOADING!</div>
    <!-- card for each lab -->
    <div class="container">
       <div class="lab" v-for="lab in labs">
         <div class="lab-content">
            <h2>{{ lab.title }}</h2>
            <p>{{ lab.description }}</p>
            <router-link :to="{ path: lab.file }" append>More</router-link>
         </div>
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
      error: false,
      loaded: false
    }
  },
  mounted () {
     HTTP.get('api/labs')
     .then(response => {
        response.data.results.forEach(item => {
           this.labs.push({
             title: item.name,
             path: item.path,
             file: item.file,
             description: "Pending..."
          })
        })
        this.loaded = true
     })
     .then(() => {
        Promise.all(this.labs.map(item => {
           return HTTP.get(`api/${item.path}/meta.json`)
        }))
        .then((args) => {
           args.forEach((res, index) => {
             this.labs[index].description = res.data.description
           })
        })
        .catch(err => {
           throw err
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

.container {
   padding: 50px;
   display: flex;
   flex-flow: row wrap;
   justify-content: space-between;
}

.lab {
   flex: 1;
   margin: 15px;
   width: auto;
   min-height: 200px;
   min-height: 200px;
   max-width: 220px;
   max-height: 220px;
}

.lab-content {
   min-width: 180px;
   max-width: 180px;
   padding: 15px;
}

p {
   text-align: center;
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
