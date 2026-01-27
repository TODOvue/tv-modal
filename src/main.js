import { createApp } from 'vue'
import TvModal from './demo/Demo.vue'
import '@todovue/tv-demo/style.css'
import '@todovue/tv-button/style.css'
import './style.scss'

const app = createApp(TvModal)
app.mount('#tv-modal')
