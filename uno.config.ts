// import presetWind from '@unocss/preset-wind'
// import presetIcons from '@unocss/preset-icons'
import { defineConfig, presetWind, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      /* options */
      prefix: 'i-',
      extraProperties: { display: 'inline-block' }, // 图标采用行内方式展示
    }),
  ],
})
