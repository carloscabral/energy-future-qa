<template>
  <Landing>

      <div class="row hero align-items-start title">
        <div class="col-lg-7 col-xl-6">
          <h1 class="hero__title">Maior chamada de projetos do setor elétrico brasileiro</h1>
          <p class="hero__text">O Energy Future, hub virtual de inovação do setor elétrico, conecta projetos a grandes concessionárias do país. Procuramos soluções inovadoras que ajudem a melhorar a geração, transmissão e distribuição da energia elétrica no Brasil.</p>
          <button class="hero__button mt-3">Inscrições: 25 de novembro</button>
        </div>
        <div class="col-lg-5 col-xl-6">
          <g-image class="hero__image" src="~/assets/images/img-top-lp.png" width="900" />
        </div>
      </div>

      <Map />

      <!-- <section id="rules">
        <div class="rules">
          <h1 class="rules__title">Regulamentos</h1>
          <div class="rules__buttons">
            <button class="rules__button"><span class="d-none d-sm-none d-lg-inline">Conheça o </span>regulamento aneel</button>
            <button class="rules__button"><span class="d-none d-sm-none d-lg-inline">Veja nosso </span>regulamento jurídico</button>
          </div>
        </div>
      </section> -->

      <section id="steps">
        <div class="row">
          <div class="col-md-8 steps title">
            <h1 class="steps__title">Conheça as etapas de seleção</h1>
            <p class="steps__text">O funil de seleção do Energy Future foi criado com o objetivo de gerar aos participantes melhorias e aprendizados constantes, assim como filtrar e qualificar os projetos que serão avaliados pelas concessionárias parceiras.</p>
          </div>
        </div>
        <div class="row steps__line">
          
          <div class="steps__new-line" />

          <div class="col-lg-6 steps-list odd">
            <h1 class="steps-list__number">01</h1>
            <h2 class="steps-list__title">Inscrição de Projetos</h2>
            <p class="steps-list__text">Fique atento às datas e ao preenchimento de todas as informações do formulário. Inscreva-se no site. Não serão aceitos projetos enviados fora do prazo.</p>
          </div>
          <div class="col-lg-6 steps-list even space-up">
            <h1 class="steps-list__number">02</h1>
            <h2 class="steps-list__title">Triagem Administrativa</h2>
            <p class="steps-list__text">Nessa etapa, serão analisados o envio e formato dos documentos, além da adequação correta nas categorias. Exatidão das informações é fundamental.</p>
          </div>
          <div class="col-lg-6 steps-list odd">
            <h1 class="steps-list__number">03</h1>
            <h2 class="steps-list__title">Triagem Técnica</h2>
            <p class="steps-list__text">O grau de maturidade do seu projeto é fator decisório. Analise se você tem em mãos uma boa ideia com valor de mercado.</p>
          </div>
          <div class="col-lg-6 steps-list even space-up">
            <h1 class="steps-list__number">04</h1>
            <h2 class="steps-list__title">Triagem Qualitativa</h2>
            <p class="steps-list__text">Está de acordo com as regras do Manual da ANEEL? O crivo e conformidade com o manual da agência é fundamental para que você avance. Nessa fase, critérios como inovação, originalidade, sustentabilidade e escala no mercado também serão considerados.</p>
          </div>
          <div class="col-lg-6 steps-list odd">
            <h1 class="steps-list__number">05</h1>
            <h2 class="steps-list__title">Ativação das Concessionárias</h2>
            <p class="steps-list__text">Aqui o voto é de quem investe. As concessionárias irão avaliar, em cada uma das categorias, projetos atraentes às estratégias de inovação das empresas.</p>
          </div>
          <div class="col-lg-6 steps-list even space-up">
            <h1 class="steps-list__number">06</h1>
            <h2 class="steps-list__title">Prêmio Destaque Energy Future</h2>
            <p class="steps-list__text">Esse é seu grande dia! Os melhores projetos se apresentarão para as concessionárias, investidores anjos e fundos de investimentos. Além da oportunidade de mostrar seu projeto, os melhores colocados ganharão certificado de excelência e aceleração da empresa Make AB.</p>
          </div>                     
        </div>
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <button class="steps__button">Assine nossa newsletter!</button>
          </div>
        </div>
      </section>

      <section id="news">
        <div class="d-none d-sm-block">
          <div class="row align-items-center news__container">
            <div class="col-md-8">
              <h1 class="news__title">Notícias recentes</h1>
            </div>
            <div class="col-md-4 d-flex mt-2">
              <g-link to="/noticias/">Leia todas&nbsp;&nbsp;<g-image src="~/assets/images/ic-long-arrow.svg" width="20" /></g-link>
            </div>
          </div>
          <div class="row">
            <div class="col-md-7">
              <p class="news__text">Mantenha-se informado sobre o setor elétrico. Acesse nossa página de notícias com curadoria especial do Energy Future e das Concessionárias de energia.</p>
            </div>
          </div>
          <div class="news-carousel">
            <div class="news-carousel__image">
              <g-image :src="myData[activeNewsId].node.featured_image" width="900" fit="cover" />
            </div>
            <div class="news-carousel__slide">
              <div class="news-carousel-box">
                <small class="news-carousel-box__category">Notícias</small>
                <h2 class="news-carousel-box__title"><g-link :to="myData[activeNewsId].node.path">{{ myData[activeNewsId].node.title }}</g-link></h2>
                <small class="news-carousel-box__credits">Por <g-link :to="myData[activeNewsId].node.author.path">{{ myData[activeNewsId].node.author.id }}</g-link> em {{ myData[activeNewsId].node.date }}</small>
                <p class="news-carousel-box__excerpt">{{ myData[activeNewsId].node.excerpt }}</p>
                <div class="news-carousel-box__bottom">
                  <div class="news-carousel-box__previuos-btn" @click="goPrev"></div>
                  <div class="news-carousel-box__dots">
                    <div class="news-carousel-box__dot" :class="{ active: activeNewsId === 0 }"></div>
                    <div class="news-carousel-box__dot" :class="{ active: activeNewsId === 1 }"></div>
                    <div class="news-carousel-box__dot" :class="{ active: activeNewsId === 2 }"></div>
                  </div>
                  <div class="news-carousel-box__next-btn" @click="goNext"></div>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </section>

      <section id="faq">
        <div class="row align-items-center faq__container">
          <div class="col-md-8">
            <h1 class="faq__title">Ainda com dúvidas?</h1>
          </div>
          <div class="col-md-4 d-flex mt-2">
            <g-link to="/duvidas/">Acesso o FAQ&nbsp;&nbsp;<g-image src="~/assets/images/ic-long-arrow.svg" width="20" /></g-link>
          </div>
        </div>
        <div class="row">
          <div class="col-md-7">
            <p class="faq__text">Não queremos que você tenha dúvida em como participar do maior evento de Open Innovation do Brasil. Conheça todas as informações que podem te ajudar a inscrever seu projeto.</p>
          </div>
        </div>
        <div class="row faq__list">
          <div class="col-lg-4 col-md-6">
            <g-link to="/duvidas/#faq1">
              <div class="faq__item faq__item--blue">
                <g-image src="../assets/images/icon-faq-inscricao.svg" width="75" />
                <h3>Inscrição</h3>
                <p>É fácil. Esclareça como inscrever o seu projeto.</p>
              </div>
            </g-link>
          </div>
          <div class="col-lg-4 col-md-6">
            <g-link to="/duvidas/#faq2">
              <div class="faq__item faq__item--purple">
                <g-image src="../assets/images/icon-faq-selecao.svg" width="75" />
                <h3>Seleção</h3>
                <p>Tire suas dúvidas sobre o processo de seleção.</p>              
              </div>
            </g-link>
          </div>
          <div class="col-lg-4 col-md-6">
            <g-link to="/duvidas/#faq3">
              <div class="faq__item faq__item--green">
                <g-image src="../assets/images/icon-faq-resultados.svg" width="75" />
                <h3>Resultados</h3>
                <p>Saiba como comunicaremos com transparência todos os resultados.</p>              
              </div>
            </g-link>
          </div>
          <div class="col-lg-4 col-md-6">
            <g-link to="/duvidas/#faq4">
              <div class="faq__item faq__item--blue">
                <g-image src="../assets/images/icon-faq-contato.svg" width="75" />
                <h3>Contato</h3>
                <p>Não encontrou sua resposta no portal? Nós te ajudamos!</p>              
              </div>
            </g-link>
          </div>
          <div class="col-lg-4 col-md-6">
            <g-link to="/duvidas/#faq5">
              <div class="faq__item faq__item--purple">
                <g-image src="../assets/images/icon-faq-concessionarias.svg" width="75" />
                <h3>Concessionárias</h3>
                <p>Compreenda mais sobre a participação das concessionárias.</p>              
              </div>
            </g-link>
          </div>
        </div>
      </section>       

      <section id="supporters">
        <div class="row">
          <div class="col supporters title">
            <h1 class="supporters__title">Nossos Apoiadores</h1>
            <p class="supporters__text" >Temos grandes parceiros. Empresas que são expert em suas áreas de atuação e trazem para o Energy Future todo o seu conhecimento.</p>
            <div class="supporters__logos">
              <g-image class="supporters__items" src="~/assets/images/img-logo-apoio-cesar.png" width="100" />
              <g-image class="supporters__items" src="~/assets/images/img-logo-apoio-abacomm.svg" width="100" />
            </div>
          </div>
        </div>
      </section>

  </Landing>
</template>

<static-query>
{
	allPost (perPage: 3) {
    edges{
      node {
        title
        excerpt
        date (format: "DD/MM/YY", locale: "pt-BR")
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
import Map from '~/components/Map.vue'

export default {
  metaInfo: {
    title: 'Energy Future'
  },
  data: () => ({
    myData: null,
    activeNewsId: 0
  }),
  created() {
    this.myData = this.$static.allPost.edges
  },
  methods: {
    goPrev() {
        (this.activeNewsId <= 0) ? this.activeNewsId = 0 : this.activeNewsId --
    },
    goNext() {
        (this.activeNewsId >= this.myData.length - 1) ? this.activeNewsId = this.myData.length -1 : this.activeNewsId ++
    }    
  },
  components: { Map } 
}
</script>

<style lang="scss">

.hero {

  * {
    color: #fff;
  }

  &__image {
    width: 100%;
    position: relative;
    margin-top: 1.5rem;
    box-shadow: 0 2rem 4rem rgba($primary-color, .3);

    @media(min-width: 992px) {
      z-index: -999;
      opacity: .3;
      transform: translate(-10%, -10%);
      width: auto;
      margin-top: 0;
    }
  }

  &__button {
    @include colored-button($accent-color-1);
    margin-bottom: 1.5rem;
    width: 18rem;
    @media(min-width: 992px) {
      margin-bottom: 0;
    }    
  }
}

.rules {
  
  margin-top: 10rem;

  &__title {

    position: relative;
    text-align: left;

    @media (min-width: 576px) {
      text-align: center;
    }

    @media (min-width: 992px) {
        margin-top: 4.5rem;
    }

    &::before {
        content: "";
        position: absolute;
        width: 3rem;
        height: .22rem;
        top: -2.7rem;
        background-color: $primary-color;

        @media(min-width: 576px) {
          left: 50%;
          transform: translateX(-50%);
        }
    }    
  }

  &__button {

    display: block;
    margin: 1rem 0;

    @include colored-button($accent-color-1);
    * {
      text-transform: uppercase;
      font-size: .8rem;
    }
  }  

  &__buttons {

    display: block;
    margin-bottom: 1rem;

    @media (min-width: 480px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    @media (min-width: 768px) {
      display: flex;
      justify-content: space-around;
      margin: 0 auto;      
      max-width: 45rem;
    }  
  }
}

.supporters {
  
  margin: 3rem 0 10rem 0;
  
  &__logos {
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  &__items {
    height: 100%;
    flex-shrink: 1;
  }

  * {
      @media (min-width: 576px) {
        max-width: 35rem;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
      }
  }

  &__title {
    @extend .rules__title;
  }
}

.steps {
  &__title {
    @extend .rules__title;
    text-align: left;

    &::before {
        @media(min-width: 576px) {
          left: 0;
          transform: translateX(0);
        }
    } 
  }

  &__button {
    @include colored-button($accent-color-1);
    margin: 4.5rem auto 1.5rem auto;
    text-align: center;
    width: 100%;
  }
}

.steps-list {

  &__number {
    color: $secondary-color;
    margin: 0;
  }

  &__title {
    font-weight: 700;
    color: $primary-color;
  }

  &__text {
    max-width: 27rem;
    // margin: 0 auto;
    @media(min-width: 992px) {
      max-width: 100%;
    }    
  }
}

.steps__line {
  margin-top: 3rem;
  @media(min-width: 992px) {
    margin-top: 5rem;
  }
  position: relative;
  //animation: hue 1.5s linear 1s infinite;

  // @media(min-width: 992px) {
  //   &::after {
  //     content: "";
  //     position: absolute;
  //     height: 106%;
  //     width: 4px;
  //     top: 1rem;
  //     left: 50.45%;
  //     z-index: -999;
  //     transform: translateX(-50%);
  //     //background: linear-gradient(to bottom, $accent-color-1, $accent-color-2);
  //     background: linear-gradient(to bottom, $accent-color-1, $accent-color-2, $secondary-color);
  //     animation: hue 3s linear 1s infinite;
  //   }
  // }
}

.steps__new-line {

  @media(min-width: 992px) {
      position: absolute;
      height: 106%;
      width: 4px;
      top: 1rem;
      left: 50.45%;
      z-index: -999;
      transform: translateX(-50%);
      transform-origin: top;
      transition: all 1s cubic-bezier(0.4, 0.25, 0, 1) !important;
      background: linear-gradient(to bottom, $accent-color-1, $accent-color-2);
     
  }  
}

@keyframes hue {
  to {
    filter: hue-rotate(1turn);
  }
}

.odd {
  text-align: left;
  position: relative;

  @media(min-width: 992px) {
    transform: translateX(-6%);
    text-align: right;

    &::after {
      content: "";
      position: absolute;
      right: -8.75%;
      top: .75rem;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      border: 3px solid #fff;
      background: linear-gradient(to bottom, $accent-color-1, $accent-color-2);
      // animation: hue 3s linear 1s infinite;
      // background: linear-gradient(to bottom, $accent-color-1, $accent-color-2);
    }
  }

  @media(min-width: 1200px) {
    &::after {
      right: -8.55%;
    }
  }  
}

.even {
  text-align: left;
  position: relative;

  @media(min-width: 992px) {
    transform: translateX(6%);
    text-align: left;

    &::before {
      @extend .odd::after;
      left: -7%;
    }
  }

  @media(min-width: 1200px) {
    &::before {
      left: -6.6%;
    }
  }   
}

.space-up {
  margin: 3rem 0;
  @media(min-width: 992px) {
    margin-top: 9rem;
    margin-bottom: 0; 
  }
}

.faq {
  
  &__container {
    margin-top: 9rem;
  }

  &__title {
    @extend .steps__title;
    margin: 0;
  }

  &__text {
    margin-top: 1.5rem;
  }

  &__list {
    margin-top: 1.5rem;
  }

  &__item {
    margin: 1.5rem 0 .5rem;
    width: 95%;
    height: 12.5rem;
    padding: 1.5rem;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 2rem 2rem rgba($primary-color, 0.12);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    transition: all .2s ease;

    &:hover {
      box-shadow: 0 3rem 5rem rgba($primary-color, 0.3);
      border-style: none;
    }

    @media (min-width: 768px) {
      padding: 1.25rem;
    }

    * {
      color: $text-color;
      font-weight: normal;
    }

    &--blue {
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: .22rem;
        top: 0;
        left: 0;
        background-color: $accent-color-2;
      }
    }

    &--green {
      &::before {
        @extend .faq__item--blue::before;
        background-color: $accent-color-1;
      }
    }

    &--purple {
      &::before {
        @extend .faq__item--blue::before;
        background-color: $secondary-color;
      }
    }

    h3 {
      font-weight: 700;
      margin: 1rem 0 .25rem;
      color: $primary-color;
      @media (min-width: 768px) {
        font-size: .88rem;
      }
    }

    p {
      margin-bottom: 0;
      @media(min-width: 768px) {
        font-size: .88rem;
      }
    }
  }
}

.news {
  
  &__container {
    @extend .faq__container;
  }

  &__title {
    @extend .faq__title;
  } 
  
  &__text {
    @extend .faq__text;
  }
}

.news-carousel {
  
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 115vw;
    height: 10rem;
    background-color: rgba($light-grey, .23);
    z-index: -9000;
    transform: translate(-15%);
  }

  &__image {
    display: none;

    @media (min-width: 768px) {
      display: block;
      width: 31rem;
      height: 21rem;
      z-index: -999;

      img {
        width: inherit;
        height: inherit;
        object-fit: cover;
      }
    }
  }
  
  &__slide {
    position: relative;

    &::before {
      content: "";
      bottom: 1rem;
      left: 1rem;
      width: 1.83rem;
      height: 1.83rem;
      position: absolute;
      border: 2px solid $accent-color-1;
      border-top: none;
      border-right: none;
    }

    &::after {
      content: "";
      top: 1rem;
      right: 1rem;
      width: 1.83rem;
      height: 1.83rem;
      position: absolute;
      border: 2px solid $accent-color-1;
      border-bottom: none;
      border-left: none;    
    }
  
  
    min-width: 30.1rem;
    height: 17rem;
    background-color: #fff;
    box-shadow: 0 1rem 5rem rgba($primary-color, 0.12);
    z-index: 999;
    @media (min-width: 768px) {
      transform: translateX(-75%);
    }
    
    @media(min-width: 1200px) {
      transform: translateX(-15%);
    }
  }
}

.news-carousel-box {
  padding: 1.25rem 1.75rem;

  &__category {
    background-color: red;
    padding: .25rem .5rem .15rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: .7px;
    font-size: .6rem;
    margin: 0;
    display: inline-block;
    transform: translateY(-5px);
  }

  &__title, &__title * {
    color: $primary-color;
    font-weight: 700;
    margin: .5rem 0 0;
    font-size: 1.5rem !important;
    line-height: 1.33;
  }

  &__credits {
    font-size: .66rem;
    color: $primary-color;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: .7px;
    margin: .5rem 0 1rem;
    display: block;

    a {
      font-size: inherit;
      color: darken($accent-color-1, 5%);
    }
  }

  &__excerpt {
    font-size: .88rem;
  }

  &__bottom {
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
  }

  &__dots {
    display: flex;
    align-items: center;
    margin: 0 .55rem;
  }

  &__dot {
    width: .44rem;
    height: .44rem;
    background-color: $light-grey;
    border-radius: 50%;
    transition: background-color .2s ease;

    &.active {
      background-color: $primary-color;
    }
  }

  &__dot:not(:last-child) {
    margin-right: .55rem;
  }

  &__previuos-btn, &__next-btn {
    width: 3rem;
    height: 3rem;
    background-color: #fff;
    transition: background-color .2s ease;

    &:hover {
      background-color: $accent-color-1;
      cursor: pointer;
    }
  }

  &__previuos-btn {
    background-image: url('../assets/images/ic-long-arrow.svg');
    background-position: center;
    background-repeat: no-repeat;
    transform-origin: 50%;
    transform: rotate(180deg);    
  }

  &__next-btn {
    @extend .news-carousel-box__previuos-btn;
    background-position-y: 48%;
    transform: rotate(0);
  }
}

</style>
