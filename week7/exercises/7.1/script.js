Vue.createApp({
    data() {
      return {
      greeting: "Llamas vs Alpacas",
      className: 'color-red',
      llamaLand: "https://en.wikipedia.org/wiki/Llama",
      alpacaLand: "https://en.wikipedia.org/wiki/Alpaca",
      baseStyle: {
        background: "lightblue",
        },
        alternateStyle: {
        background: "oldlace",
        //   padding: "20px",
        },
        isLoading: false
      } 
    },
    methods: {
        toggleClass() {
            this.isLoading = true;
        }
    }   
  }).mount("#myApp")

//   new Vue({
//     el: "#llamaVsAlpaca",
//     data: {
//       greeting: "Llamas vs Alpacas",
//       className: 'color-red',
//       llamaLand: "https://en.wikipedia.org/wiki/Llama",
//       alpacaLand: "https://en.wikipedia.org/wiki/Alpaca",
//       baseStyle: {
//           background: "lightblue",
//       },
//       alternateStyle: {
//           background: "oldlace",
//         //   padding: "20px",
//       },
//       isLoading: false
//     },
    // methods: {
    //     toggleClass() {
    //         this.isLoading = true;
    //     }
    // }   
//   });