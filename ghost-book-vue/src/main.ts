import { createApp } from 'vue'
import { createPinia } from 'pinia'

// layui-vue
import Layui from '@layui/layui-vue'
import '@layui/layui-vue/lib/index.css'

// fontawesome-free 图标
import '@fortawesome/fontawesome-free/css/all.min.css'

// prismjs 主题
import '@/assets/prism-theme/prism-coldark-cold.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(Layui)
app.use(createPinia())
app.use(router)

app.mount('#app')
