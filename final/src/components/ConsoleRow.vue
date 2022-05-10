<script setup>
import { RouterLink } from "vue-router";
const props = defineProps(['project']);
console.log('the project', props.project);
</script>
<template>
<RouterLink :to="'/collection/' + project.id">
    <div class="container">
        <div class="projectRow">
          <img :src="project.image" :alt="project.projectName" />
        </div>
        <div class="name">{{project.projectName}}</div>
        <div class="year">{{project.projectDate}}</div>
        <div class="class">{{project.projectCategory}}</div>
        <div class="statement">{{project.projectStatement}}</div>
    </div>
</RouterLink>
</template>
<style scoped>
.container { 
    display: flex;
    align-items: center;
    color: black;
    font-family: "SaveurSans-Regular";
    font-size: 1.2rem;
    text-decoration: none;
    margin: 10px;
    padding: 10px 40px 10px 40px;
    gap: 60px;
    border: 1.5px dashed rgb(65, 73, 36);
    border-radius: 5px;
}
.container:hover {
    background: rgb(228, 191, 165);
    transition: all 0.2s ease;
}
.name {
    width: 150px;
    text-decoration: none;
}
.class {
    width: 150px;
}
.year {
    width: 150px;
}
.status {
    width: 150px;
}
img {
    align-items: center;
    width: 200px;
    border-radius: 30px;
}

</style>