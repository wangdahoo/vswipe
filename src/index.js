import Swipe from './Swipe'
import SwipeItem from './SwipeItem'

let VueSwipe = {
  install: function (Vue, options) {
    Vue.component('swipe', Swipe)
    Vue.component('swipe-item', SwipeItem)
  }
}

export default VueSwipe

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueSwipe)
}
