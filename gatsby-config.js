module.exports = {
  siteMetadata: {
    title: 'JN | Jose Nunes',
    author: 'Jose Nunes',
    description: 'Personal Website/Blog (Powered by Gatsby)',
    siteUrl: 'https://josenunes.xyz',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 652,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener noreferrer',
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JN | Jose Nunes`,
        short_name: `JN`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#f45c43`,
        display: `standalone`,
        icon: `src/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#f45c43`,
        showSpinner: false,
      },
    },
  ],
};
