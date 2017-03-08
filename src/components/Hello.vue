<template>
  <div>
    <div id='mySwipe' style='max-width:500px;margin:0 auto' class='swipe'>
      <div class='swipe-wrap'>
        <div><b>0</b></div>
        <div><b>1</b></div>
        <div><b>2</b></div>
        <div><b>3</b></div>
        <div><b>4</b></div>
        <div><b>5</b></div>
        <div><b>6</b></div>
        <div><b>7</b></div>
        <div><b>8</b></div>
        <div><b>9</b></div>
        <div><b>10</b></div>
        <div><b>11</b></div>
        <div><b>12</b></div>
        <div><b>13</b></div>
        <div><b>14</b></div>
        <div><b>15</b></div>
        <div><b>16</b></div>
        <div><b>17</b></div>
        <div><b>18</b></div>
        <div><b>19</b></div>
        <div><b>20</b></div>
      </div>
    </div>

    <div style='text-align:center;padding-top:20px;'>
      <button @click='prev()'>prev</button>
      <button @click='next()'>next</button>
    </div>
  </div>
</template>

<script>
  import Swipe from 'swipe-js-iso'

  export default {
    name: 'hello',

    dataa () {
      return {
        mySwipe: undefined
      }
    },

    mounted () {
      this.mySwipe = Swipe(document.getElementById('mySwipe'))
    },

    destroyed () {
      this.mySwipe.destroy()
    },

    methods: {
      prev () {
        if (this.mySwipe) this.mySwipe.prev()
      },

      next () {
        if (this.mySwipe) this.mySwipe.next()
      }
    }
  }
</script>

<style scoped>
  .swipe {
    overflow: hidden;
    visibility: hidden;
    position: relative;
  }
  .swipe-wrap {
    overflow: hidden;
    position: relative;
  }
  .swipe-wrap > div {
    float:left;
    width:100%;
    position: relative;
  }
</style>
