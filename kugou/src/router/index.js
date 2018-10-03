import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NewSong from '@/views/new-song/new-song'
import Rank from '@/views/rank/rank'
import Search from '@/views/search/search'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path:'/search',
      name:'Search',
      components:{
        default:Search
      }
    },
  ]
})
