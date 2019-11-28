<template>
  <Layout>

      <div class="row main-title align-items-center">
        <div class="col-md-8"><h1 class="m-0">Panoramas da inovação elétrica</h1></div>
        <div class="col-md-4 d-flex mt-2 justify-content-md-end">
          <g-link to="/author/Energy Future">Ver todas as notícias&nbsp;&nbsp;<g-image src="~/assets/images/ic-long-arrow.svg" width="20" /></g-link>
        </div>
      </div>

        <section id="top-news">
          <div class="row">
            <div class="col-xl-7 col-lg-8">
              <h3 class="news-title">Última notícia</h3>
              <g-link :to="getLastPost.node.path">
                <article class="latest-news">

                  <div class="latest-news__image">
                      <g-image :src="getLastPost.node.featured_image" width="900" />
                  </div>

                  <h2 class="latest-news__title">{{ getLastPost.node.title }}</h2>
                  <div class="latest-news__credits">
                    <p class="latest-news__author">por: {{ getLastPost.node.author.id }}</p>
                    <p class="latest-news__date"><font-awesome class="latest-news__icon" :icon="['fas', 'clock']"/>&nbsp;&nbsp;{{ getLastPost.node.date }}</p>
                  </div>

                </article>
              </g-link>
            </div>

            <div class="col-xl-5 col-lg-4">
              <h3 class="news-title">Mais recentes</h3>

              <div class="related-news">
                <article class="row related-news__container" v-for="edge in getLatestPosts" :key="edge.node.id">
                  <div class="col-xl-5" style="overflow: hidden">
                    <g-link :to="edge.node.path"><g-image class="related-news__image d-none d-xl-block" :src="edge.node.featured_image" /></g-link>
                  </div>
                  <div class="col-xl-7 px-xl-0 related-news__texts">
                    <g-link :to="edge.node.path"><p class="related-news__title">{{ edge.node.title }}</p></g-link>
                    <span class="related-news__date">
                      <font-awesome :icon="['fas', 'clock']"/>&nbsp;&nbsp;{{ edge.node.date }}
                    </span>
                  </div>              
                </article>
              </div>              

            </div>

          </div>
      </section>

      <section id="bottom-news">
        <h3 class="news-title">Destaques</h3>
        <div class="row">
          <article class="col-lg-4" v-for="edge in getHighlightedPosts" :key="edge.node.id">
            <div class="featured-news">
              <g-link :to="edge.node.path">
                <g-image class="featured-news__image" :src="edge.node.featured_image" />
                <p class="featured-news__title">{{ edge.node.title }}</p>
              </g-link>
              <span class="featured-news__date">
                <font-awesome :icon="['fas', 'clock']"/>&nbsp;&nbsp;{{ edge.node.date }}
              </span>
            </div>            
          </article>

        </div>
      </section>

      <section id="social-media">
        <div class="row mt-4">
          <div class="col">
            <SocialShare />
          </div>
        </div>
      </section>
      <!-- // allPost (perPage: 3) { -->

  </Layout>
</template>

<static-query>
{
	allPost (filter: { author: { eq: "Energy Future" }}) {
    edges{
      node {
        title
        date (format: "DD/MM/YYYY", locale: "pt-BR")
        isHighlight
        tags {
          id
          path
        }
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
</static-query>

<script>

import SocialShare from '~/components/SocialShare.vue'

export default {
  metaInfo: {
    title: 'Notícias',
    meta: [
      { charset: 'utf-8' },
      { name: "author", content: "Carlos Gomes Cabral" },
      { name: "description", content: "Saiba tudo sobre o panorama da inovação elétrica no Brasil através de notícias e comunicados do setor." },
      { name: "keywords", content: "Startups, Inovação, Setor elétrico, Concessionárias de energia" },
    ]    
  },
  computed: {
    getLastPost() {
      // return this.$static.allPost.edges.slice(-1)[0]
      return this.$static.allPost.edges[0]
    },    
    getHighlightedPosts() {
      return this.$static.allPost.edges.filter((e) => {
        return e.node.isHighlight === true
      })
    },
    getLatestPosts() {
      return this.$static.allPost.edges.slice(0, 3)
    },     
  },
  components: { SocialShare }
}
</script>

<style lang="scss">

.title {
  a {
    font-weight: 600;
    font-size: .85rem !important;
  }
}

.news-title {
  margin: 3rem 0 1.5rem;
  @include news-headline($accent-color-1);

  @media (min-width: 768px) {
    font-size: .77rem;
  }
}

</style>
