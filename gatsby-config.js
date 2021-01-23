module.exports = {
  siteMetadata: {
    title: `Anya and Sharu`,
    description: `A report of the year 2020 when Sharu mama visited Anya in the USA.`,
    author: `Sharath Nagaraj <sharathnraj@yahoo.com>`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `anya-and-sharu`,
        short_name: `anya-and-sharu`,
        start_url: `/`,
        background_color: `#6023a7`,
        theme_color: `#6023a7`,
        display: `minimal-ui`,
        icon: "src/images/logo-512x512.png",
        icons: [
          {
            "src": "/icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any maskable"
          },
          {
            "src": "/icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any maskable"
          }
        ]
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/404`]
      }
    }
  ],
}
