<script setup>
  const camelids = [
      {
        commonName: "Lama",
        binomialName: "Lama glama",
        order: "Artiodactyla",
        family: "Camelidae",
        genus: "Lama",
        species: "L. glama",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Llama_lying_down.jpg/220px-Llama_lying_down.jpg"
        },
      {
        commonName: "Alpaca",
        binomialName: "Vicugna pacos",
        order: "Artiodactyla",
        family: "Camelidae",
        genus: "Vicugna",
        species: "V. pacos",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Alpaca_%2831562329701%29.jpg/440px-Alpaca_%2831562329701%29.jpg"
      },
  ];
</script>

<template>
<div>
  <h1>This will be my Camelids Page</h1>
  <div v-for="critter in camelids" v-bind:key="critter.binomialName">
    <h3> Common Name </h3>
      <p>Binomial Name</p>
      <p>Family</p>
      <p>Genus</p>
      <p>Species</p>
      <img src="placeholder" alt="placeholder"/>
      </div>
</div>
</template>

<style>

</style>
