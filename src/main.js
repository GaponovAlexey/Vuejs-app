import { createApp } from "vue";
// import { createPinia } from "pinia";

import App from "./App.vue";

import components from "./components/UI";
const app = createApp(App);

// app.use(components)

components.forEach((com) => {
  app.component(com.name, com);
});

app.mount("#app");
