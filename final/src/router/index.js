import { createRouter, createWebHashHistory } from "vue-router"
import Home from "../views/Home.vue";
import CollectionList from "../views/CollectionList.vue";
import CollectionDetail from "../views/CollectionDetail.vue";
import GraphicList from "../views/GraphicList.vue";
import GraphicDetail from "../views/GraphicDetail.vue";
import MotionList from "../views/MotionList.vue";
import MotionDetail from "../views/MotionDetail.vue";
import UxList from "../views/UxList.vue";
import UxDetail from "../views/UxDetail.vue";

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
    },
    {
      path: "/graphics", //list of patterns
      name: "graphics",
      component: GraphicList
    },
    {
      path: "/graphics/:id", // pattern history details
      name: "graphics-detail",
      component: GraphicDetail
    },
    {
      path: "/motion", //list of patterns
      name: "motion",
      component: MotionList
    },
    {
      path: "/motion/:id", // pattern history details
      name: "motion-detail",
      component: MotionDetail
    },
    {
      path: "/ux", //list of patterns
      name: "ux",
      component: UxList
    },
    {
      path: "/ux/:id", // pattern history details
      name: "ux-detail",
      component: UxDetail
    }
  ]
})

export default router


