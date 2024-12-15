import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueRouter from 'unplugin-vue-router/vite'
import UnoCSS from 'unocss/vite' // 样式库
import AutoImport from 'unplugin-auto-import/vite' // 自动导入API
import { VueRouterAutoImports } from 'unplugin-vue-router' //基于文件系统的自动路由
import Components from 'unplugin-vue-components/vite' //自动引入组件
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers' //自动引入组件相关
import Layouts from 'vite-plugin-vue-layouts' //页面layouts
import VueMacros from 'unplugin-vue-macros/vite' //vue的语法糖
import { VitePWA } from 'vite-plugin-pwa' //集成PWA
import { viteMockServe } from 'vite-plugin-mock' //mock工具

export default defineConfig({
  plugins: [
    VueRouter({}),
    VueMacros({
      plugins: {
        vue: vue(),
        vueJsx: vueJsx(), // 如有需要
      },
    }),
    // vue(),
    // vueJsx(),
    UnoCSS(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],

      // global imports to register
      imports: ['vue', VueRouterAutoImports, '@vueuse/core'],
    }),
    Components({
      directoryAsNamespace: true, // 深层级组件在使用时需要将子文件名作为前缀
      collapseSamePrefixes: true, // 当深层组件的前缀和子文件的名称相同时,省略前缀
      resolvers: [ElementPlusResolver()],
    }),
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default',
    }),
    VitePWA({
      manifest: {
        name: 'Vite App',
        short_name: 'Vite',
        theme_color: '#ffffff',
        icons: [
          {
            src: '192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      registerType: 'autoUpdate', //serviceWorker的更新策略：sw.js文件里的内容变化后，自动更新
    }),
    viteMockServe({
      mockPath: 'mock',
      enable: true,
    }),
  ],
})
