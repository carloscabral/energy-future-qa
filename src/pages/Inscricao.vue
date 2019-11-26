<template>
  <Layout>
      <div class="row align-items-start main-title">
        <div class="col-lg-12">
            <h1 class="">Inscrições abertas</h1>
        </div>
        <div class="col-lg-6 col-xl-7">
          <h3 class="subtitle">Seu primeiro passo para participar do energy future</h3>
        </div>
        <div class="col-lg-6 col-xl-5">
          <g-link to="https://energyfuture.typeform.com/to/QvbsS6" target="_blank"><button class="button register-button">Faça o seu cadastro</button></g-link>
          <!-- <Form /> -->
        </div>
      </div>
      <div class="row">
          <div class="col mt-4">
              <p>Conheça as etapas para realizar a inscrição do seu projeto:</p>
          </div>
      </div>

      <section id="subscription-cards">
          <div class="row">
              <div class="col-xl-3 col-lg-6 col-md-6 mt-5 px-xl-2">
                  <div class="card card--1">
                      <h3 class="card__number">01.</h3>
                      <h4 class="card__title">Leia todos os regulamentos</h4>
                      <p class="card__divider card__divider--1"></p>
                      <p class="card__text">Para garantir a inscrição correta do seu projeto, leia com atenção o Regulamento do Energy Future e o Regulamento da Aneel, que orienta a formulação de projetos de P&D. Os conteúdos estão disponíveis abaixo.</p>
                      <g-link to="../assets/images/Regulamento-Energy-Future-Oficial.pdf" target="_blank" class="card__link card__link--1"><font-awesome :icon="['fas', 'arrow-right']"/>Regulamento Energy Future</g-link>
                      <g-link to="../assets/images/Manual-PDANEEL.pdf" target="_blank" class="card__link card__link--1"><font-awesome :icon="['fas', 'arrow-right']"/>Regulamento Aneel</g-link>
                  </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6 mt-5 px-xl-2">
                <div class="card card--2">
                    <h3 class="card__number">02.</h3>
                    <h4 class="card__title">Preencha o seu cadastro</h4>
                    <p class="card__divider card__divider--2"></p>
                    <p class="card__text">É necessário que você realize seu cadastro no nosso site. Após o envio das suas informações, você receberá por e-mail o link de acesso para o formulário de inscrição.</p>
                    <g-link to="https://energyfuture.typeform.com/to/QvbsS6" target="_blank" class="card__link card__link--2"><font-awesome :icon="['fas', 'arrow-right']"/>Faça seu cadastro</g-link>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6 mt-5 px-xl-2">
                <div class="card card--3">
                    <h3 class="card__number">03.</h3>
                    <h4 class="card__title">Preencha o relatório de apresentação</h4>
                    <p class="card__divider card__divider--3"></p>
                    <p class="card__text">Ao preencher o formulário de inscrição, na mesma plataforma, você deve fazer o envio do “relatório de detalhamento” do seu projeto.  É muito importante para validar a sua participação, que você o preencha e faça o upload do arquivo no formulário.</p>
                    <g-link to="../assets/images/Relatorio-de-Detalhamento.pptx" class="card__link card__link--3"><font-awesome :icon="['fas', 'arrow-right']"/>Relatório de detalhamento</g-link>
                </div>           
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6 mt-5 px-xl-2">
                <div class="card card--4">
                    <h3 class="card__number">04.</h3>
                    <h4 class="card__title">Faça a sua inscrição</h4>
                    <p class="card__divider card__divider--4"></p>
                    <p class="card__text">A inscrição do projeto no Energy Future é gratuita e somente poderá ser feita por meio do link de acesso que você receberá por e-mail, após o seu cadastro no nosso site. Para validar sua inscrição, preencha todos os campos do formulário e faça o upload do Relatório de Apresentação.</p>
                    <g-link to="https://energyfuture.typeform.com/to/QvbsS6" target="_blank" class="card__link card__link--4"><font-awesome :icon="['fas', 'arrow-right']"/>Inscrições abertas de 25 de novembro de 2019 até 31 de janeiro de 2020.</g-link>
                </div>
              </div>
          </div>
      </section>

      <div class="colored-divider"></div>

      <section id="categories">
            <h3 class="mb-3">Categorias da Chamada Energy Future:</h3>
            <p>Entender as atuais necessidades do setor de energia elétrica é o primeiro passo na proposta de um projeto de caráter inovador. Por isso, o Energy Future estabeleceu as principais categorias, diretrizes, para orientar os novos negócios.</p>

            <div v-for="(item, index) in items" :key="index">
                <Collapse :title="item.title" :text="item.text" />
            </div>
      </section>

      <section id="cta">
        <div class="row cta">
            <div class="col-md-12" >
                <div class="cta__item cta__item--blue">
                    <h3>Dúvidas?</h3>
                    <p>Veja nossas perguntas e respostas mais frequentes:</p>
                    <g-link to="/duvidas/"><button>Acesse nosso FAQ</button></g-link>
                </div>
            </div>
        </div>           
      </section>

      <section id="social-media">
        <div class="row" style="margin-top: 4.5rem">
          <div class="col">
            <SocialShare />
          </div>
        </div>
      </section>       

  </Layout>
</template>

<script>

import SocialShare from '~/components/SocialShare.vue'
import Collapse from '~/components/Collapse.vue'

export default {
  metaInfo: {
    title: 'Inscrição',
    meta: [
      { charset: 'utf-8' },
      { name: "author", content: "Carlos Gomes Cabral" },
      { name: "description", content: "Entenda as regras, preencha o formulário e aplique o seu projeto para concorrer ao prêmio Energy Future!" },
      { name: "keywords", content: "Startups, Inovação, Setor elétrico, Concessionárias de energia" },
    ]
  },
  data: () => ({
    items : [
        { title : 'Renováveis e Storage', text: 'Novas fontes renováveis e sustentáveis de energia e maneiras inovadoras de conversão e armazenamento de energia, incluindo novos combustíveis e soluções de integração, instalação, manutenção e gestão dessas tecnologias.' },
        { title : 'Smart Grid and Meter', text: 'Redes inteligentes de energia com nova arquitetura de geração, transmissão e distribuição de eletricidade, mais segura e inteligente, que integre e possibilite ações a todos os usuários a elas conectados. Para as distribuidoras de energia elétrica, a medição inteligente (smart metering) é considerada uma das etapas do Smart Grid.' },
        { title : 'Gestão energética', text: 'Soluções alternativas e integradas, que aperfeiçoem o uso das fontes de energia elétrica para melhorar o consumo e o monitoramento do uso de recursos.' },
        { title : 'Novos Negócios em Geração e Transmissão', text: 'Desenvolvimento de soluções inovadoras ou novas formas de geração e transmissão voltadas para B2G, B2B e B2C.' },
        { title : 'Serviços ao Cliente de Distribuição', text: 'Novos serviços e soluções direcionados para o cliente consumidor de energia elétrica; hardware e Software aplicados à mobilidade elétrica; novas formas de arrecadação das contas de energia: serviços ﬁnanceiros e soluções para clientes não bancarizados.' },
        { title : 'Performance e Digitalização', text: 'Inovação e eﬁciência na geração de produtos e serviços que melhorem o dia a dia do setor de energia; soluções em tecnologia e processos, por meio da conectividade e da troca e envio de dados.' }
    ]
  }),
  components: { Collapse, SocialShare }
}
</script>

<style lang="scss">

.subtitle {
    color: $secondary-color;
}

.register-button {
    @include colored-button($secondary-color);
    text-align: center;
    width: 16rem;
    margin-top: 1.5rem;
    @media(min-width: 992px) {
        display: block;
        margin-left: auto;
        margin-top: 0;
    }
}

.card {
    padding: 1.5rem 1.5rem 3rem;
    background-color: #fff;
    position: relative;
    box-shadow: 0 .5rem 1rem 0 rgba($primary-color, .08);
    border-radius: .55rem;
    overflow: hidden;
    max-width: 22rem;
    transition: box-shadow .2s ease;
    @media(min-width: 768px) {
        height: 26.7rem;
    }
    @media(min-width: 1200px) {
        height: 30rem;
    }    

    &:hover {
        box-shadow: 0 3rem 5rem -1rem rgba($primary-color, .16);
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: .55rem;
    }

    &--1 {
        &::before {
            background-color: $accent-color-2;
        }
    }
    &--2 {
        &::before {
            background-color: $accent-color-1;
        }
    }
    &--3 {
        &::before {
            background-color: $accent-color-3;
        }
    }
    &--4 {
        &::before {
            background-color: $secondary-color;
        }
    } 

    &__number {
        font-size: 1.5rem;
        color: $primary-color;
        font-weight: bold;
    }

    &__title {
        margin-top: 0;
    }

    &__divider {
        width: 100%;
        height: .22rem;
        margin: 1.5rem 0;

        &--1 {
            background-color: rgba($accent-color-2, .12);
        }
        &--2 {
            background-color: rgba($accent-color-1, .12);
        }
        &--3 {
            background-color: rgba($accent-color-3, .12);
        }
        &--4 {
            background-color: rgba($secondary-color, .12);
        }                        
    }

    &__text {
        font-size: .77rem;
        margin-bottom: 3rem;
    }

    &__link {
        display: block;
        font-size: .88rem;
        @media(min-width: 1200px) {
            font-size: .77rem;
        }
        font-weight: 500;
        margin-bottom: 1.5rem;
        color: rgba($primary-color, .87);

        svg {
            margin-right: 1rem;
            @media(min-width: 1200px) {
                //margin-right: .5rem;
                display: none;
            }
        }

        &--1 {
            @media(min-width: 1200px) {
                color: $accent-color-2;
            }
            svg {
                color: $accent-color-2;
            }
            &:hover {
                color: $accent-color-2;
            }
        }
        &--2 {
            @media(min-width: 1200px) {
                color: $accent-color-1;
            }            
            svg {
                color: $accent-color-1;
            }            
            &:hover {
                color: $accent-color-1;
            }
        }
        &--3 {
            @media(min-width: 1200px) {
                color: $accent-color-3;
            }            
            svg {
                color: $accent-color-3;
            }            
            &:hover {
                color: $accent-color-3;
            }
        }
        &--4 {
            @media(min-width: 1200px) {
                color: $secondary-color;
            }            
            svg {
                color: $secondary-color;
            }            
            &:hover {
                color: $secondary-color;
            }
        }
    }

}

.colored-divider {
    width: 100%;
    height: .22rem;
    background: linear-gradient(to right, $accent-color-2, $accent-color-1, $secondary-color);
    margin: 1.5rem 0 4.5rem;
}

#cta .cta {
    margin-top: 4.5rem;
}

#categories h3 {
    color: $primary-color;
}

#categories p {
    margin-bottom: 3rem;
}

</style>
