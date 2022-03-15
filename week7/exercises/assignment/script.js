// create new Vue 3

Vue.createApp({ 
    data(){
      return {
        patterns: [
          {
            image: 'images/butterprint.jpeg',
            patternName: 'Butterprint',
            yearsReleased: '1957-1968',
            classType: 'standard',
            link: 'https://pyrex.cmog.org/pattern-library/butterprint-white-turquoise'
          }, // object 1
          {
            image: 'images/eyes.jpeg',
            patternName: 'Eyes',
            yearsReleased: '1950-1959',
            classType: 'standard',
            link: 'https://pyrex.cmog.org/pattern-library/eyes'
          }, // object 2
          {
            image: 'images/green_wheat.jpeg',
            patternName: 'Green Wheat',
            yearsReleased: '1960',
            classType: 'promotional',
            link: 'https://pyrex.cmog.org/pattern-library/green-wheat'
          }, // object 3
          {
            image: 'images/pink_stems.jpeg',
            patternName: 'Pink Stems',
            yearsReleased: '1957-1968',
            classType: 'standard',
            link: 'https://www.allaboutbirds.org/guide/Mourning_Dovehttps://pyrex.cmog.org/pattern-library/butterprint-white-turquoise'
          }, // object 4
          {
            image: 'images/turquoise_scroll.jpeg',
            patternName: 'Turquoise Scroll',
            yearsReleased: '1959',
            classType: 'promotional',
            link: 'https://pyrex.cmog.org/pattern-library/turquoise-scroll'
          }, // object 5          
          {
            image: 'images/gooseberry.jpeg',
            patternName: 'Gooseberry',
            yearsReleased: '1957-1966',
            classType: 'standard',
            link: 'https://pyrex.cmog.org/pattern-library/gooseberry-pink-white'
          }, // object 6
          {
            image: 'images/starburst.jpeg',
            patternName: 'Starburst',
            yearsReleased: '1960',
            classType: 'promotional',
            link: 'https://pyrex.cmog.org/pattern-library/cinderella-serving-casserole-or-starburst'
          }, // object 7

          {
            image: 'images/daisy.jpeg',
            patternName: 'Daisy',
            yearsReleased: '1968-1973',
            classType: 'standard',
            link: 'https://pyrex.cmog.org/pattern-library/daisy'
          }, // object 8
          {
            image: 'images/sage_scroll.jpeg',
            patternName: 'Sage Scroll',
            yearsReleased: '1962',
            classType: 'promotional',
            link: 'https://pyrex.cmog.org/pattern-library/sage-scroll'
          }, // object 9
          {
            image: 'images/bluebird.jpeg',
            patternName: 'Bluebird',
            yearsReleased: '1959-1961',
            classType: 'promotional',
            link: 'https://pyrex.cmog.org/pattern-library/bluebird-casserole'
          }, // object 10
          {
            image: 'images/autumn_harvest.jpeg',
            patternName: 'Autumn harvest',
            yearsReleased: '1979-1986',
            classType: 'standard',
            link: 'https://pyrex.cmog.org/pattern-library/autumn-harvest'
          }, // object 11
        ]
      }
    }
  }).mount("#app");