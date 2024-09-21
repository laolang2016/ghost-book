import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { prismjsPlugin } from 'vite-plugin-prismjs'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd())
    console.log(mode)
    console.log(env)
    const plugins = [
        vue(),
        prismjsPlugin({
            // ['json', 'css'] 按需引入，'all' 所有语言
            languages: 'all',
            // 配置行号插件
            plugins: [
                'line-numbers',
                'copy-to-clipboard',
                'show-language',
                'line-highlight',
                'toolbar'
            ],
            // 主题名
            // theme: 'default',
            css: true
        })
    ]
    return {
        plugins: plugins,
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },

        server: {
            port: 12016,
            proxy: {
                '/api': {
                    target: env.VITE_API_BASE_URL,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, '')
                }
            }
        },

        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/style/global.scss";'
                }
            }
        }
    }
})
