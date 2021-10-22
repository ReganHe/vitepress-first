module.exports = {
  title: 'Hello VitePress',
  description: 'Just playing around.',
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/markdowns/home/1',
        activeMatch: '/markdowns/home/',
      },
      {
        text: 'Guide',
        link: '/markdowns/guide/1',
        activeMatch: '/guide/',
      },
    ],
    sidebar: {
      '/markdowns/home/': [
        {
          text: 'Home',
          link: '/markdowns/home/1',
        },
      ],
      '/markdowns/guide/': [
        {
          text: 'Guide',
          children: [
            {
              text: 'Guide 1',
              link: '/markdowns/guide/1',
            },
            {
              text: 'Guide 2',
              link: '/markdowns/guide/2',
            },
          ],
        },
      ],
    },
  },
};
