<template>
  <Layout>
      <h1 class="main-title">Somos o Energy Future</h1>  
      <figure class="featured-image"></figure>
      <div class="row content">
        <div class="col-12 mb-5 mb-lg-0 col-lg-1 share">
            <SocialShare :hasRotation="true" />
        </div>
        <div class="col-12 col-lg-9 offset-lg-1">
          <p>O Energy Future é o hub virtual de inovação do setor de energia elétrica. A maior chamada de projetos de Pesquisa e Desenvolvimento (P&D) do setor elétrico brasileiro. Conectamos soluções inovadoras a oportunidades.<br><br>

Queremos promover a cultura da inovação e estimular o empreendedorismo brasileiro, a partir do acesso à informação e do fomento a parcerias que melhorem a segurança e a eficiência da energia elétrica do país.

<br><br>Mais que a prospecção de projetos, o Energy Future dá o suporte para que os participantes se desenvolvam em um ambiente de transparência e disrupção, que garanta a integração das propostas às demandas do setor elétrico.

<br><br>Dessa forma, grandes concessionárias do país estão aqui reunidas para avaliar projetos que contribuam para o fornecimento da energia elétrica, de acordo com uma qualificada metodologia elaborada pelo Energy Future, bem como, com critérios estabelecidos pelo Programa de P&D da ANEEL. E, assim, garantimos um portfólio estratégico de inovação.

<br><br>No hub do Energy Future, você tem a oportunidade não somente de inscrever seu projeto, mas também ter informações exclusivas das concessionárias participantes e receber notícias sobre inovação e o setor de energia.

<br><br>Com a chancela de seis grandes concessionárias, o Energy Future é uma iniciativa elaborada, desenvolvida e executada pela <a href="#" target="_blank">Make a Business</a>, empresa de inovação e de gestão corporativa com ampla experiência na aceleração de negócios. </p>
        </div>
      </div>

  </Layout>
</template>

<script>

import SocialShare from '~/components/SocialShare.vue'
export default {
  metaInfo: {
    title: 'Quem Somos'
  },
  components: { SocialShare }
}
</script>

<style lang="scss">

.featured-image {
  margin-left: calc(-100vw / 2 + 1125px / 2);
  margin-right: calc(-100vw / 2 + 1125px / 2);  
  background: url("../assets/images/img-quem-somos.png") no-repeat center;
  background-size: cover;
  height: 22rem;
  margin-bottom: 3rem;

  @media (max-width: 1199px) {
      margin-left: calc(-100vw / 2 + 52.5rem / 2);
      margin-right: calc(-100vw / 2 + 52.5rem / 2);    
  }

  @media (max-width: 991px) {
      margin-left: calc(-100vw / 2 + 39.16rem / 2);
      margin-right: calc(-100vw / 2 + 39.16rem / 2);
      height: 15rem;    
  }

  @media (max-width: 767px) {
      margin-left: calc(-100vw / 2 + 29.16rem / 2);
      margin-right: calc(-100vw / 2 + 29.16rem / 2);    
      height: 15rem;
  }

  @media (max-width: 575px) {
      margin-left: calc(-100vw / 2 + 26.11rem / 2);
      margin-right: calc(-100vw / 2 + 26.11rem / 2);
      height: 15rem;
  }

  @media (max-width: 479px) {
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 1.5rem;
      height: 10rem;
  }  
}

</style>

