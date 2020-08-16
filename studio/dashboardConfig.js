export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5f38a025d56b5b9d92b422c5',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-vfvtjb63',
                  apiId: 'ac93aa27-bd9a-45d2-aee6-d62108d92489'
                },
                {
                  buildHookId: '5f38a02572903efa10781995',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-f7co3b97',
                  apiId: '4b7c233a-58e2-45ba-bee7-f344a7f15f80'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hongrosebara/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-f7co3b97.netlify.app', category: 'apps'}
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
