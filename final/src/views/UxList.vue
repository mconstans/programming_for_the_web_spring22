<script setup>
import projectsList from "../data/ux.json";
import ConsoleRow from "../components/ConsoleRow.vue";
console.log(projectsList);
</script>
<template>

<div class="collectionWrapper">
    <h1>UX/UI Design Project List</h1>
    <ConsoleRow v-for="(project, index) in projectsList" :key="index" :project="project" :class="{odd: (index + 1) % 2 !== 0 }" />
    </div>
</template>
<style scoped>

  .collectionWrapper {
    padding: 5%;
    box-shadow: 2px 6px 6px 6px #0a0a0a;
    border-radius: 10px;
    text-decoration: none;
    display: inline-block;
    margin: 4%;
    background: #FAF7EB;
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