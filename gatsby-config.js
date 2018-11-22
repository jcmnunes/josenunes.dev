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
  ],
};
