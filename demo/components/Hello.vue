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

