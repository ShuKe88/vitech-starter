import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueRouter from 'unplugin-vue-router/vite'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    VueRouter({}),
    vue(),
    vueJsx(),
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
  ],
})
