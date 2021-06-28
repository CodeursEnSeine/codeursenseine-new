const slugify = require(`slugify`);

module.exports = {
  pathPrefix: process.env.GATSBY_ARCHIVE
    ? `/archive-${process.env.GATSBY_ARCHIVE}`
    : undefined,
  siteMetadata: {
    title: `Codeurs en Seine`,
    description: `Rencontre de codeuses & codeurs à Rouen`,
    siteUrl: `https://www.codeursenseine.com`,
    author: `@codeursenseine`,
    currentYear: `2021`,
  },
  plugins: [
    `gatsby-alias-imports`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/meetups`,
        name: `meetups`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/conferences`,
        name: `conferences`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/sponsors`,
        name: `sponsors`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/speakers`,
        name: `speakers`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/associations`,
        name: `associations`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/organisers`,
        name: `organisers`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `pages`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Codeurs en Seine`,
        short_name: `Codeurs en Seine`,
        start_url: `/`,
        background_color: `#034ea2`,
        theme_color: `#034ea2`,
        display: `minimal-ui`,
        icon: `src/images/ces.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allFile } }) => {
              return allFile.nodes.map((node) => {
                return Object.assign(
                  {},
                  {
                    title: node.childMdx.frontmatter.title,
                    description: node.childMdx.excerpt,
                    date: node.childMdx.frontmatter.meetup_date,
                    url: `${site.siteMetadata.siteUrl}/meetups/events/${slugify(
                      node.childMdx.frontmatter.slug,
                      {
                        strict: true,
                        lower: true,
                      }
                    )}`,
                    guid: `${
                      site.siteMetadata.siteUrl
                    }/meetups/events/${slugify(node.childMdx.frontmatter.slug, {
                      strict: true,
                      lower: true,
                    })}`,
                    // custom_elements: [
                    //   { "content:encoded": node.childMdx.html },
                    // ],
                  }
                );
              });
            },
            query: `
              {
                allFile(filter: {sourceInstanceName: {eq: "meetups"}, childMdx: {frontmatter: {published: {eq: true}}}}, sort: {order: DESC, fields: childMdx___frontmatter___meetup_date}) {
                  nodes {
                    childMdx {
                      frontmatter {
                        meetup_date
                        slug
                        title
                      }
                      excerpt
                    }
                  }
                }
              }
            `,
            output: "/meetups/rss.xml",
            title: "Meetups - Codeurs en Seine",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.codeursenseine.com",
        sitemap: "https://www.codeursenseine.com/sitemap.xml",
        env: {
            development: {
                policy: [{ userAgent: '*', disallow: ['/'] }]
            },
            production: {
                policy: [{ userAgent: '*', allow: '/' }]
            }
        }
      },
    },
  ],
};
