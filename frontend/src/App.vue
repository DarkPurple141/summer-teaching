<template>
  <div id="app">
    <crumbs></crumbs>
    <router-view :labs="this.$root.$data.labs"
                 :weeks="this.$root.$data.weeks"
                 @load="addToCache" />
    <AppFooter/>
  </div>
</template>

<script>
import AppFooter from '@/components/sub/Footer'
import Crumbs from '@/components/sub/Crumbs'
import HTTP from './http'

export default {
  name: 'app',
  components: { Crumbs, AppFooter },
  methods: {
     addToCache: function(name, data, cb) {
        this.$root.$data.weeks[name] = data
        cb()
     }
 }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: medium;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 30px;
}

h1, h2, h3, h4, h5 {
   font-weight: 400;
   text-align: center;
}

h1, h2 {
   line-height: 1.2;
}

a:hover {
   text-decoration: none;
}

a:active {
   color: #62c090;
}

</style>
