<template>
  <Layout>

      <h1 class="main-title">Perguntas Frequentes</h1>

      <div v-for="(faq, index) in faqList" :key="index">
        <h3 :id="'faq' + faq.id" class="faq-title" :class="'faq-title__' + faq.id">{{ faq.section }}</h3>
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
            { title : '2. Quem pode se inscrever?', text: 'Interessados devem ter um projeto inovador para o setor de energia elétrica. No entanto, projetos desenvolvidos por Pequenas e Médias Empresas, Corporações, Startups e Centros de Pesquisa são aqueles que terão maior chance de avançar nas triagens. A chamada do Energy Future segue o programa P&D Aneel. Dúvidas sobre a proposição de projetos? Acesse o regulamento da Agência.' },
            { title : '3. Quantos projetos podem ser inscritos por cada organização?', text: 'Cada entidade poderá inscrever até dois projetos, mas apenas um poderá ser contemplado para avançar as fases classificatórias.' },
            { title : '4. Como serão feitas as inscrições?', text: 'As inscrições serão feitas exclusivamente pelo site do <a href="https://www.energyfuture.com.br/inscrição" target="_blank">Energy Future</a>.<br>Não serão aceitas inscrições de projetos e/ou recebimento de quaisquer documentos por meio físico via correios ou e-mail.' },
            { title : '5. O cadastro no site é a inscrição do projeto?', text: 'Não. As informações preenchidas no site apenas habilitam o interessado a inscrever seu projeto. Ao preencher esta ficha inicial, será enviado um email de confirmação para o email cadastrado, com o link para efetuar a inscrição do seu projeto. Acesse o link e preencha o formulário completo para ativar a inscrição do seu projeto.' },
            { title : '6. Tenho que preencher o formulário de inscrição assim que receber o link no email?', text: 'Você poderá preencher o formulário em qualquer horário, contanto que seja dentro do período de inscrições. Fique atento aos prazos! As inscrições terminam dia 31 de janeiro de 2020. Não perca a chance de inscrever seu projeto.' },
            { title : '7. Posso editar a inscrição do meu projeto?', text: 'Você poderá editar a sua inscrição durante o preenchimento do formulário. Poderá salvar o que já foi feito para retomar o preenchimento em outro horário mais conveniente. Mas a partir do momento que concluir a sua inscrição, nenhum dado poderá ser alterado.' },
            { title : '8. Posso inscrever e editar meu projeto fora do prazo de inscrição?', text: 'Para que o processo de avaliação seja justo e transparente para todos os participantes, a chamada do Energy Future não aceitará inscrições ou edições de projetos fora do prazo.' },
            { title : '9. Se eu esquecer de fazer o upload de documentos no formulário, como faço para enviar?', text: 'Preencha todo o formulário de inscrição com bastante atenção. É importante que você envie todos os documentos solicitados, pois aumentam suas chances de avançar nas etapas de seleção. Se esquecer de enviar um documento antes de concluir sua inscrição, não será possível enviá-lo posteriormente.' },
            { title : '10. A inscrição tem algum custo?', text: 'Não, a inscrição no Energy Future é gratuita.' },
            { title : '11. Qual o passo a passo para efetuar a inscrição?', text: '<strong>1º passo</strong>: Leitura dos documentos: regulamento da Aneel e regulamento da chamada do Energy Future.<br>Para a inscrição, é imprescindível a leitura, e a confirmação de acordo, de todas as seções que compõem os Regulamentos, além das regras de preenchimento da inscrição, contidas no <a href="https://www.energyfuture.com.br" target="_blank">site</a><br><br><strong>2º passo</strong>: Preenchimento do Cadastro<br>A instituição proponente deverá efetuar o cadastro no site e aguardar o link de inscrição no email cadastrado.<br><br><strong>3º passo:</strong> Preenchimento do Formulário e Envio de Documentos<br>A instituição proponente deverá acessar o link recebido no email e preencher todos os dados no Formulário de Inscrição. Deverá também fazer o download do arquivo (Formulário de Apresentação de Projetos). Este documento deverá ser preenchido, salvo em formato PDF e anexado por upload no Formulário de Inscrição.<br><br>' },
            { title : '12. Tenho um familiar em uma das concessionárias participantes. Posso inscrever meu projeto?', text: 'É vedada a inscrição de projetos dos quais façam parte membros das equipes de análise e seleção do Seleção Energy Future.  Bem como de prestadoras de serviço envolvidas neste processo de seleção. Se o seu familiar não estiver envolvido na área da companhia que realiza o Energy Future, não há impeditivo para a inscrição do seu projeto.' },
            { title : '13. Como faço para excluir uma inscrição já realizada?', text: 'Infelizmente não é possível excluir um projeto cuja inscrição já tenha sido finalizada.' },
            { title : '14. Meu projeto já recebe aporte de concessionárias de energia elétrica. Posso inscrever meu projeto?', text: 'Não há impeditivo para a inscrição do projeto no Energy Future.' },
            { title : '15. Estou com um problema relacionado ao link de inscrição. O que pode estar acontecendo?', text: 'Talvez você não tenha seguido corretamente as instruções de preenchimento do cadastro. É preciso observar os seguintes pontos: preenchimento dos dados corretamente e conclusão/confirmação do cadastro.' },
            { title : '16. Não consigo anexar os arquivos. Qual pode ser o problema?', text: 'Todos os arquivos a serem anexados precisam estar em formato PDF. Os arquivos precisam ser salvos em PDF. Não funciona mudar apenas o nome da extensão do arquivo. Há programas gratuitos disponíveis na internet que fazem a conversão de documentos em Word, Excel, entre outros, para o formato PDF.' },
            { title : '17. Como terei certeza de que a minha inscrição foi finalizada com sucesso e está válida?', text: 'A inscrição de seu projeto no Energy Future somente será validada após a confirmação do envio eletrônico do projeto e recebimento do número de protocolo. O responsável pela inscrição receberá um e-mail com a confirmação da inscrição e o número do protocolo' }
          ]
        },
        {
          id: 2,
          section : 'Seleção',
          items : [
            { title : '1. Como os projetos serão selecionados?', text: 'Após o encerramento do período de inscrição, os projetos serão escolhidos, considerando os seguintes critérios de avaliação:<br><br><h4 style="margin-bottom: 0">Triagem Administrativa</h4>Grupo técnico avalia precisão das informações nos documentos e compatibilidade da proposta.<br><br><h4 style="margin-bottom: 0">Triagem Técnica</h4>Grupo técnico avalia qualidade e aplicação prática dos projetos, assim como a aderência às áreas de interesse.<br><br><h4 style="margin-bottom: 0">Triagem Qualitativa</h4>Equipe especializada pontua projetos com base no nos critérios do programa P&D da Aneel. Os 36 projetos mais bem avaliados passam nessa etapa.<br><br><h4 style="margin-bottom: 0">Avaliação das Concessionárias</h4>Concessionárias avaliam projetos alinhados às suas estratégias de inovação. 18 projetos seguirão para a próxima etapa.<br><br><h4 style="margin-bottom: 0">Premiação de Destaque Energy Future</h4>18 projetos serão capacitados pelo EF para a realização de pitchs em grande evento com a presença dos investidores. Os 6 melhores projetos receberão certificado de excelência e aceleração dos seus negócios, com a oportunidade de aporte de recursos.' },
            { title : '2. Quem avaliará os projetos?', text: 'Os projetos são recebidos, analisados e selecionados em comissões compostas por representantes de negócios, das concessionárias e especialistas de cada área.' },
            { title : '3. Qual a abrangência desta seleção?', text: 'Serão aceitas inscrições de todas as 27 federações do Brasil.' },
            { title : '4. Por quanto tempo meu projeto será avaliado?', text: 'As avaliações de projetos são criteriosas e seguem etapas bem definidas. Por isso, todas as triagens das fases eliminatórias serão realizadas entre 01/02/2020 a 31/03/2020. As fases classificatórias entre 01/04/2020 a 23/04/2020. A fase de qualificação de finalistas será realizada a partir do dia 27/04/2020 a 22/05/2020.' },
            { title : '5. Meu projeto foi classificado para as etapas finais. Terei que comparecer presencialmente no evento de premiação?', text: 'Se o seu projeto for classificado para a fase final, a presença do representante do projeto ao evento de premiação de destaque é obrigatória, conforme descrito no Regulamento do Energy Future.' }
          ]
        },
        {
          id: 3,
          section : 'Resultados',
          items : [
            { title : '1. Quando serão divulgados os resultados?', text: 'A divulgação pública do resultado final do Energy Future está prevista para acontecer em 29 de maio de 2020 neste site. Qualquer mudança nos prazos, será informada no portal Energy Future e em suas redes sociais. Acompanhe-nos nos nossos canais.' },
            { title : '2. Onde serão divulgados os resultados?', text: 'Os resultados finais serão divulgados no <a href="https://www.energyfuture.com.br" target="_blank">site</a>. Nas etapas de triagens, os proponentes receberão comunicados por email.' },
            { title : '3. Quando os projetos receberão aporte de P&D?', text: 'As concessionárias podem aportar seus recursos em qualquer projeto inscrito no Energy Future, independente da classificação. Essa escolha é criteriosa e acompanha as estratégias corporativas de inovação de cada companhia. Ao final do processo, a negociação com cada concessionária é feita de forma direta e personalizada, não havendo prazo mínimo pré-estabelecido.' }
          ]
        },
        {
          id: 4,
          section : 'Contato',
          items : [
            { title : '1. Não encontrei a informação que eu procurava. Como posso resolver?', text: 'Caso as suas dúvidas não tenham sido respondidas nos itens acima, escreva para <strong>contato@energyfuture.com.br.</strong>' }
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

