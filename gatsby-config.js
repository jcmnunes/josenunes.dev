module.exports = {
  siteMetadata: {
    title: 'JN | Jose Nunes',
    menuLinks: [
      {
        id: 'home',
        name: 'Home',
        link: '/',
      },
      {
        id: 'about',
        name: 'About Me',
        link: '/about',
      },
      {
        id: 'resume',
        name: 'Resume',
        link: '/resume',
      },
      {
        id: 'blog',
        name: 'Blog',
        link: '/blog',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/favicon.png',

        appName: 'JN | Jose Nunes',
        appDescription: 'Personal website/vCard',
        developerName: 'Jose Nunes',
        developerURL: 'josenunes.xyz',
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#f45c43',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
  ],
};
