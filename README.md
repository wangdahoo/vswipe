# VSwipe.js

> Brad Birdsall's Swipe.js as a Vue 2.0 component.

## Demo

https://wangdahoo.github.io/vswipe/

## Install

```bash
npm i vswipe -S
```

```js
import Vue from 'vue'
import VSwipe from 'vswipe'
Vue.use(VSwipe)
```

> if you include `vswipe.js` by a `<script>` tag, you can use it directly.

## Usage

VSwipe only need a simple pattern too. Here's an example:

```html
<swipe>
  <swipe-item><b>0</b></swipe-item>
  <swipe-item><b>1</b></swipe-item>
  <swipe-item><b>2</b></swipe-item>
</swipe>
```

## Config Options

- startSlide Integer (default:0) - index position Swipe should start at

- speed Integer (default:300) - speed of prev and next transitions in milliseconds.

- auto Integer - begin with auto slideshow (time in milliseconds between slides)

- continuous Boolean (default:true) - create an infinite feel with no endpoints

- disableScroll Boolean (default:false) - stop any touches on this container from scrolling the page

- stopPropagation Boolean (default:false) - stop event propagation

- callback Function - runs at slide change.

- transitionEnd Function - runs at the end slide transition.

#### Example

```html
<swipe :options="swipeOptions">
  <swipe-item><b>0</b></swipe-item>
  <swipe-item><b>1</b></swipe-item>
  <swipe-item><b>2</b></swipe-item>
</swipe>
<script>
  export default {
    data () {
      return {
        swipeOptions: {
          startSlide: 0,
          speed: 300,
          auto: 4000,
          continuous: true,
          disableScroll: false,
          stopPropagation: false,
          callback: function (index, slide) { console.log('slide changes') },
          transitionEnd: function (index, slide) { console.log('slide transition ends') }
        }
      }
    }
  }
</script>
```

Or check this out: [https://github.com/wangdahoo/vswipe/blob/master/examples/index.html](https://github.com/wangdahoo/vswipe/blob/master/examples/index.html)

## VSwipe instance API

`prev()` slide to prev

`next()` slide to next

`getPos()` returns current slide index position

`getNumSlides()` returns the total amount of slides

`slide(index, duration)` slide to set index position (duration: speed of transition in milliseconds)

## License

MIT
