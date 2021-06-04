module.exports = {
  siteMetadata: {
    title: `Editing, Copywriting, Proofreading`,
    description: `Professional business page for all your editorial needs`,
    author: `@Wayne Mac Mavis`,
    menuLinks:[
      {
        name:'Home',
        link:'/'
      },
      {
        name:'About',
        link:'/about'
      },
      {
        name:'Services',
        link:'/services'
      },
      {
        name:'Resources',
        link:'/resources'
      },
      {
        name:'Contact',
        link:'/contact'
      },
      {
        name:'Blog',
        link:'/blog'
      },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `editing-proofreading-copywriting`,
        short_name: `editing`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
