<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>  
        <RouterLink to="/collection">Collection</RouterLink>
        <RouterLink to="/graphics">Graphic Design</RouterLink>
        <RouterLink to="/ux">UX/UI Design</RouterLink>
        <RouterLink to="/motion">Motion Design</RouterLink>
    </nav>
</template>
<style scoped>
nav a {
  color: rgb(228, 191, 165);
  text-decoration: none;
  padding: 0 1rem;
  }
  nav a.router-link-exact-active {
  color: black;
}

nav a.router-link-exact-active:hover {
  background-color: rgb(228, 191, 165);
}
</style>
