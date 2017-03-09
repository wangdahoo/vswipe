<template>
  <div id="app">
    <div class="code-name">Vue Swipe <sup>1.0</sup></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, del, dfn, em, img, ins, kbd, q, samp, small, strong, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, table, tbody, tfoot, thead, tr, th, td, article, aside, footer, header, nav, section {
  margin:0;
  padding:0;
  border:0;
  outline:0;
  font-size:100%;
  vertical-align:baseline;
  background:transparent;
}
body {
  -webkit-text-size-adjust:none;
  font-family:sans-serif;
  min-height:416px;
}
h1 {
  font-size:33px;
  margin:50px 0 15px;
  text-align:center;
  color:#212121;
}
h2 {
  font-size:14px;
  font-weight:bold;
  color:#3c3c3c;
  margin:20px 10px 10px;
}
small {
  margin:0 10px 30px;
  display:block;
  font-size:12px;
}
a {
  margin:0 0 0 10px;
  font-size:12px;
  color:#3c3c3c;
}

#app .code-name {
  text-align: center;
  font-size: 36px;
  line-height: 60px;
  color: #444;
  font-family: 'Josefin Sans', sans-serif;
}

#app .code-name > sup {
  font-size: 20px;
  font-family: 'Orbitron', sans-serif;
}

html, body {
  background: #f3f3f3;
}
</style>
