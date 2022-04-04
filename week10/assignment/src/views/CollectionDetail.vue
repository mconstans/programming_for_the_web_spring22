<script setup>
import CollectionList from "../data/patterns.json";
import { useRoute } from "vue-router";

const route = useRoute();
const paramId = route.params.id * 1;
console.log("the id is", paramId);
const pattern = CollectionList.find(pattern => {
    return pattern.id === paramId;
})
</script>
<template>
<div class ="container">
    <h1>Pattern Name : {{pattern.patternName}}</h1>
    <h3>Release date: {{pattern.yearsReleased}}</h3>
    <img :src="pattern.image" :alt="pattern.patternName" />
    <h3>Pattern Class: {{pattern.classType}}</h3>
    <h2> Interesting Facts</h2>
    <p>{{pattern.body}}</p>
</div>
</template>
<style scoped>
.container {
background: rgb(213, 230, 233);
text-align: center;
border: 2px dashed black;
border-radius: 20px;
margin: 20px;
padding: 20px;
}
</style>