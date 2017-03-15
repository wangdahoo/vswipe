<template>
  <div id="app">
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

html, body, #app {
  height: 100%;
}

#app .code-name {
  height: 100px;
  padding: 60px 0 0 0;
  text-align: center;
  font-size: 40px;
  line-height: 40px;
  color: #444;
  font-family: 'Josefin Sans', sans-serif;
}

#app .code-name > p {
  font-size: 14px;
  line-height: 20px;
  font-family: 'Josefin Sans', sans-serif;
  margin-top: 10px;
  color: #888;
}

#app .code-name > sup {
  font-size: 20px;
  font-family: 'Orbitron', sans-serif;
  color: #888;
}

html, body {
  background: #f3f3f3;
}

.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out
}

@keyframes octocat-wave {
  0%, 100% {
    transform: rotate(0)
  }

  20%, 60% {
    transform: rotate(-25deg)
  }

  40%, 80% {
    transform: rotate(10deg)
  }
}

@media (max-width:500px) {
  .github-corner:hover .octo-arm {
    animation: none
  }
  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out
  }
}
</style>
