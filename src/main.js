import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCloud, faSun, faCloudRain, faBars, faLocationPin, faMagnifyingGlass, faWind, faTint, faEye, faArrowRight, faTemperatureHigh, faArrowsAltV, faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faCloud, faSun, faCloudRain, faBars, faLocationPin, faMagnifyingGlass, faWind, faTint, faEye, faArrowRight, faTemperatureHigh, faArrowsAltV, faTrash); 

const app = createApp(App);
app.use(router);
app.mount('#app');

app.component('font-awesome-icon', FontAwesomeIcon);