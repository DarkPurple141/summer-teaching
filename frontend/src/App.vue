<template>
  <div id="app">
    <crumbs></crumbs>
    <router-view/>
    <AppFooter/>
  </div>
</template>

<script>
import AppFooter from '@/components/sub/Footer'
import Crumbs from '@/components/sub/Crumbs'
import HTTP from './http'

export default {
  name: 'app',
  components: { Crumbs, AppFooter }
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
