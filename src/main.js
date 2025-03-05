import { createApp } from 'vue'

// Import PrimeVue stuff
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import Button from "primevue/button"
import 'primeicons/primeicons.css'

import './style.css'
import App from './App.vue'
import router from './router';
  

const app = createApp(App);
app.component('Button', Button);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(router)
app.mount('#app')