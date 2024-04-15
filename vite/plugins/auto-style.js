import { createStyleImportPlugin } from 'vite-plugin-style-import'

export default function createAutoStyle() {
  return createStyleImportPlugin({
    resolves: [{
      libraryName: '@nutui/nutui',
      libraryNameChangeCase: 'pascalCase',
      resolveStyle: (name) => {
        return `@nutui/nutui/dist/packages/${name.toLowerCase()}/index.scss`
      },
    }]
  })
}