import DefaultTheme from 'vitepress/theme'
import VueJSModal from '../../../src'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(VueJSModal)
  }
}
