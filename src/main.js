import { createApp } from 'vue'
import { TvDemo } from '@todovue/tv-demo'
import TvModal from './demo/Demo.vue'
import '@todovue/tv-demo/style.css'
import '@todovue/tv-button/style.css'
import './style.scss'

const app = createApp(TvModal)
app.component('TvDemo', TvDemo)
app.mount('#tv-modal')
