<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
<nav>
  <RouterLink to="/">Home</RouterLink> |
  <RouterLink to="/alpaca">Alpaca</RouterLink> |
  <RouterLink to="/llama">Llama</RouterLink>
  </nav>
  <div class="container">
    <RouterView> </RouterView>
  </div>
</template>

<style>
html {
  font-size: 16px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
body, #app {
  margin: 0;
  padding: 0;
}
nav {
  width: 100%;
  height: 45px;
  background: rgb(149, 175, 184);
  text-align: center;
}
nav a, nav a:hover, nav a:link, nav a:active, nav a:visited {
  color: rgb(112, 82, 82);
  font-weight: 900px;
  font-size: 24px;

}
nav a.router-link-active {
  text-decoration: underline;
  color: white;
}
.container h1 {
  font-size: 30px;
  text-align: center;
}
.container {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}
.container img {
  display: block;
  max-width: 400px;
  width: 100%;
  margin: 20px auto 20px;
}
</style>
