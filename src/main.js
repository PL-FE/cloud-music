import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './router/index.js'
import 'element-plus/dist/index.css'
import * as ElIcons from '@element-plus/icons-vue'
console.log(`ElIcons`, ElIcons)
// 此处省略若干业务代码

const app = createApp(App)
for (const name in ElIcons) {
  app.component(name, ElIcons[name]);
}

app.use(router)
app.use(ElementPlus)
app.mount('#app')

