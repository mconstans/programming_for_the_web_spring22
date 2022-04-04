<script setup>
import { RouterLink } from "vue-router";
const props = defineProps(['pattern']);
console.log('the pattern', props.pattern);
</script>
<template>
<RouterLink :to="'/collection/' + pattern.id">
    <div class="container">
        <div class="patternRow">
          <img :src="pattern.image" :alt="pattern.patternName" />
        </div>
        <div class="name">{{pattern.patternName}}</div>
        <div class="year">{{pattern.yearsReleased}}</div>
        <div class="class" v-bind:class="{active : classType==='promotional'}">{{pattern.classType}}</div>
        <div class="status">{{pattern.collected}}</div>
    </div>
</RouterLink>
</template>
<style scoped>
.container {
    display: flex;
    align-items: center;
    margin: 10px;
    padding: 10px 40px 10px 40px;
    gap: 60px;
    border: 1px solid black;
}
.name {
    width: 150px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: "40px";
    font-weight: 400;
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