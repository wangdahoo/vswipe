<style>
  .swipe-fullscreen,
  .swipe-fullscreen > .swipe-wrap,
  .swipe-fullscreen > .swipe-wrap > .swipe-item {
    width: 100%;
    height: 100%;
  }

  .swipe-fullscreen .swipe-wrap > .swipe-item {
    display: block;
    margin: 0;
    padding: 0;
    font-weight: bold;
    color: #fff;
    font-size: 20px;
    text-align: center;
  }
</style>
<template>
  <swipe class="swipe-fullscreen" :options="swipeOptions">
    <swipe-item style="background: #EA5A49;"></swipe-item>
    <swipe-item style="background: #44CC00;"></swipe-item>
    <swipe-item style="background: #FFBD17;"></swipe-item>
  </swipe>
</template>
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
