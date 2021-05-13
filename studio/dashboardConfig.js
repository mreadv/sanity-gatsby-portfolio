export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '609d5e79cbf9701a16fa84ab',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-jn29sr9b',
                  apiId: '0b25b680-67cb-4dc1-b3ac-881425503cab'
                },
                {
                  buildHookId: '609d5e79cada02199f3ee24b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-tkefq4ek',
                  apiId: 'a4eceb05-ff54-46da-b861-94f2092bbfad'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mreadv/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-tkefq4ek.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
