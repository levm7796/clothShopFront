// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'
//
// createApp(App).mount('#app')


import  { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vueCookies from 'vue-cookies';
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';


const app = createApp(App)
app.use(router)
app.use(ToastPlugin)
app.use(vueCookies)
app.mount('#app')
