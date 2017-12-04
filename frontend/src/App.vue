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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 20px;
}
</style>
