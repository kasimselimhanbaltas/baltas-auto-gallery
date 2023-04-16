import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import JsonViewer from 'vue-json-viewer'
import 'vue-json-viewer/style.css'
import VueLazyload from 'vue-lazyload'

createApp(App).use(store).use(router).use(JsonViewer).use(VueLazyload).mount('#app')
document.title = "Baltaş Auto Gallery"
