module.exports = {
  base: '/quard/',
  title: ' ',
  description: 'pipe = (...fns) => x => fns.reduce((v, f) => f(v), x)',
  repo: 'https://github.com/EPSON-LEE', // 添加 github 链接
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  port:65,
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Translation', link: '/translate/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Book', link: '/book/' },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'github',
        // 这里是下拉列表展现形式。
        items: [
          { text: 'superYipe', link: 'https://github.com/EPSON-LEE' }
        ]
      }
    ],
    // 为以下路由添加侧边栏
    sidebar: {
      '/guide/': [
        'one',
        'two'
      ],
      '/translate/': [
        'three',
        'four',
      ],
      '/bookList/': [
        'five'
      ]
    },
    serviceWorker: {
      updatePopup: true // Boolean | Object, 默认值是 undefined.
      // 如果设置为 true, 默认的文本配置将是: 
      // updatePopup: { 
      //    message: "New content is available.", 
      //    buttonText: "Refresh" 
      // }
    }
  },
  configureWebpack: (config, isServer) => {
    // webpack配置对象
    // if (!isServer) {
    //   // 修改客户端的 webpack 配置
    // }
  },
}