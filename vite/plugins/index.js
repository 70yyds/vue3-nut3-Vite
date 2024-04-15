import vue from '@vitejs/plugin-vue'

import createAutoImport from './auto-import'
import createAutoStyle from './auto-style'
import createCompression from './compression'
import createSetupExtend from './setup-extend'
export default function createVitePlugins(viteEnv, isBuild = false) {
    const vitePlugins = [vue()]
    vitePlugins.push(createAutoImport())
    vitePlugins.push(createAutoStyle())
    vitePlugins.push(createSetupExtend())
    isBuild && vitePlugins.push(...createCompression(viteEnv))
    return vitePlugins
}
