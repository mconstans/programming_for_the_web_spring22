<script setup>
import PatternsList from "../data/patterns.json";
import ConsoleRow from "../components/ConsoleRow.vue";
console.log(PatternsList);
</script>
<template>
<div class="collectionWrapper">
    <h1>Collection List</h1>
    <ConsoleRow v-for="(pattern, index) in PatternsList" :key="index" :pattern="pattern" :class="{odd: (index + 1) % 2 !== 0 }" />
    </div>
</template>
<style scoped>

  .collectionWrapper {
    background-image: url('images/Roofdog-04Atomic-starbursts-blue-orange.jpg');
    padding: 5%;
    box-shadow: 5px 10px 8px 10px #888888;
    border-radius: 10px;
    display: inline-block;
    margin: 4%;
    background-color: #FFF;
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