<template>
<body>
    <section class="about-me">
        <div class="description-container">
            <div class="description">
            <h1>Hi! My name is Megan.</h1>
                <p>I'm an interdisciplinary designer looking to create interactive and emotional experiences for the web and apps at the intersection of art and design. I'm an aspiring front-end developer currently working on my Masters in Graphic & Web Design at Minneapolis College of Art and Design.</p>
                    <a class="button" href="#">Email me</a>
            </div>
        </div>
        <div class="portrait"> 
        <img src="/images/megan.jpeg">
        </div>
    </section>
</body>
</template>

<style scoped>
.about-me {
  display: flex;
}
.about-me .button {
  background: #214261;
  color: #FAF7EB;
}
.about-me .button:hover {
  background: #FAF7EB;
  color: #214261;
}
.about-me p {
  width: 64.51612903%;
}
.about-me h1 {
  width: 64.51612903%;
}
.about-me a {
  color: #214261;
  text-decoration: underline;
}
.about-me .description {
  align-self: center;
  position: relative;
  z-index: 1;
}
.about-me .portrait {
  background: url(images/megan.jpeg) center;
  background-size: cover;
  margin: 32px 0 0 16px;
  width: 50%;
}
.about-me .portrait img {
  display: none;
  max-width: 100%;
}
.about-me .description-container {
  background-color: #DBBD7F;
  background-position: left top;
  background-size: auto auto;
  background-repeat: no-repeat;
  display: flex;
  margin: 32px 16px 0 0;
  padding: 88px 7%;
  width: 40%;
  position: relative;
}

h1 {
    font-family: "SaveurSans-Regular";
    color: #214261;
    font-size: 2rem;
    text-align: left;
}
p {
      font-family: "CasagrandeDecoRegular";
      color: rgb(65, 73, 26);
}
.banner {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.bodycopy {
    background-color: white;
    padding: 12%;
    border-radius: 10px;
    margin: 10px;
}
.profileImage {
    background-color: white;
    padding-left: 30%;
    padding-top: 10%;
    border-radius: 10px;
}
/* img {
    max-width: 250px;
    align-items: center;
    border: 1px solid red;
} */
.button {
  text-transform: uppercase;
  position: relative;
  left: 20.0rem;
  letter-spacing: 0.075em;
  line-height: 1.5em;
  background: #DBBD7F;
  border: none;
  border-radius: 100px;
  color: rgb(65, 73, 26);
  cursor: pointer;
  outline: none;
  padding: 12px 32px 14px 32px;
  text-align: center;
  max-width: 360px;
  width: 100%;
}
</style>