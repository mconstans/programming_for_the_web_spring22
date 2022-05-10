<script setup>
import { RouterView } from "vue-router";
import NavigationBar from "./components/NavigationBar.vue";
</script>

<template>
  <body>
  <nav>
    <NavigationBar/>
  </nav>
      <div class="greetings">
        <h1>Megan Constans</h1>
    </div>
      <div class="butterfly">
        <img src="/images/selene.png">
        <img class="wave" src="/images/pink-wave.png">
    </div>
    <RouterView />
            <div class="butterfly">
        <img class="wave" src="/images/pink-wave.png">
        <img class="wave" src="/images/pink-wave.png">
        <img class="wave" src="/images/pink-wave.png">
    </div>
      <footer>
      <div class="tagline">
        <h2><span>Forgotten Trails Inc</span></h2>
      </div>
      <p>&copy; 2022<br>
      Megan Constans</p>
  </footer>
      </body>
</template>

<style scoped>
@font-face {
  font-family: "SaveurSans-Regular";
  src: local("SaveurSans-Regular"), url(../fonts/SaveurSans-Regular.otf) format("opentype");
}
@font-face {
  font-family: "SaveurSans-Light";
  src: local("SaveurSans-Light"), url(../fonts/SaveurSans-Light.otf) format("opentype");
}
@font-face {
  font-family: "copasetic";
  src: local("copasetic"), url(../fonts/copasetic.ttf) format("truetype");
}
@font-face {
  font-family: "CasagrandeDecoRegular";
  src: local("CasagrandeDecoRegular"), url(../fonts/CasagrandeDecoRegular.otf) format("truetype");
}
body {
  background-color: rgb(65, 73, 36);
  border: 4px solid rgb(228, 191, 165);
  padding-bottom: 30px;
  padding-left: 25px;
  padding-right: 25px;
}

/* #app {
  background-color: rgb(65, 73, 36);
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
  font-weight: normal;
} */
.greetings {
    font-family: "SaveurSans-Regular";
    color: rgb(228, 191, 165);
    font-size: 1.5rem;
    text-align: center;
    margin: 0;
}
header {
  /* line-height: 3.0; */
  max-height: 100vh;
}
.butterfly {
  display: grid;
  place-items: center;
}
.wave {
  width: 50px;
}
/* coloring for nav links */
/* a {
  text-decoration: none;
  color: rgb(228, 191, 165);
  transition: 0.4s;
} */

@media (hover: hover) {
  a:hover {
    background-color: rgb(228, 191, 165);
      color: rgb(65, 73, 36);
  }
}
@media (min-width: 1024px) {
  body {
    display: grid;
    place-items: center;
  }
.name  {
  display: grid;
  text-align: right;
}
nav {
  color: rgb(65, 73, 36);
  border-bottom: 3px dashed pink;
  width: 100%;
  /* margin-top: 2rem; */
  text-align: left;
  font-size: 1.5rem;
  padding: 1rem 0;
  /* margin-top: 1rem; */
}
nav a {
  display: inline-block;
  padding: 0 1rem;
  }
}
footer {
  background: rgb(65, 73, 36);
  color: rgb(228, 191, 165);
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  padding: 32px 6% 32px;
}
footer h2 {
  height: 100%;
}
footer h2 span {
  color: rgb(228, 191, 165);
}
footer {
  text-transform: uppercase;
  font: 400 16px grad, serif;
  letter-spacing: 0.075em;
  line-height: 1.5em;
  flex-shrink: 0;
  font-size: 16px;
  text-align: right;
}
footer,
footer .tagline,
footer p {
    display: block;
    text-align: center;
  }
  footer h2 {
    margin-bottom: 32px;
  }
  footer p br {
    display: none;
  }
</style>
