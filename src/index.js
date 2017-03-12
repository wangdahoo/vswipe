import Swipe from './Swipe'
import SwipeItem from './SwipeItem'

let VSwipe = {
  install: function (Vue, options) {
    Vue.component('swipe', Swipe)
    Vue.component('swipe-item', SwipeItem)
  }
}

export default VSwipe

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VSwipe)
}
