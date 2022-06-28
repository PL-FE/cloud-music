import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './router/index.js'
import 'element-plus/dist/index.css'
import * as ElIcons from '@element-plus/icons-vue'
console.log(`ElIcons`, ElIcons)
import { createPinia } from 'pinia'

const app = createApp(App)
for (const name in ElIcons) {
  app.component(name, ElIcons[name]);
}

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')

