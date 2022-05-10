<script setup>
import CollectionList from "../data/projects.json";
import { useRoute } from "vue-router";

const route = useRoute();
const paramId = route.params.id * 1;
console.log("the id is", paramId);
const project = CollectionList.find(project => {
    return project.id === paramId;
})
</script>
<template>
<div class ="container">
    <h1>Project Name : {{project.projectName}}</h1>
    <h3>Project Category: {{project.projectCategory}}</h3>
    <h3>Release date: {{project.projectDate}}</h3>
    <img :src="project.image" :alt="project.projectName" />
    <h2> Project Goals</h2>
    <p>{{project.projectStatement}}</p>
    <h2>Challenges</h2>
    <p>{{project.projectChallenges}}</p>
    <h2>Solutions</h2>
    <p>{{project.projectSolutions}}</p>
</div>
</template>
<style scoped>
.container {
background: black;
color: rgb(228, 191, 165);
font-family: "CasagrandeDecoRegular";
text-align: center;
border: 2px dashed pink;
border-radius: 20px;
margin: 20px;
padding: 20px;
}
</style>