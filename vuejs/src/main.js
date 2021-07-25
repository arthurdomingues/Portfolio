import { createApp } from "vue";
import App from "./App.vue";
import "../node_modules/bulma/css/bulma.css";
import "../node_modules/bulma-social/css/all.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router";

library.add(
  fas,
  faTwitter,
  faGithub,
  faTelegram,
  faWhatsapp,
  faEnvelope,
  faUser
);

const app = createApp(App);
app.use(router);
app.component("fa", FontAwesomeIcon);
app.mount("#app");
