<template>
    <Layout>
        <h3 class="main-title" style="margin-bottom: 3rem">Assunto: {{ $page.tag.title }}</h3>
        <div class="row">
          <article class="col-lg-4 col-md-6" v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id">
            <div class="tag">
              <g-link :to="edge.node.path"><g-image class="tag__image" :src="edge.node.featured_image" /></g-link>
              <g-link :to="edge.node.path"><p class="tag__title">{{ edge.node.title }}</p></g-link>
              <span class="tag__date">
                <font-awesome :icon="['fas', 'clock']"/>&nbsp;&nbsp;{{ edge.node.date }}
              </span>
            </div>      
          </article>
        </div>

    </Layout>    
</template>

<page-query>
query($id: ID!){
    tag(id: $id) {
        title
        belongsTo {
            edges {
            node {
                ... on Post {
                    id
                    title
                    date (format: "DD/MM/YYYY", locale: "pt-BR")
                    tags {
                        id
                        path
                    }
                    path
                    featured_image
                }
            }
            }
        }
    }
}
</page-query>
