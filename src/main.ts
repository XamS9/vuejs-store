import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { createPinia} from 'pinia'
import '@mdi/font/css/materialdesignicons.css'
import router from './router'

const app = createApp(App)

app.use(vuetify)
app.use(router)
app.use(createPinia())
app.mount('#app')