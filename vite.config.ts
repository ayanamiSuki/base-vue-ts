import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), // 路径别名
      '@public': resolve(__dirname, './public'), // 路径别名
      '@comp': resolve(__dirname, 'src/components'),
      '@imgs': './src/assets'
    }
    // extensions: ['.js', '.json', '.ts'] // 使用路径别名时想要省略的后缀名，可以自己 增减
  },
  // 全局的css
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:`@import "@/assets/scss/common/variables.scss";`,
      }
    }
  },
  // 跨域
  server: {
    //使用IP能访问
    host: '0.0.0.0',
    // 热更新
    hmr: true,
    //设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
    strictPort: false,
    //自定义代理规则
    proxy: {
      // 选项写法
      '/api': {
        target: '',
        changeOrigin: true
        // rewrite: (path) => path.replace(/^/api/, ""),
      }
    }
  }
})
