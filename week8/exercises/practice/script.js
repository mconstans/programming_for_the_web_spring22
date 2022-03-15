let vm = Vue.createApp({
    data() {
        return {
            title: "Todo Items",
            newItem: "",
            newItemPriority: "low",
            tags: [],
            todoItems: [
                {
                    label: "deploy to server",
                    // id for key property
                    id: 0,
                    priority: "high"
                },
                {
                    label: "review new projects",
                    id: 1,
                    priority: "low"
                },
                {
                label: "create wireframes for x",
                id: 2,
                priority: "medium"
                }
            ]
        }
    }
}).mount("#app");

// checkbox method
// let vm = Vue.createApp({
//     data() {
//         return {
//             title: "Todo Items",
//             newItem: "",
//             newItemHighPriority: false,
//             todoItems: [
//                 {
//                     label: "deploy to server",
//                     // id for key property
//                     id: 0,
//                     highPriority: true
//                 },
//                 {
//                     label: "review new projects",
//                     id: 1,
//                     highPriority: false
//                 },
//                 {
//                 label: "create wireframes for x",
//                 id: 2,
//                 highPriority: false
//                 }
//             ]
//         }
//     }
// }).mount("#app");