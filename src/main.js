import { createApp } from "vue";
// import { createPinia } from "pinia";

import App from "./App.vue";

import componentsUI from "./components/UI";
import components from "./components";
import router from "@/router/router";
import directives from "./directives";

const app = createApp(App);

componentsUI.forEach((com) => {
  app.component(com.name, com);
});
components.forEach((com) => {
  app.component(com.name, com);
});
directives.forEach((dir) => {
  app.directive(dir.name, dir);
});

app.use(router);
app.mount("#app");
