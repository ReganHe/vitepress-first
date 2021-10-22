module.exports = {
  title: 'Hello VitePress',
  description: 'Just playing around.',
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/zh-CN/home/1',
        activeMatch: '/zh-CN/home/',
      },
      {
        text: 'Guide',
        link: '/zh-CN/guide/1',
        activeMatch: '/guide/',
      },
    ],
    sidebar: {
      '/zh-CN/home/': [
        {
          text: 'Home',
          link: '/zh-CN/home/1',
        },
      ],
      '/zh-CN/guide/': [
        {
          text: 'Guide',
          children: [
            {
              text: 'Guide 1',
              link: '/zh-CN/guide/1',
            },
            {
              text: 'Guide 2',
              link: '/zh-CN/guide/2',
            },
          ],
        },
      ],
    },
  },
};
