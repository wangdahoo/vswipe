<style>
  .swipe {
    overflow: hidden;
    visibility: hidden;
    position: relative;
  }
  .swipe-wrap {
    overflow: hidden;
    position: relative;
  }
</style>
<template>
  <div class='swipe'>
    <div class='swipe-wrap'>
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import Swipe from 'swipe-js-iso'

  export default {
    data () {
      return {
        swipe: undefined
      }
    },

    mounted () {
      this.swipe = Swipe(this.$el)
    },

    destroyed () {
      this.swipe.destroy()
    },

    methods: {
      prev () {
        if (this.swipe) this.swipe.prev()
      },

      next () {
        if (this.swipe) this.swipe.next()
      }
    }
  }
</script>
