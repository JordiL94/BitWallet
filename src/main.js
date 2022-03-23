import { createApp } from 'vue';
// import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import '@/assets/style/global.scss';
import store from './store';

const app = createApp(App);

// app.use(createPinia());
app.use(router);
app.use(store);

app.mount("#app");
