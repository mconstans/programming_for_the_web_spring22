<script setup>
import { RouterView } from "vue-router";
import NavigationBar from "./components/NavigationBar.vue";3
</script>

<template>
<NavigationBar/>
<div class="container">
  <RouterView />
</div>
</template>

<style scoped>
* {
    box-sizing: border-box;
  }
  .collectionWrapper {
    background-image: url('images/Roofdog-04Atomic-starbursts-blue-orange.jpg');
    padding: 5%;
    box-shadow: 5px 10px 8px 10px #888888;
    border-radius: 10px;
    display: inline-block;
    margin: 4%;
    background-color: #FFF;
  }
  .odd {
    background-color: white;
}
  body {
    font-family: 'Syne', sans-serif;
    background: #daeceb;
  }

  h1 {
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: .5rem;
    text-align: center;
    color: #499c9c;
    text-shadow: #888888;
  }

</style>
