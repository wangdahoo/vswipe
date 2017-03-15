<style scoped>
  .swipe-item b {
    display:block;
    font-weight:bold;
    color:#14ADE5;
    font-size:20px;
    text-align:center;
    margin:10px;
    padding:100px 10px;
    box-shadow: 0 1px #EBEBEB;
    background: #fff;
    border-radius: 3px;
    border: 1px solid;
    border-color: #E5E5E5 #D3D3D3 #B9C1C6;
  }
</style>
<template>
  <div>
    <a href="https://github.com/wangdahoo/vswipe" class="github-corner" aria-label="View source on Github"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#70B7FD; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>

    <div class="code-name">
      VSwipe <sup>1.0</sup>

      <p>
        Brad Birdsall's Swipe.js as a Vue component.
      </p>
    </div>

    <swipe ref="mySwipe" style='max-width:500px;margin:0 auto'>
      <swipe-item><b>0</b></swipe-item>
      <swipe-item><b>1</b></swipe-item>
      <swipe-item><b>2</b></swipe-item>
      <swipe-item><b>3</b></swipe-item>
      <swipe-item><b>4</b></swipe-item>
      <swipe-item><b>5</b></swipe-item>
      <swipe-item><b>6</b></swipe-item>
      <swipe-item><b>7</b></swipe-item>
      <swipe-item><b>8</b></swipe-item>
      <swipe-item><b>9</b></swipe-item>
      <swipe-item><b>10</b></swipe-item>
      <swipe-item><b>11</b></swipe-item>
      <swipe-item><b>12</b></swipe-item>
      <swipe-item><b>13</b></swipe-item>
      <swipe-item><b>14</b></swipe-item>
      <swipe-item><b>15</b></swipe-item>
      <swipe-item><b>16</b></swipe-item>
      <swipe-item><b>17</b></swipe-item>
      <swipe-item><b>18</b></swipe-item>
      <swipe-item><b>19</b></swipe-item>
      <swipe-item><b>20</b></swipe-item>
    </swipe>

    <div style='text-align:center;padding-top:20px;'>
      <button @click='prev()'>prev</button>
      <button @click='next()'>next</button>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      prev() {
        this.$refs.mySwipe.prev()
      },

      next() {
        this.$refs.mySwipe.next()
      }
    }
  }
</script>

