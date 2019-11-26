<template>
    <Layout>
        <h1 class="main-title" style="margin-bottom: 1.5rem">Todas as Notícias</h1>

        <section id="search-post">
            <div class="row">
                <div class="col-12">
                    <div class="post-search">
                        <div class="icon"><font-awesome :icon="['fas', 'search']"/></div>
                        <input type="text" name="search" id="search" placeholder="Pesquisar" v-model="search">
                    </div>
                </div>
            </div>
        </section>

        <div v-if="filteredList.length > 0">
            <div class="row">  
                <article class="col-lg-4 col-md-6" v-for="post in filteredList" :key="post.node.id">
                    <g-link :to="post.node.path"><g-image class="tag__image" :src="post.node.featured_image" /></g-link>
                    <g-link :to="post.node.path"><p class="tag__title">{{ post.node.title }}</p></g-link>
                    <span class="tag__date">
                        <font-awesome :icon="['fas', 'clock']"/>&nbsp;&nbsp;{{ post.node.date }}
                    </span>     
                </article>
            </div>
        </div> 
        <div v-else>
            <div class="row">
                <div class="col-12 text-center empty">
                    <font-awesome :icon="['fas', 'sad-tear']"/>
                    <p>Sua busca não retornou resultados com as palavras digitadas. Tente novamente!</p>
                </div>
            </div>
        </div>

    </Layout>    
</template>

<static-query>
{
	allPost {
        edges {
            node {
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
</static-query>

<script>
export default {
    data: () => ({
        search: ''
    }), 
    
    computed: {
        filteredList() {
            return this.$static.allPost.edges.filter(post => {
                return post.node.title.toLowerCase().includes(this.search.toLowerCase().trim())
            })
        }
    },    
}
</script>
