const { default: axios } = require("axios");

var baseURL = "https://ghibliapi.herokuapp.com";
var vm = new Vue({
    el: "#app",
    data: {

    },
    methods: {
        getFilms: function() {
            axios.get(baseURL + "/films").then(function(response){
                console.log(response);
            })
        }
    }
});