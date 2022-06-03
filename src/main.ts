import { createApp } from 'vue'
import App from './App.vue'
import {store, key} from './store'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faGamepad, faSatellite } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPhone, faGamepad, faSatellite);

const app = createApp(App)

app.use(store, key)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
