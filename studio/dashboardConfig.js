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
                  buildHookId: '5f67f5786ac81549e13ec4e9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-jh7k94b9',
                  apiId: '12d54e33-5116-435b-beb6-18bc34de4f28'
                },
                {
                  buildHookId: '5f67f5783e1e08579175dd42',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-pr1vgdks',
                  apiId: '8594cb50-18bb-4f5e-907a-9472974e5150'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SinaKhalili/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-pr1vgdks.netlify.app',
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
