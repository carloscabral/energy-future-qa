<template>
  <Layout>

      <div class="row main-title align-items-center">
        <div class="col-md-8"><h1 class="m-0">Panoramas da inovação elétrica</h1></div>
        <div class="col-md-4 d-flex mt-2 justify-content-md-end">
          <!-- <g-link to="/">Ver todas as notícias&nbsp;&nbsp;<g-image src="~/assets/images/ic-long-arrow.svg" width="20" /></g-link> -->
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
                <article class="row related-news__container" v-for="edge in $static.allPost.edges" :key="edge.node.id">
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

  </Layout>
</template>

<static-query>
{
	allPost (perPage: 3) {
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
    title: 'Notícias'
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
    }
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

// .latest-news, .related-news {
//   position: relative;
// }

// .latest-news {

//   display: inline-block;

//   &::after {
//     content:'';
//     position: absolute;
//     left: 0; 
//     top: 0;
//     width: 100%; 
//     height: 20rem;
//     @media(min-width: 576px) {
//       height: 24rem;
//     }      
//     display: inline-block;
//     background: linear-gradient(to bottom, rgba(0,47,75, 0) 30%, #011E41 100%);
//   }
  
//   img {
//     display: block;
//     width: 100%;
//     height: 20rem;
//     @media(min-width: 576px) {
//       height: 24rem;
//     }    
//     object-fit: cover;    
//   }

//   &__title {
//     position: absolute;
//     left: 1rem;
//     right: 1rem;
//     @media(min-width: 768px) {
//       left: 1.5rem;
//       right: 1.5rem;      
//     }    
//     bottom: 1.5rem;
//     font-weight: 600;
//     margin-bottom: 1.5rem;
//   }

//   &__title, &__author, &__date {
//     color: #fff;
//     z-index: 999;
//   }

//   &__credits {
//     display: flex;
//     position: absolute;
//     left: 1rem;
//     right: 1rem;
//     @media(min-width: 768px) {
//       left: 1.5rem;
//       right: 1.5rem;      
//     }
//     bottom: 0;
    
//     > * {
//       text-transform: uppercase;
//       font-size: .77rem;
//       letter-spacing: .7px;    

//       @media (min-width: 768px) {
//         font-weight: 600;     
//       }
//     }  
//   }

//   &__icon {
//     color: $accent-color-1;
//   }  

//   &__author {
//     margin-right: 3rem;
//     position: relative;

//     &::after {
//       content: "";
//       position: absolute;
//       top: -.25rem;
//       right: -1.5rem;
//       height: 1.5rem;
//       width: 1px;
//       background-color: $accent-color-1;
//     }

//   }

// }

// .related-news {

//   &__container:not(:first-child) {
//     margin-top: 1rem;
//   }

//   &__container:not(:last-child) {
    
//     margin-bottom: 1.5rem;

//     @media (min-width: 992px) {
//       margin-bottom: 0;
//     }    
//   }

//   &__image {
//     width: 100%;
//     object-fit: cover;
//     height: 7.32rem;
//     display: block;
//   }

//   &__texts {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//   }

//   &__title {
//     font-size: .88rem;
//     color: $primary-color;
//     font-weight: 500;
//     max-width: 26.6rem;
//     margin-bottom: .35rem;
//   }

//   &__date {
//     font-size: .66rem;
//     font-weight: 500;
//     color: darken($light-grey, 15%);
//     letter-spacing: .5px;
//   }

// }

// .featured-news, .tag {

//   margin-bottom: 3rem;

//   &__image {
//     @extend .related-news__image;
//     height: 12rem;
//     max-width: 26.6rem;
//     margin-bottom: .5rem;

//     @media(min-width: 576px) {
//       height: 16rem;
//     }      
//     @media (min-width: 992px) {
//       height: 13rem;
//     }
//   }

//   &__title {
//     @extend .related-news__title;
//     margin-bottom: .35rem;
//   }

//   &__date {
//     @extend .related-news__date;
//   }
// }

</style>
