import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import FullScreen from '@/components/FullScreen'
import ScrollingContent from '@/components/ScrollingContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/fullscreen',
      name: 'FullScreen',
      component: FullScreen
    },
    {
      path: '/scrolling',
      name: 'ScrollingContent',
      component: ScrollingContent
    }
  ]
})
