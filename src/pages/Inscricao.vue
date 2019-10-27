<template>
  <Layout>
      <div class="row">
        <div class="col-lg-7 col-xl-6">
          <h1 class="title">Inscreva-se!</h1>
          <h2 class="subtitle">Os projetos inscritos no Energy Future devem estar de acordo com os regulamentos da Aneel e com as diretrizes próprias da chamada. É importante que você conheça e veja se está dentro do perfil.</h2>
        </div>
        <div class="col-lg-5 col-xl-5 offset-xl-1">
          <g-image class="form-image" src="~/assets/images/img-form-subscribe.svg" />
        </div>
      </div>

      <section class="subscribe-section">
        <div class="row align-items-center">
          <div class="col-lg-8 col-xl-7 d-none d-lg-block"><h3>Se já leu os regulamentos, clique aqui e se inscreva!</h3></div>
          <div class="col-lg-4 col-xl-5">
            <button class="subscribe-button">Inscreva seu projeto!</button>
          </div>
        </div>  
      </section>

      <section class="options-section">
        <div class="row ">
          <div class="col-lg-4">
            <h4 class="option__label">Clique aqui para acessar o regulamento do Energy Future:</h4>
            <div class="options-section__btn-container">
                <button class="options-section__button one d-none d-xl-block">Regulamento Energy Future</button>
                <button class="options-section__button one d-xl-none">Regulamento E.F.</button>
                <font-awesome class="options-section__icon" :icon="['fas', 'arrow-right']"/>
            </div>
          </div>
          <div class="col-lg-4">
            <h4 class="option__label">Clique aqui para acessar o regulamento do Aneel:</h4>
            <div class="options-section__btn-container">
                <button class="options-section__button two">Regulamento Aneel</button>
                <font-awesome class="options-section__icon" :icon="['fas', 'arrow-right']"/>
            </div>  
          </div>
          <div class="col-lg-4">
            <h4 class="option__label">Dúvidas? Veja nossas perguntas e respostas mais frequentes:</h4>
            <div class="options-section__btn-container">
                <button class="options-section__button three">Acesse nosso Faq</button>
                <font-awesome class="options-section__icon" :icon="['fas', 'arrow-right']"/>
            </div>
          </div>
        </div>
      </section>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Inscrição',
    meta: [
      { charset: 'utf-8' },
      { name: "author", content: "Carlos Gomes Cabral" },
      { name: "description", content: "Entenda as regras, preencha o formulário e aplique o seu projeto para concorrer ao prêmio Energy Future!" },
      { name: "keywords", content: "Startups, Inovação, Setor elétrico, Concessionárias de energia" },
    ]
  }
}
</script>

<style lang="scss">

.form-image {
  display: none;

  @media (min-width: 1200px) {
    transform: translateY(0);
    width: 23.75rem !important;
  }  

  @media (min-width: 992px) {
    display: block;
    width: 23.75rem;
    transform: translateY(7%);
  }   
}

.subscribe-section {
  margin-top: 1.5rem;
  position: relative;

  @media (min-width: 992px) {
    
    margin-top: 5rem;
    
    &::after {
      content: "";
      position: absolute;
      bottom: -1rem;
      left: 0;
      width: 100%;
      height: .22rem;
      background-color: $accent-color-2;
    }
  }
}

.subscribe-button {
  @include colored-button($accent-color-2);
  width: 100%;
  text-align: center;

  @media (min-width: 1200px) {
    transform: translateX(1.2rem);
    width: 87%;
  }   
}

.options-section {
  margin-top: 5rem;

  &__btn-container {
    position: relative;
  }

  &__button {
    width: 100%;
  }

  &__icon {
    position: absolute;
    right: 1rem;
    top: 25%;
    color: #fff;
  }
}

.one {
    @include colored-button($secondary-color);
}

.two {
    @include colored-button($primary-color);
}

.three {
    @include colored-button($accent-color-1);
}

// .option-one {
//   &__button {
//     @include colored-button($secondary-color);
//     width: 100%;
//   }
// }

// .option-two {
//   &__button {
//     @include colored-button($primary-color);
//     width: 100%;
//   }
// }

// .option-three {
//   &__button {
//     @include colored-button($accent-color-1);
//     width: 100%;
//   }
// }


</style>
