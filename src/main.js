import { createApp } from "vue";
import App from "./App.vue";

import dataV from "@jiaminghi/data-view";
import VueCountTo from "./components/VueCountTo/vue-countTo";

createApp(App)
  // .use(router)
  .use(dataV)
  .component("CountTo", VueCountTo)
  .mount("#app");
