import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import BootstrapVue3 from 'bootstrap-vue-3';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8rU7mLMFBY2NET4ftWStfZF_uUPVF52g",
  authDomain: "landingpage-ac6ad.firebaseapp.com",
  projectId: "landingpage-ac6ad",
  storageBucket: "landingpage-ac6ad.firebasestorage.app",
  messagingSenderId: "800738198901",
  appId: "1:800738198901:web:1a65e7b759a8fdc8d2ff3c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Configura Font Awesome
library.add(fas, far, fab);

// Crear aplicación
const app = createApp(App);

// Registrar componentes y plugins
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.use(BootstrapVue3);

// Montar la aplicación
app.mount("#app");
