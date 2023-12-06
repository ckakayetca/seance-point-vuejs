import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes/index'
import { createPinia } from 'pinia'
import AppLoader from './components/shared/AppLoader.vue'

const pinia = createPinia();
const app = createApp(App);

app.component('AppLoader', AppLoader)
app.use(pinia);
app.use(router);
app.mount('#app');
