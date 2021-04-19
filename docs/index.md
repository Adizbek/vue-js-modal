# Getting Started

[[toc]]

::: warning Reminder
This is for **Vue 3 only!**
:::

## Installation

```bash
npm install vue-js-modal --save
```

```bash
yarn add vue-js-modal
```

## Client

Import plugin in your main file:

```js
import { createApp } from 'vue'
import VModal from 'vue-js-modal'

const app = createApp()

app.use(VModal)

app.mount('#app')
```

If you want to split styles from main package or write your own styles:

```js
import { createApp } from 'vue'
import VModal from 'vue-js-modal/dist/index.nocss.js'
import 'vue-js-modal/dist/styles.css' // Optional

const app = createApp()

app.use(VModal)

app.mount('#app')
```

## Nuxt (SSR)

To use this plugin with Nuxt.js you need to create a plugin file and reference it in the `nuxt.config.js` file.

```javascript
// nuxt.config.js
export default {
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/vue-js-modal.js'
  ],
}
```

```js
// plugins/vue-js-modal.js
import Vue from 'vue'
import VModal from 'vue-js-modal/dist/ssr.nocss'

import 'vue-js-modal/dist/styles.css'

Vue.use(VModal, { ... })

export default function(_, inject) {
  inject('modal', Vue.prototype.$modal)
}
```

::: tip Extracted CSS
The `/dist` directory contains a version of the build with extracted CSS files. This is useful for SSR but also can be used with the purely client-side implementation when you need more flexibility in controlling your stylesheets.

- `ssr.index.js` - SSR build with inline CSS
- `ssr.nocss.js` - SSR build without inline CSS
- `index.nocss.js` - Client build without inline CSS
- `styles.css` - Stylesheet

:::
