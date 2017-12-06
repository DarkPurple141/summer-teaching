<template>
  <div class="labs">
    <h1>Labs</h1>
    <div v-if="error">
      ERROR: {{ error }}
    </div>
    <div v-show="!this.labs.loaded">Loading content from database..</div>
    <!-- card for each lab -->
    <div class="container">
       <div class="lab" v-for="lab in this.labs" v-show="lab.active">
         <div class="lab-content">
            <h2>{{ lab.title }}</h2>
            <p>{{ lab.description }}</p>
            <router-link :to="{ path: lab.file }" class="lab-button" append>More</router-link>
         </div>
      </div>
   </div>
  </div>
</template>

<script>

export default {
  name: 'Labs',
  props: ['labs'],
  data () {
    return {
      error: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
   padding-left: 9%;
   padding-right: 9%;
   padding-bottom: 140px;
   display: flex;
   flex-flow: row wrap;
   justify-content: space-between;
}

.lab {
   flex: 1;
   margin: auto;
   width: auto;
   min-height: 200px;
   max-height: 200px;
   max-width: 220px;
   max-height: 220px;
   position: relative;
}

.lab-content {
   margin: auto;
   min-width: 180px;
   max-width: 180px;
   padding: 15px;
}

.lab-button {
   position: absolute;
   bottom: 10%;
   left: 40%;
}

p {
   text-align: center;
}

h1 {
   margin-bottom: 5px;
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
