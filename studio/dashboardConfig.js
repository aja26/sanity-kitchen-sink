export default {
  widgets: [
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
                  buildHookId: '609bfb8d139b5179a5a1b43c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-7ei1dajt',
                  apiId: 'b2abf414-e3a7-4089-b21f-b669e23f393b'
                },
                {
                  buildHookId: '609bfb8ecee33253a8b3f2d8',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-jqprs1s4',
                  apiId: '61f48f2e-12c8-47e2-8ce0-a95ceb71443a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aja26/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-jqprs1s4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
