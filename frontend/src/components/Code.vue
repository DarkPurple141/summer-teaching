<template>
<div class="container">
  <h1>{{ title }}</h1>
  <div v-if="msg" class="error">
    {{ msg }}
  </div>
  <!-- code cards go here-->
  <div class="files" v-for="file in files">
     <section>
        <h3>{{ file.name }}</h3>
        <pre>
           <code class="language-c">{{ file.code }}</code>
        </pre>
     </section>
  </div>
</div>

</template>

<script>
import HTTP from '../http'

export default {
  name: 'Code',
  data () {
    return {
      msg: 'Not loaded',
      files: []
    }
  },
  mounted () {
     HTTP.get(`api/labs/${this.$route.params.week}`)
     .then(response => {
        this.files = response.data
        this.msg = ""
     })
     .then(() => { Prism.highlightAll() })
     .catch(err => {
        this.msg = err
     })
  },
  computed: {
     title: function() {
        return `${this.$route.params.week}`
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
   margin: 0% 8%;
   padding-bottom: 150px;
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
