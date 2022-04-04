<script setup>
import { useRoute } from 'vue-router';
import MusicList from "../data/music-list.json"
const route = useRoute();
console.log(route.params.slug);
const song = MusicList.find(song => {
    return song.slug === route.params.slug
})
</script>

<template>
<div class="song-detail" :class="{rising: song.rank > song.position.positionLastWeek,
    falling: song.rank < song.position.positionLastWeek,
    same: song.rank === song.position.positionLastWeek}">
    <h1>{{song.rank}}</h1>
    <h2>{{song.title}}</h2>
    <img :src="song.cover" :alt="song.title">
    <p>Artist: {{song.artist}}</p>
</div>
</template>
<style scoped>
.song-detail.rising {
    text-align: center;
    background: repeating-linear-gradient(gold, white);
    border: 4px solid black;
}
.song-detail.falling {
    text-align: center;
    background: repeating-linear-gradient(red, white);
    border: 1px solid black;
}
.song-detail.same {
    text-align: center;
    background: repeating-linear-gradient(rgb(119, 209, 236), white);
    border: 2px solid black;
}
</style>