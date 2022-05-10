<script setup>
import projectsList from "../data/motion.json";
import ConsoleRow from "../components/ConsoleRow.vue";
console.log(projectsList);
</script>
<template>
  <div class="collectionWrapper">
      <h1>Motion Design Project List</h1>
      <ConsoleRow v-for="(project, index) in projectsList" :key="index" :project="project" />
  </div>
  <body>
    <h2>A few video examples</h2>
    <ul class="posts-container">
      <li>
        <a href="#">
        <video autoplay muted loop id="video">
          <source src="/assets/wandernorth.mp4" type="video/mp4">
        </video>
        <h2>Animated scene</h2>
        </a>
      </li>
        <li>
        <a href="#">
        <video autoplay muted loop id="video">
          <source src="/assets/graphicdesign.mp4" type="video/mp4">
        </video>
        <h2>Introduction Video</h2>
        </a>
      </li>
        <li>
        <a href="#">
        <video autoplay muted loop id="video">
          <source src="/assets/Final_Compressed.mp4" type="video/mp4">
        </video>
        <h2>My practice</h2>
        </a>
      </li>
    </ul>
</body>
</template>
<style scoped>
video {
  right: 10;
  top: 10;
  max-width: 100%;
  max-height: 100%;
}
.posts-container li {
  display: inline-block;
  background: #FAF7EB;
  margin: 5px;
  width: 31%;
  list-style: none;
}
h2 {
  background: #DBBD7F;
  color: rgb(65, 73, 26);
  text-transform: uppercase;
  letter-spacing: 0.075em;
  padding: 10px;
  font-size: 16px;
  text-align: center;

}

.posts-container li span {
  text-transform: uppercase;
  font: 400 16px grad, serif;
  letter-spacing: 0.075em;
  line-height: 1.5em;
  background: #DBBD7F;
  color: #214261;
  font-size: 16px;
  line-height: 1.5em;
  margin-top: 64px;
  left: 0;
  width: 100%;
  bottom: 0;
  padding: 16px 32px;
  text-align: center;
}
.posts-container li a {
  display: block;
  padding: 32px 32px 80px 32px;
}

h3 {
  /* margin: 10px; */
  text-transform: uppercase;
  letter-spacing: 0.075em;
  line-height: 1.5em;
  background: #DBBD7F;
}
img {
  max-height: 432px;
  width: 100%;
}
  .collectionWrapper {
    padding: 5%;
    box-shadow: 2px 6px 6px 6px #0a0a0a;
    border-radius: 10px;
    display: inline-block;
    margin: 4%;
    background-color: #FAF7EB;
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