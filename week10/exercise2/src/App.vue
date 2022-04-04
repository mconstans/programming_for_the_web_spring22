<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/">Home  </RouterLink>
    <RouterLink to="/song">Song  </RouterLink>
  </nav>
<RouterView />
</template>

<style>
html {
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
nav {
  width: 100%;
  height: 45px;
  background: rgb(25, 18, 31);
  text-align: center;
  padding: 10px;
}
nav a, nav a:hover, nav a:link, nav a:active, nav a:visited {
  color: rgb(179, 170, 93);
  font-weight: 900px;
  font-size: 24px;

}
img {
    display: block;
  max-width: 200px;
  width: 100%;
  margin: 20px auto 20px;
}
/* nav a.router-link-active {
  text-decoration: underline;
  color: white;
} */
</style>
