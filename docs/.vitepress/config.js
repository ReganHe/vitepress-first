module.exports = {
  title: 'Hello VitePress',
  description: 'Just playing around.',
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/home/1',
        activeMatch: '/home/',
      },
      {
        text: 'Guide',
        link: '/guide/1',
        activeMatch: '/guide/',
      },
    ],
    sidebar: {
      '/home/': [
        {
          text: 'Home',
          link: '/home/1',
        },
      ],
      '/guide/': [
        {
          text: 'Guide',
          children: [
            {
              text: 'Guide 1',
              link: '/guide/1',
            },
            {
              text: 'Guide 2',
              link: '/guide/2',
            },
          ],
        },
      ],
    },
  },
};
