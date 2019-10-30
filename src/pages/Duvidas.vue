<template>
  <Layout>

      <h1 class="title">Perguntas Frequentes</h1>

      <div v-for="(faq, index) in faqList" :key="index">
        <h3 class="faq-title" :class="'faq-title__' + faq.id">{{ faq.section }}</h3>
        <div v-for="(item, index) in faq.items" :key="index">
          <Collapse :title="item.title" :text="item.text" />
        </div>        
      </div>

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
import Collapse from '~/components/Collapse.vue'
import SocialShare from '~/components/SocialShare.vue'

export default {
  metaInfo: {
    title: 'Dúvidas'
  },
  components: {
    Collapse, SocialShare
  },
  data: () => ({
      faqList : [{
          id: 1,
          section : 'Inscrição',
          items : [
            { title : '1. Qual é o período de inscrição?', text: 'As inscrições dos projetos para a chamada do Energy Future começam em 25 de novembro de 2019 e serão realizadas até 31 de janeiro de 2020.' },
            { title : '2. Quem pode se inscrever?', text: 'Interessados devem ter um projeto inovador para o setor de energia elétrica. No entanto, projetos desenvolvidos por Pequenas e Médias Empresas, Corporações, Startups e Centros de Pesquisa são aqueles que terão maior chance de avançar nas triagens. A chamada do Energy Future segue o programa P&amp;D Aneel. Dúvidas sobre a proposição de projetos? Acesse o regulamento da Agência.' },
            { title : '3. Quantos projetos podem ser inscritos por cada organização?', text: 'Cada entidade poderá inscrever até dois projetos, mas apenas um poderá ser contemplado para avançar as fases classificatórias.' }
          ]
        },
        {
          id: 2,
          section : 'Seleção',
          items : [
            { title : '1. Quem avaliará os projetos?', text: 'Os projetos são recebidos, analisados e selecionados em comissões compostas por representantes de negócios, das concessionárias e especialistas de cada área.' },
            { title : '2. Qual a abrangência desta seleção?', text: 'Serão aceitas inscrições de todas as 27 federações do Brasil.' }
          ]
        },
        {
          id: 3,
          section : 'Resultados',
          items : [
            { title : '1. Quando serão divulgados os resultados?', text: 'A divulgação pública do resultado final do Energy Future está prevista para acontecer em 29 de maio de 2020 neste site. Qualquer mudança nos prazos, será informada no portal Energy Future e em suas redes sociais. Acompanhe-nos nos nossos canais.' },
            { title : '2. Quando os projetos receberão aporte de P&amp;D?', text: 'As concessionárias podem aportar seus recursos em qualquer projeto inscrito no Energy Future, independente da classificação. Essa escolha é criteriosa e acompanha as estratégias corporativas de inovação de cada companhia. Ao final do processo, a negociação com cada concessionária é feita de forma direta e personalizada, não havendo prazo mínimo pré-estabelecido.' }
          ]
        },
        {
          id: 4,
          section : 'Contato',
          items : [
            { title : '1. Não encontrei a informação que eu procurava. Como posso resolver?', text: 'Caso as suas dúvidas não tenham sido respondidas nos itens acima, escreva para contato@energyfuture.com.br.' }
          ]
        },
        {
          id: 5,
          section : 'Concessionárias',
          items : [
            { title : '1. Quais são as concessionárias que participam do Energy Future?', text: 'O Energy Future 2019 é formado por 06 grandes empresas: AES Tietê, Enel, Grupo Energisa, Equatorial Energia, Light e Santo Antônio Energia.' },
            { title : '2. Como conheço se meu projeto se enquadra nas exigências das concessionárias participantes?', text: 'Os objetivos e estratégias de cada concessionária estão em seus sites institucionais. Mas, no site Energy Future também é possível encontrar estes dados nas páginas dedicadas a cada companhia participante.' },
            { title : '3. Como será o contato com as concessionárias?', text: 'O contato com as concessionárias será mediado pelo Energy Future e somente os projetos aprovados na triagem qualitativa terão o acesso presencial. Contudo, as informações de todos os projetos inscritos serão de posse de todas as concessionárias.' }
          ]
        },                        

      ]
  }),  
}
</script>

<style lang="scss">

.faq-title {
  margin: 3rem 0;
  user-select: none;

  &__1 {
    @include faq-headline($accent-color-2);  
  }

  &__2 {
    @include faq-headline($secondary-color);
  }

  &__3 {
    @include faq-headline($accent-color-1);
  }  

  &__4 {
    @include faq-headline($accent-color-2);
  }  

  &__5 {
    @include faq-headline($secondary-color);
  } 
}

</style>

