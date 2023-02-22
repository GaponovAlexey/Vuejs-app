import { createRouter, createWebHistory } from "vue-router";
import Main from "../pages/Main.vue";
import UserPage from "../pages/UserPage.vue";
import About from '../pages/About.vue'
import PostIdPage from '../components/PostIdPage.vue'


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
    path: "/about",
    component: About,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
