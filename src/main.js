import './assets/main.css'
import './assets/athorization.css'
import './assets/bascket.css'
import './assets/catalogue.css'
import './assets/home.css'
import './assets/personal_account.css'
import './assets/reviews.css'
import './assets/registration.css'
import './assets/tour.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
