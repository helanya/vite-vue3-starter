import { createApp } from 'vue'
import { setupRouter } from '@/router'
import 'uno.css'
import 'nprogress/nprogress.css'
import App from './App.vue'

const app = createApp(App)

setupRouter(app)

app.mount('#app')
