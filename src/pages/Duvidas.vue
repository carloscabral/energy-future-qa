<template>
  <Layout>

      <h1 class="title">Perguntas frequentes</h1>

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
            { title : 'Inscrição 1', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nam fugiat mollitia quas voluptate, asperiores obcaecati error, corrupti nihil illum voluptatum sunt quis placeat corporis perspiciatis dolor fugit. Sed, possimus!' },
            { title : 'Inscrição 2', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nam fugiat mollitia quas voluptate, asperiores obcaecati error, corrupti nihil illum voluptatum sunt quis placeat corporis perspiciatis dolor fugit. Sed, possimus!' },
            { title : 'Inscrição 3', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nam fugiat mollitia quas voluptate, asperiores obcaecati error, corrupti nihil illum voluptatum sunt quis placeat corporis perspiciatis dolor fugit. Sed, possimus!' }
          ]
        },
        {
          id: 2,
          section : 'Seleção',
          items : [
            { title : 'Seleção 1', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nam fugiat mollitia quas voluptate, asperiores obcaecati error, corrupti nihil illum voluptatum sunt quis placeat corporis perspiciatis dolor fugit. Sed, possimus!' },
            { title : 'Seleção 2', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nam fugiat mollitia quas voluptate, asperiores obcaecati error, corrupti nihil illum voluptatum sunt quis placeat corporis perspiciatis dolor fugit. Sed, possimus!' },
            { title : 'Seleção 3', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nam fugiat mollitia quas voluptate, asperiores obcaecati error, corrupti nihil illum voluptatum sunt quis placeat corporis perspiciatis dolor fugit. Sed, possimus!' },
            { title : 'Seleção 4', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nam fugiat mollitia quas voluptate, asperiores obcaecati error, corrupti nihil illum voluptatum sunt quis placeat corporis perspiciatis dolor fugit. Sed, possimus!' }            
          ]
        },
        {
          id: 3,
          section : 'Divulgação',
          items : [
            { title : 'Divulgação 1', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nam fugiat mollitia quas voluptate, asperiores obcaecati error, corrupti nihil illum voluptatum sunt quis placeat corporis perspiciatis dolor fugit. Sed, possimus!' },
            { title : 'Divulgação 2', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nam fugiat mollitia quas voluptate, asperiores obcaecati error, corrupti nihil illum voluptatum sunt quis placeat corporis perspiciatis dolor fugit. Sed, possimus!' }
          ]
        },
        {
          id: 4,
          section : 'Contato',
          items : [
            { title : 'Contato 1', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nam fugiat mollitia quas voluptate, asperiores obcaecati error, corrupti nihil illum voluptatum sunt quis placeat corporis perspiciatis dolor fugit. Sed, possimus!' }
          ]
        },
        {
          id: 5,
          section : 'Concessionárias',
          items : [
            { title : 'Concessionárias 1', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nam fugiat mollitia quas voluptate, asperiores obcaecati error, corrupti nihil illum voluptatum sunt quis placeat corporis perspiciatis dolor fugit. Sed, possimus!' },
            { title : 'Concessionárias 2', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nam fugiat mollitia quas voluptate, asperiores obcaecati error, corrupti nihil illum voluptatum sunt quis placeat corporis perspiciatis dolor fugit. Sed, possimus!' },
            { title : 'Concessionárias 3', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nam fugiat mollitia quas voluptate, asperiores obcaecati error, corrupti nihil illum voluptatum sunt quis placeat corporis perspiciatis dolor fugit. Sed, possimus!' }
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

