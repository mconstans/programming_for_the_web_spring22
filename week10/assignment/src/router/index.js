import { createRouter, createWebHashHistory } from "vue-router"
import Home from "../views/Home.vue";
import CollectionList from "../views/CollectionList.vue";
import CollectionDetail from "../views/CollectionDetail.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/", // default path
      name: "home",
      component: Home
    },
    {
      path: "/collection", //list of patterns
      name: "collection",
      component: CollectionList
    },
    {
      path: "/collection/:id", // pattern history details
      name: "collection-detail",
      component: CollectionDetail
    }
  ]
})

export default router
