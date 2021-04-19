module.exports = {
  lang: 'en-US',
  title: 'Vue JS Modal',
  description: 'Easy to use, highly customizable Vue.js modal library.',

  themeConfig: {
    repo: 'euvl/vue-js-modal',
    docsDir: 'docs',

    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    algolia: {
      apiKey: 'c57105e511faa5558547599f120ceeba',
      indexName: 'vitepress'
    },

    nav: [
      { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
      {
        text: 'Release Notes',
        link: 'https://github.com/euvl/vue-js-modal/releases'
      }
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/': getGuideSidebar()
    }
  }
}

function getGuideSidebar() {
  return [
    {
      text: 'Introduction',
      children: [
        { text: 'Getting Started', link: '/',  },
        { text: 'Events', link: '/guide/events' },
        { text: 'Properties', link: '/guide/properties' },
        { text: 'Slots', link: '/guide/slots' },
        { text: 'Usage', link: '/guide/usage' },
        { text: 'Examples', link: '/examples/index' },
      ]
    }
  ]
}
