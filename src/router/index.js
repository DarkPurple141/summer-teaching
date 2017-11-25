import Vue from 'vue'
import Router from 'vue-router'
import Notes from '@/components/Notes'
import Home from '@/components/Home'
import Post from '@/components/Post'
import Labs from '@/components/Labs'
import Code from '@/components/Code'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/notes',
      name: 'Notes',
      component: Notes
    },
    {
      path: '/notes/:article',
      name: 'Post',
      component: Post
    },
    {
      path: '/code',
      name: 'Labs',
      component: Labs
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/code/:week',
      name: 'Code',
      component: Code
    }
  ]
})
