module.exports = {
  base: '/quard/',
  title: 'superYipe',
  description: 'Just playing around',
  repo: 'https://github.com/txs1992/mt-blog', // 添加 github 链接
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  port:65,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '翻译', link: '/translate/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'github',
        // 这里是下拉列表展现形式。
        items: [
          { text: 'focus-outside', link: 'https://github.com/txs1992/focus-outside' },
          { text: 'stylus-converter', link: 'https://github.com/txs1992/stylus-converter' }
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
      ]
    }
  },
  configureWebpack: (config, isServer) => {
    // webpack配置对象
    // if (!isServer) {
    //   // 修改客户端的 webpack 配置
    // }
  },
}