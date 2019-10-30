<template>
  <Layout>

    <div class="in-construction">
      <h1 class="title">Seja bem-vindo!</h1>
      <p>Essa página ainda está em construção. Retorne novamente mais tarde para verificar se tivemos atualização.</p>

      <Map />

      <section id="rules">
        <div class="rules">
          <h1 class="rules__title">Regulamentos</h1>
          <div class="rules__buttons">
            <button class="rules__button"><span class="d-none d-sm-none d-lg-inline">Conheça o </span>regulamento aneel</button>
            <button class="rules__button"><span class="d-none d-sm-none d-lg-inline">Veja nosso </span>regulamento jurídico</button>
          </div>
        </div>
      </section>

      <section id="supporters">
        <div class="row">
          <div class="col supporters title">
            <h1 class="supporters__title">Nossos Apoiadores</h1>
            <p class="supporters__text">Texts cache. It's a possible the rationale might thing copy over a with it to on harmonics. Impenetrable slowly a the how avoided lay morals, usual.</p>
          </div>
        </div>
      </section>      

    </div>

  </Layout>
</template>

<script>
import Map from '~/components/Map.vue'

export default {
  metaInfo: {
    title: 'Energy Future'
  },
  components: { Map } 
}
</script>

<style lang="scss">

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
        background-color: $primary-color;
        top: -2.7rem;

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

  margin-top: 5rem;

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


</style>
