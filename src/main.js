/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import 'primevue/resources/themes/saga-blue/theme.css'; // theme of your choice
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)
app.use(PrimeVue, { unstyled: false });
registerPlugins(app)

app.mount('#app')
