<template>
<div>
  <div class="code">
    <!-- code card goes here-->
    {{ msg }}
  </div>
  <div class="files" v-for="file in files">
     <div v-html="file"></div>
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
      files: [
         '<p>Nothing here yet.</p>',
         '<p>Nothing here yet.</p>'
      ]
    }
  },
  mounted () {
     HTTP.get('api')
     .then(response => {
        this.msg = response.data.msg
     })
     .catch(err => {
        this.msg = err
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
