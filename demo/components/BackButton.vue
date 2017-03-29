<template>
  <div class="back-button" @click="$router.back()"></div>
</template>
<style>
  .back-button {
    position: absolute;
    left: 10px;
    top: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: #000;
    opacity: 0.8;
    background-image: url(../assets/back.png);
    background-size: 30px 30px;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 1000;
  }
</style>
