<script setup>
const props = defineProps(['pattern']);
console.log('the pattern', props.pattern);
</script>
<template>
            <tr>
                <td><img :src="pattern.image"></td>
                <td>{{pattern.patternName}}</td>
                <td>{{pattern.yearsReleased}}</td>
                <td v-bind:class="{active : classType==='promotional'}">{{pattern.classType}}</td>
                <td><a class="patternName" :href="pattern.link">{{pattern.patternName}}</a></td>
                <td>{{pattern.collected}}</td>
                <td><button class="delete" type="button" v-on:click="$emit('deletePattern', pattern)">Delete</button></td>
            </tr>
</template>