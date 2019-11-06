<template>
  <Layout>
        <!-- <g-image :src="'~/assets/images/'+ getAuthorLogo" width="150" /><h1 class="title">Assunto: {{ $page.author.title }}</h1> -->
        <div class="top-title">
            <g-image v-if="$page.author.title === 'Energy Future'" src="@/assets/images/img-logo.svg" width="150" />
            <g-image v-if="$page.author.title === 'Enel'" src="@/assets/images/img-logo-enel.svg" width="150" />
            <!-- <g-image v-if="$page.author.title === 'Enel'" src="@/assets/images/img-logo-enel.svg" width="150" />
            <g-image v-if="$page.author.title === 'Enel'" src="@/assets/images/img-logo-enel.svg" width="150" />
            <g-image v-if="$page.author.title === 'Enel'" src="@/assets/images/img-logo-enel.svg" width="150" /> -->
            <h3>Notícias</h3>
        </div>
        <div class="row">
          <article class="col-lg-4" v-for="edge in $page.author.belongsTo.edges" :key="edge.node.id">
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
    author(id: $id) {
        title
        belongsTo {
            edges {
            node {
                ... on Post {
                    id
                    title
                    date (format: "DD/MM/YYYY", locale: "pt-BR")
                    author {
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

<script>
export default {
  computed: {
    getAuthorLogo() {
        let title = this.$page.author.title
        if (title.toLowerCase().includes("energy")) {
            return "energy-future"
        } else if (title.toLowerCase().includes("enel")) {
            return "enel"
        } else {
            return "energy-future"
        }
        //return 
    }
  },    
}
</script>


<style lang="scss">

.top-title {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    margin: 4.5rem 0 3rem 0;

    img {
        margin-right: 1.5rem;
    }

    h3 {
        color: $accent-color-2;
        line-height: .75;
    }
}

</style>
