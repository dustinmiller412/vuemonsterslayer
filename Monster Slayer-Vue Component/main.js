import { createApp } from 'vue'
import AnnoyingPlugin from 'vue-annoying-button'
import App from './App.vue'

const app = createApp(App);

app.use(AnnoyingPlugin);
app.mount('#app');