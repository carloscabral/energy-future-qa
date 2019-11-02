<template>
  <Layout>

      <div class="row title align-items-center">
        <div class="col-md-8"><h1 class="m-0">Panoramas da inovação elétrica no Brasil</h1></div>
        <div class="col-md-4 d-flex mt-2 justify-content-md-end">
          <g-link to="/">Ver todas as notícias&nbsp;&nbsp;<g-image src="~/assets/images/ic-long-arrow.svg" width="20" /></g-link>
        </div>
      </div>

        <section id="top-news">
          <div class="row">
            <div class="col-xl-7 col-lg-8">
              <h3 class="news-title">Última notícia</h3>
              <div class="latest-news">

                <div class="latest-news__image">
                    <g-image src="~/assets/images/img-test-3.jpg" width="900" />
                </div>

                <h2 class="latest-news__title">Entenda como funciona o Setor Elétrico Brasileiro.</h2>
                <div class="latest-news__credits">
                  <p class="latest-news__author">por: energy future</p>
                  <p class="latest-news__date"><font-awesome class="latest-news__icon" :icon="['fas', 'clock']"/>&nbsp;&nbsp;22/10/2019</p>
                </div>

              </div>
            </div>

            <div class="col-xl-5 col-lg-4">
              <h3 class="news-title">Mais recentes</h3>
              <div class="related-news">
                <div class="row related-news__container">
                  <div class="col-xl-5">
                    <g-image class="related-news__image d-none d-xl-block" src="~/assets/images/img-test-3.jpg" width="900" />
                  </div>
                  <div class="col-xl-7 px-xl-0 related-news__texts">
                    <p class="related-news__title">Entenda como funciona o Setor Elétrico Brasileiro.</p>
                    <span class="related-news__date">
                      <font-awesome :icon="['fas', 'clock']"/>&nbsp;&nbsp;22/10/2019
                    </span>
                  </div>              
                </div>
                <div class="row related-news__container">
                  <div class="col-xl-5">
                    <g-image class="related-news__image d-none d-xl-block" src="~/assets/images/img-materia-2.png" width="900" />
                  </div>
                  <div class="col-xl-7 px-xl-0 related-news__texts">
                    <p class="related-news__title">Conheça formas de financiamento para startups.</p>
                    <span class="related-news__date">
                      <font-awesome :icon="['fas', 'clock']"/>&nbsp;&nbsp;22/10/2019
                    </span>
                  </div>              
                </div>
                <div class="row related-news__container">
                  <div class="col-xl-5">
                    <g-image class="related-news__image d-none d-xl-block" src="~/assets/images/img-materia-3.png" width="900" />
                  </div>
                  <div class="col-xl-7 px-xl-0 related-news__texts">
                    <p class="related-news__title">Os caminhos da modernização do setor elétrico brasileiro.</p>
                    <span class="related-news__date">
                      <font-awesome :icon="['fas', 'clock']"/>&nbsp;&nbsp;22/10/2019
                    </span>
                  </div>              
                </div>                        
              </div>
            </div>
          </div>
      </section>

      <section id="bottom-news">
        <h3 class="news-title">Destaques</h3>
        <div class="row">
          <div class="col-lg-4">
            <div class="featured-news">
              <g-image class="featured-news__image" src="~/assets/images/img-materia-2.png" width="900" />
              <p class="featured-news__title">Conheça formas de financiamento para startups</p>
              <span class="featured-news__date">
                <font-awesome :icon="['fas', 'clock']"/>&nbsp;&nbsp;22/10/2019
              </span>
            </div>            
          </div>
          <div class="col-lg-4">
            <div class="featured-news">
              <g-image class="featured-news__image" src="~/assets/images/img-materia-3.png" width="900" />
              <p class="featured-news__title">Os caminhos da modernização do setor elétrico brasileiro.</p>
              <span class="featured-news__date">
                <font-awesome :icon="['fas', 'clock']"/>&nbsp;&nbsp;22/10/2019
              </span>
            </div>            
          </div>
          <div class="col-lg-4">
            <div class="featured-news">
              <g-image class="featured-news__image" src="~/assets/images/img-test-6.jpg" width="900" />
              <p class="featured-news__title">Duis autem vel eum iriure dolor in hendrerit in vulputate.</p>
              <span class="featured-news__date">
                <font-awesome :icon="['fas', 'clock']"/>&nbsp;&nbsp;22/10/2019
              </span>
            </div>            
          </div>
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

<script>

import SocialShare from '~/components/SocialShare.vue'

export default {
  metaInfo: {
    title: 'Notícias'
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

.latest-news, .related-news {
  position: relative;
}

.latest-news {

  display: inline-block;

  &::after {
    content:'';
    position: absolute;
    left: 0; 
    top: 0;
    width: 100%; 
    height: 20rem;
    @media(min-width: 576px) {
      height: 24rem;
    }      
    display: inline-block;
    background: linear-gradient(to bottom, rgba(0,47,75, 0) 30%, #011E41 100%);
  }
  
  img {
    display: block;
    width: 100%;
    height: 20rem;
    @media(min-width: 576px) {
      height: 24rem;
    }    
    object-fit: cover;    
  }

  &__title {
    position: absolute;
    left: 1rem;
    right: 1rem;
    @media(min-width: 768px) {
      left: 1.5rem;
      right: 1.5rem;      
    }    
    bottom: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  &__title, &__author, &__date {
    color: #fff;
    z-index: 999;
  }

  &__credits {
    display: flex;
    position: absolute;
    left: 1rem;
    right: 1rem;
    @media(min-width: 768px) {
      left: 1.5rem;
      right: 1.5rem;      
    }
    bottom: 0;
    
    > * {
      text-transform: uppercase;
      font-size: .77rem;
      letter-spacing: .7px;    

      @media (min-width: 768px) {
        font-weight: 600;     
      }
    }  
  }

  &__icon {
    color: $accent-color-1;
  }  

  &__author {
    margin-right: 3rem;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: -.25rem;
      right: -1.5rem;
      height: 1.5rem;
      width: 1px;
      background-color: $accent-color-1;
    }

  }

}

.related-news {

  &__container:not(:first-child) {
    margin-top: 1rem;
  }

  &__container:not(:last-child) {
    
    margin-bottom: 1.5rem;

    @media (min-width: 992px) {
      margin-bottom: 0;
    }    
  }

  &__image {
    width: 100%;
    object-fit: cover;
    height: 7.32rem;
    display: block;
  }

  &__texts {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__title {
    font-size: .88rem;
    color: $primary-color;
    font-weight: 500;
    max-width: 26.6rem;
    margin-bottom: .35rem;
  }

  &__date {
    font-size: .66rem;
    font-weight: 500;
    color: darken($light-grey, 15%);
    letter-spacing: .5px;
  }

}

.featured-news {

  margin-bottom: 3rem;

  &__image {
    @extend .related-news__image;
    height: 12rem;
    max-width: 26.6rem;
    margin-bottom: .5rem;

    @media(min-width: 576px) {
      height: 16rem;
    }      
    @media (min-width: 992px) {
      height: 13rem;
    }
  }

  &__title {
    @extend .related-news__title;
    margin-bottom: .35rem;
  }

  &__date {
    @extend .related-news__date;
  }
}

</style>
