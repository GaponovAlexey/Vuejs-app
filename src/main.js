import { createApp } from "vue";
// import { createPinia } from "pinia";

import App from "./App.vue";

import componentsUI from "./components/UI";
import components from "./components";

const app = createApp(App);

// app.use(components)

componentsUI.forEach((com) => {
  app.component(com.name, com);
});
components.forEach((com) => {
  app.component(com.name, com);
});

app.mount("#app");
