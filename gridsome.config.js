const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/*.scss'),
      ],
    })
}

module.exports = {
  siteName: 'Energy Future',
  
  templates: {
    Post: '/noticias/:title',
    Tag: '/tag/:id',
    Author: '/author/:id',
  },

  plugins: [
    // {
    //   use: '@gridsome/plugin-google-analytics',
    //   options: {
    //     id: 'UA-150844840-1'
    //   }
    // },
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-5G6WRHR',
        enabled: true,
        debug: true
      }
    },    
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: './content/posts/**/*.md',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          },
          author:{
            typeName: 'Author',
            create: true
          }          
        }        
      }
    }        
  ],

  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
	}
}
