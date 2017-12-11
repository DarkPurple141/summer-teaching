<template>
<div class="container">
  <h1>{{ title }}</h1>
  <div v-if="msg" class="error">
    {{ msg }}
  </div>
  <!-- code cards go here-->
  <div class="files"
         v-for="file in this.weeks[this.$route.params.week]">
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
  props: ['weeks'],
  data () {
    return {
      msg: ''
    }
  },
  beforeMount () {
     //let result = this.isLoaded(this.$route.params.week)
     let name = this.$route.params.week
     if (this.$root.$data.weeks[name] === undefined) {
        this.msg = "Loading content.."
        HTTP.get(`api/labs/${name}`)
        .then(response => {

          return response.data
       })
       .then(data =>  this.$emit('load', name, data, () => {
            this.msg = ""
            this.$forceUpdate(console.log("update done"))
       }))
       .then(() => Prism.highlightAll())
       .catch(err => {
          throw err
       })
     }
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
   margin: 0% 7%;
   padding-bottom: 150px;
}

@media (max-width:632px) {
   .container {
      margin: 0% 1%;
   }

   code {
      font-size: 0.8em;
   }
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
