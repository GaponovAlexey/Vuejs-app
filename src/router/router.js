import { createRouter, createWebHistory } from "vue-router";
import PostIdPage from "../components/PostIdPage.vue";
import Composition from "../pages/Composition.vue";
import Main from "../pages/Main.vue";
import PostPageWithStore from "../pages/PostPageWithStore.vue";
import UserPage from "../pages/UserPage.vue";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/posts",
    component: UserPage,
  },
  {
    path: "/posts/:id",
    component: PostIdPage,
  },
  {
    path: "/store",
    component: PostPageWithStore,
  },
  {
    path: "/composition",
    component: Composition,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
