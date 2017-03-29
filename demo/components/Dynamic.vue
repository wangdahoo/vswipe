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

  .hide > .swipe-item {
    display: none;
  }
</style>
<template>
  <div>
    <back-button></back-button>

    <div class="code-name" style="padding-top: 90px;">
      Dynamic Items
    </div>

    <swipe ref="mySwipe" style='max-width:500px;margin:0 auto' :class="{'hide': !state}">
      <swipe-item v-for="it in items" :key="it"><b>{{ it }}</b></swipe-item>
    </swipe>

    <div style='text-align:center;padding-top:20px;'>
      <button @click='minus()'> - </button>
      <span>SwipeItem Count: {{ items.length }}</span>
      <button @click='plus()'> + </button>
    </div>

  </div>
</template>
<script>
  export default {
    data () {
      return {
        items: [0,1,2],
        state: 1 // 1: show, 0: hide
      }
    },

    methods: {
      plus () {
        this.state = 0
        setTimeout(() => {
          this.items.push(this.items[this.items.length - 1] + 1)
          this.resize()
          this.state = 1
        })
      },

      minus () {
        if (this.items.length <= 2) {
          alert('最少得有两个 SwipeItem 吧')
          return
        }
        this.items.pop()
        this.resize()
      },

      resize () {
        this.$refs.mySwipe.resize()
      }
    }
  }
</script>
