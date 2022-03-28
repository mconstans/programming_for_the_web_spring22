<script setup>
import { reactive } from 'vue';
import ConsoleRow from "./components/ConsoleRow.vue"
const patterns = [ {
            image: 'images/butterprint.jpeg',
            patternName: 'Butterprint',
            yearsReleased: '1957-1968',
            classType: 'standard',
            link: 'https://pyrex.cmog.org/pattern-library/butterprint-white-turquoise',
            collected: 'true'
          }, // object 1
          {
            image: 'images/eyes.jpeg',
            patternName: 'Eyes',
            yearsReleased: '1950-1959',
            classType: 'standard',
            link: 'https://pyrex.cmog.org/pattern-library/eyes',
            collected: 'true'
          }, // object 2
          {
            image: 'images/green_wheat.jpeg',
            patternName: 'Green Wheat',
            yearsReleased: '1960',
            classType: 'promotional',
            link: 'https://pyrex.cmog.org/pattern-library/green-wheat',
            collected: 'true'
          }, // object 3
          {
            image: 'images/pink_stems.jpeg',
            patternName: 'Pink Stems',
            yearsReleased: '1957-1968',
            classType: 'standard',
            link: 'https://www.allaboutbirds.org/guide/Mourning_Dovehttps://pyrex.cmog.org/pattern-library/butterprint-white-turquoise',
            collected: 'true'
          }, // object 4
          {
            image: 'images/turquoise_scroll.jpeg',
            patternName: 'Turquoise Scroll',
            yearsReleased: '1959',
            classType: 'promotional',
            link: 'https://pyrex.cmog.org/pattern-library/turquoise-scroll',
            collected: 'false'
          }, // object 5          
          {
            image: 'images/gooseberry.jpeg',
            patternName: 'Gooseberry',
            yearsReleased: '1957-1966',
            classType: 'standard',
            link: 'https://pyrex.cmog.org/pattern-library/gooseberry-pink-white',
            collected: 'true'
          }, // object 6
          {
            image: 'images/starburst.jpeg',
            patternName: 'Starburst',
            yearsReleased: '1960',
            classType: 'promotional',
            link: 'https://pyrex.cmog.org/pattern-library/cinderella-serving-casserole-or-starburst',
            collected: 'false'
          }, // object 7

          {
            image: 'images/daisy.jpeg',
            patternName: 'Daisy',
            yearsReleased: '1968-1973',
            classType: 'standard',
            link: 'https://pyrex.cmog.org/pattern-library/daisy',
            collected: 'true'
          }, // object 8
          {
            image: 'images/sage_scroll.jpeg',
            patternName: 'Sage Scroll',
            yearsReleased: '1962',
            classType: 'promotional',
            link: 'https://pyrex.cmog.org/pattern-library/sage-scroll',
            collected: 'false'
          }, // object 9
          {
            image: 'images/bluebird.jpeg',
            patternName: 'Bluebird',
            yearsReleased: '1959-1961',
            classType: 'promotional',
            link: 'https://pyrex.cmog.org/pattern-library/bluebird-casserole',
            collected: 'false'
          }, // object 10
          {
            image: 'images/autumn_harvest.jpeg',
            patternName: 'Autumn harvest',
            yearsReleased: '1979-1986',
            classType: 'standard',
            link: 'https://pyrex.cmog.org/pattern-library/autumn-harvest',
            collected: 'true'
          }, // object 11
          ];
const newPatternObj = {
            image: '',
            patternName: '',
            yearsReleased: null,
            classType: '',
            link: '',
            collected: false
}
const state = reactive({patterns, newPatternObj}); // new es6 method  
function addNewPattern() {
  state.patterns.push({       
            image: state.newPatternObj.image,
            patternName: state.newPatternObj.patternName,
            yearsReleased: state.newPatternObj.yearsReleased,
            classType: state.newPatternObj.classType,
            link: state.newPatternObj.link,
            collected: state.newPatternObj.collected
            });
            state.newPatternObj.image = "";
            state.newPatternObj.patternName = "";
            state.newPatternObj.yearsReleased = "";
            state.newPatternObj.classType = "";
            state.newPatternObj.link = "";
            state.newPatternObj.collected = "";
}
function handleDelete(patternToDelete) {
  state.patterns = state.patterns.filter((patternToCheck) => {
    return patternToDelete != patternToCheck;
  });
}
</script>

<template>
<div class="collectionWrapper">
        <h1>Megan's Vintage Pyrex Bakeware Collection</h1>
        <table>
            <tr>
                <th>Pattern Image</th>
                <th>Pattern Name</th>
                <th>Years Released</th>
                <th>Pattern Classification</th>
                <th>Origins</th>
                <th>Collected</th>
                <th>Action</th>
            </tr>
            <ConsoleRow 
            v-for="(pattern, index) in state.patterns" 
            v-bind:class="{'non-standard': pattern.classType !== 'standard'}"
            v-bind:key="index"
            v-bind:pattern="pattern"
            v-on:delete-pattern="handleDelete"
            />
        </table>
        <form v-on:submit.prevent="addNewPattern" class="newPatternForm">
            <fieldset>
                <legend>Add a pattern to the collection</legend>
                <div>
                    <label for="image">Pattern Image</label>
                    <input id="image" type="text" v-model="newPatternObj.image">
                </div>
                <div>
                    <label for="patternName">Pattern Name</label>
                    <input id="patternName" type="text" v-model="newPatternObj.patternName">
                </div>
                <div>
                    <label for="yearsReleased">Years Released</label>
                    <input id="yearsReleased" type="text" v-model="newPatternObj.yearsReleased">
                </div>
                <div>
                    <label for="classType">Pattern Classification</label>
                    <input id="classType" type="text" v-model="newPatternObj.classType">
                </div>
                <div>
                    <label for="link">Link to Pattern History</label>
                    <input id="link" type="text" v-model="newPatternObj.link">
                </div>
                <div>
                    <label for="collected">Pattern Collected</label>
                    <input id="collected" type="checkbox" v-model="newPatternObj.collected">
                </div>
                <button type="submit">Submit</button>                                
            </fieldset>
        </form>
</div>
</template>

<style>
* {
    box-sizing: border-box;
  }
  .collectionWrapper {
    background-image: url('images/Roofdog-04Atomic-starbursts-blue-orange.jpg');
    padding: 5%;
    box-shadow: 5px 10px 8px 10px #888888;
    border-radius: 10px;
    display: inline-block;
    margin: 4%;
    background-color: #FFF;
  }
  body {
    font-family: 'Syne', sans-serif;
    background: #daeceb;
  }

  h1 {
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: .5rem;
    text-align: center;
    color: #499c9c;
    text-shadow: #888888;
  }
  table, thead, tbody, th, tr, td {
    /* border-collapse: collapse; */
    /* border-spacing: 0; */
    border-radius: 30px;
  }
/* tr {
  border: 1px solid red;
} */
  th {
    background: #e4e4e4;
    padding: 20px;
    font-weight:700;
    text-transform: uppercase;
    text-decoration: underline;
    text-align: left;
  }
  td {
    border: 1px solid grey;
    border-radius: 30px;
    padding: 15px;
    padding-right: 40px;
    font-size: "40px";
    font-weight: 400;
  }
  img {
    align-items: center;
    width: 200px;
    border-radius: 30px;

  }
  .centerimg {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    width: 375px;
    border-radius: 30px;
}
  .non-standard {
    border-radius: 30px;
      background: #daeceb;
  }

  .newPatternForm, fieldset {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  label {
    max-width: 100px;
  }
  .newPatternForm, input {
    display: inline-block;
  }
</style>
