import { defineConfig, loadEnv } from "vite";
import path from 'path';
import createVitePlugins from './vite/plugins';
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd());
  const { VITE_APP_ENV } = env;
  return {
    base: '/',
    plugins: createVitePlugins(env, command === 'build'),
    resolve: {
      // https://cn.vitejs.dev/config/#resolve-alias
      alias: {
        // 设置路径
        '~': path.resolve(__dirname, './'),
        // 设置别名
        '@': path.resolve(__dirname, './src'),
      },
      // https://cn.vitejs.dev/config/#resolve-extensions
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
    // vite 相关配置
    server: {
      port: 9011,
      host: true,
      open: true,
      // proxy: {
      //   // https://cn.vitejs.dev/config/#server-proxy http://10.128.128.161:8080
      //   '/dev-api': {
      //     target: 'http://localhost:8080',
      //     changeOrigin: true,
      //     rewrite: p => p.replace(/^\/dev-api/, ''),
      //   },
      // },
    },
    css: {
      preprocessorOptions: {
        scss: {
          // 配置 nutui 全局 scss 变量
          additionalData: `@import "@nutui/nutui/dist/styles/variables.scss";`
        }
      }
    }
  }

});
