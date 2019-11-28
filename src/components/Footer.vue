<template>
    <div>
        <footer v-if="isCustom" class="landing-footer">
            <div class="row cta">
                <div class="col-md-12" >
                    <div class="cta__item cta__item--blue">
                        <h3>Não perca esta oportunidade!</h3>
                        <p>Seu projeto pode ser selecionado para ajudar a melhorar o fornecimento de energia de <strong>milhões</strong> de brasileiros.</p>
                        <g-link to="/inscricao/"><button>Inscreva seu projeto</button></g-link>
                    </div>
                </div>
            </div> 
            <div class="row align-items-start" style="margin-top: 4.5rem;">
                <div class="col-xl-3 col-lg-4 col-sm-6">
                    <ul class="footer-menu__list">
                        <li class="footer-menu__item">Menu</li>
                        <li class="footer-menu__item"><g-link to="/inscricao/">Inscrição</g-link></li>
                        <li class="footer-menu__item"><g-link to="/quem-somos/">Quem Somos</g-link></li>
                        <li class="footer-menu__item"><g-link to="/noticias/">Notícias</g-link></li>
                        <li class="footer-menu__item"><g-link to="/duvidas/">Dúvidas</g-link></li>
                    </ul>
                </div>
                <div class="col-xl-3 col-lg-4 col-sm-6">
                    <ul class="footer-menu__list">
                        <li class="footer-menu__item">Outros</li>
                        <li class="footer-menu__item"><g-link to="../assets/images/Manual-PDANEEL.pdf" target="_blank">Regulamento Aneel</g-link></li>
                        <li class="footer-menu__item"><g-link to="../assets/images/Regulamento-Energy-Future-Oficial.pdf" target="_blank">Regulamento Energy Future</g-link></li>
                        <!-- <li class="footer-menu__item" @click="commingSoon"><g-link to="/">Critérios de Seleção</g-link></li>                    
                        <li class="footer-menu__item" @click="commingSoon"><g-link to="/">Política de Privacidade</g-link></li>
                        <li class="footer-menu__item" @click="commingSoon"><g-link to="/">Termos & Condições</g-link></li> -->
                    </ul>                
                </div>
                <div class="col-xl-4 offset-xl-2 col-lg-4 col-md-6">
                    <div class="footer-box mx-auto mx-sm-0">
                        <p class="footer-box__title">Energy Future é uma realização:</p>
                        <g-image class="footer-box__logo" src="../assets/images/img-logo-makeab-light.svg" width="200" />
                        <p class="footer-box__contact">Entre em contato:<span>contato@makeab.com</span></p>
                    </div>
                </div>
            </div>

            <div class="row justify-content-between social align-items-end">
                <div class="col-md-6">
                    <p class="text-center text-sm-left">Siga-nos:</p>
                    <div class="social-list text-center text-sm-left mb-5 mb-md-0">
                        <a href="https://www.instagram.com/energyfuturebr/" class="social-list__link" target="_blank" alt="Instagram">
                            <font-awesome :icon="['fab', 'instagram']"/>
                        </a>                    
                        <a href="https://www.linkedin.com/company/energy-future-br/" class="social-list__link" target="_blank" alt="Linkedin">
                            <font-awesome :icon="['fab', 'linkedin']"/>
                        </a>
                        <a href="https://www.facebook.com/energyfuturebr/" class="social-list__link" target="_blank" alt="Facebook">
                            <font-awesome :icon="['fab', 'facebook']"/>
                        </a>
                    </div>
                </div>
                <div class="col-md-6 social-newsletter">
                    <p @click="openTypeForm" class="newsletter-click"><font-awesome :icon="['fas', 'envelope']"/>&nbsp;&nbsp;&nbsp;Receba nossa newsletter&nbsp;&nbsp;<font-awesome :icon="['fas', 'arrow-right']"/></p>
                </div>
            </div>

            <div class="row footer-copyright align-items-lg-end align-items-md-center">
                <div class="col-md-5 footer-copyright__logo d-md-flex align-items-md-end">
                    <g-image class="d-none d-md-none d-lg-flex mr-lg-4" src="../assets/images/img-logo-ef-light.svg" width="220" />
                    <g-image class="d-none d-md-flex d-lg-none mr-md-4" src="../assets/images/img-logo-ef.svg" width="120" />

                    <g-image class="d-none d-md-none d-lg-flex" src="../assets/images/img-logo-pdaneel-light.svg" width="150" />
                    <g-image class="d-none d-md-flex d-lg-none" src="../assets/images/img-logo-pdaneel.svg" width="100" />
                </div>
                <small class="col-md-7 footer-copyright__text">
                    <!-- Rua São José, 40 - 4º andar, Centro - Rio de Janeiro, RJ.<br>
                    <span>Para assessoria de imprensa: imprensa@energyfuture.com.br<br></span> -->
                    <span>contato@energyfuture.com.br | imprensa@energyfuture.com.br</span>
                    © Copyright 2019. Energy Future. Todos os direitos reservados.<br>
                </small>
            </div>

        </footer>

        <footer v-else class="footer">
            <div class="row justify-content-between align-items-center">
            <div class="col-lg-9">
                <nav role="navigation" class="footer-nav">
                    <li class="footer-nav__item"><g-link class="footer-nav__anchor" to="/inscricao/">Inscrição</g-link></li>
                    <li class="footer-nav__item"><g-link class="footer-nav__anchor" to="/quem-somos/">Quem Somos</g-link></li>
                    <li class="footer-nav__item"><g-link class="footer-nav__anchor" to="/noticias/">Notícias</g-link></li>
                    <li class="footer-nav__item d-none d-md-inline-block">Concessionárias&nbsp;&nbsp;<font-awesome :icon="['fas', 'caret-down']"/>
                        <ul style="margin-top: -10px">
                            <li><g-link to="/author/AES Tietê/">AES Tietê</g-link></li>
                            <li><g-link to="/author/Energisa/">Energisa</g-link></li>
                            <li><g-link to="/author/Enel/">Enel</g-link></li>
                            <li><g-link to="/author/Equatorial/">Equatorial</g-link></li>
                            <li><g-link to="/author/Light/">Light</g-link></li>
                            <li><g-link to="/author/Santo Antônio/">Santo Antônio</g-link></li>              
                        </ul>
                    </li>
                    <li class="footer-nav__item"><g-link class="footer-nav__anchor" to="/duvidas/">Dúvidas</g-link></li>   
                </nav>                  
            </div>
            <div class="col-lg-3 mt-3 mt-lg-0">
                <div class="footer-social">
                    <a href="https://www.instagram.com/energyfuturebr/" class="footer-social__link" target="_blank" alt="Instagram">
                        <font-awesome :icon="['fab', 'instagram']"/>
                    </a>                    
                    <a href="https://www.linkedin.com/company/energy-future-br/" class="footer-social__link" target="_blank" alt="Linkedin">
                        <font-awesome :icon="['fab', 'linkedin']"/>
                    </a>
                    <a href="https://www.facebook.com/energyfuturebr/" class="footer-social__link" target="_blank" alt="Facebook">
                        <font-awesome :icon="['fab', 'facebook']"/>
                    </a>
                </div>
            </div>

            </div>
            <div class="row align-items-center">
                <div class="col-12 typeform text-center text-md-left">
                    <p @click="openTypeForm" class="newsletter-click"><font-awesome :icon="['fas', 'envelope']"/>&nbsp;&nbsp;&nbsp;Receba nossa newsletter&nbsp;&nbsp;<font-awesome :icon="['fas', 'arrow-right']"/></p>
                </div>
            </div>
            <div class="footer-contact">
                <!-- <div class="footer-contact__address"><small>Rua São José, 40 - 4º andar<br>Centro - Rio de Janeiro, RJ.</small></div> -->
                <div class="footer-contact__address"><small>contato@energyfuture.com.br</small></div>
                <!-- <div class="footer-contact__email"><small>contato@energyfuture.com.br<br>imprensa@energyfuture.com.br</small></div> -->
                <div class="footer-contact__email"><small>imprensa@energyfuture.com.br</small></div>
                <a href="http://makeab.com/" target="_blank" alt="Site MakeAB"><g-image class="footer-contact__image" src="~/assets/images/img-logo-makeab.svg" width="150" alt="Logo MakeAB" /></a>
            </div>              
        </footer>
    </div>
</template>

<script>
export default {
  props: {
      isCustom: { type: Boolean, required: false }
  },
  methods: {
    commingSoon () {
      alert("Em breve estará disponível!")
    },
    openTypeForm () {
        if (process.isClient) {
                window.typeformEmbed.makePopup('https://energyfuture.typeform.com/to/w0QlAs', {
                    hideHeaders: true,
                    hideFooter: true
                }).open();            
        }        
    }
  }
}
</script>


<style lang="scss">

.sign-in {
    margin-bottom: 1.5rem;
}
// TYPEFORM ----
.typeform {
    margin: 6rem 0 1.5rem;
    * {
        display: inline-block;
        &:hover {
            cursor: pointer;
        }
    }
}

#my-embedded-typeform {
    // border: 1px solid $light-grey;
    // border-radius: .22rem;    
    box-shadow: 0 2rem 4rem 2rem rgba($light-grey, .3);
}


// DEFAULT FOOTER
.footer-nav {
    display: flex;

    @media (max-width: 575px) {
        
        text-align: center;
        display: block;
        margin: 1rem 0 -1rem 0;

        &__item, a {
            display: block;
        }
        
        a {
            text-align: center;
            font-size: 1rem;
            margin: 0;
            padding-bottom: 2rem;            
        }
    }      

    @media (max-width: 767px) {
        justify-content: center;
    }  
}

.footer {

    margin-top: 5rem;
    position: relative;
    padding: 1.5rem 0;

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: $light-grey;
        left: 0;
        top: .5rem;    
    }
}

.footer-social {

    display: flex;
    justify-content: flex-end;
    
    @media (max-width: 991px) {
        justify-content: center;
        margin-top: 1rem;
    }  
    
    &__link {
        font-size: 1.5rem;
        transform: scale(.85);
        line-height: 1;
        transition: all .2s ease;

        &:hover {
            color: $accent-color-2;
            transform: scale(1);
        }

        @media (max-width: 575px) {
            font-size: 2rem;
        }        
    }
    &__link:not(:first-child) {
        margin-left: 1.5rem;
    }
}

.footer-newsletter {

    margin-top: 0 !important;

    @media (max-width: 767px) {
        text-align: center;
    }    

    &__input-container {

        width: 100%;

        @media (min-width: 992px) {
            max-width: 16rem;
        }

        position: relative;
        border-radius: 1px;
        border: 2px solid $primary-color;
        display: inline-block;
        padding: .2rem 0 .2rem .5rem;

        &::before {
            content: "";
            position: absolute;
            background-image: url("../assets/images/ic-arrow.svg");
            background-repeat: no-repeat;
            top: 32%;
            right: 0;
            width: 1.5rem;
            height: 1.5rem;
        }

        input {
            height: inherit;
            width: inherit;
            border-style: none;
            background-color: transparent;
            outline: 0;
            padding-right: 2.75rem;

            &::-webkit-input-placeholder {
                color: #A7B2C0;
            }
        }       
    }   
}

.footer-subscribe {

    @media (min-width: 768px) {
        display: flex;
        align-items: center;
    } 
    
    &__label {

        text-align: center;
        margin-bottom: .25rem;
        display: block;
        margin-top: 0;
        margin-top: 1.5rem;
        min-width: 245px;

        @media (min-width: 768px) {
            margin-top: 0;
            margin-bottom: 0;
        }
    }

    &__button {
        @include colored-button($accent-color-2);
        width: 100%;      
    }

}

.footer-contact {

    margin-top: 3.5rem;
    text-align: center;

    @media(min-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        text-align: left;
    }

    &__image {
        margin-top: 1.5rem;
        height: auto;
        opacity: .3;

        @media(min-width: 768px) {
            margin-top: 0;
        }
    }

    &__address, &__email {
        * {
            color: $text-color;
        }
    }

    &__email {
        @media (min-width: 992px) {
            //transform: translateX(-62%);
        }
        @media (min-width: 1200px) {
            //transform: translateX(-98%);
        }        
    }
}


// LANDING PAGE FOOTER
.cta {

    h3 {
        color: $primary-color !important;
    }

    p {
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 300;
        color: $text-color !important;
        margin-bottom: 3rem;
        @media(min-width: 992px) {
            font-size: 1.5rem;
        }        

        strong {
            color: $primary-color !important;
            font-size: 1rem;
            font-weight: 700;
            @media(min-width: 992px) {
                font-size: 1.5rem;
            }
        }
    }

    button {
        @include colored-button($accent-color-1);
        width: 100%;
        text-align: center;
        @media(min-width: 768px) {
            width: 20rem;
        }

    }

    &__item {

        margin: 1.5rem 0;
        width: 100%;
        padding: 3rem;
        text-align: center;
        background-color: #fff;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: all .2s ease;
        box-shadow: 0 80px 80px rgba(#000, .18);
        border-radius: 3px;
        overflow: hidden;
        opacity: .95;

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
            @extend .cta__item--blue::before;
            background-color: $accent-color-1;
            }
        }

        &--purple {
            &::before {
            @extend .cta__item--blue::before;
            background-color: $secondary-color;
            }
        }

        h3 {
            font-weight: 700;
            margin-bottom: 1rem;
            color: $primary-color;
        }
    }
}

.footer-copyright {

    min-height: 7.5rem;
    padding-bottom: 1rem;

    @media(min-width: 768px) {
        padding-bottom: 1rem;    
    }

    @media(min-width: 992px) {
        padding-bottom: 1.5rem;    
    }

    &__logo {
        
        transform-origin: left;
        transform: translateY(-15%) scale(.7);
        margin: 1.5rem 0;
        @media(min-width: 768px) {
            margin: 0;
            transform: translateY(-15%) scale(1);
        }
        //display: flex;
        //align-items: center;

        // img {
        //     margin-right: 1.5rem;
        // }
        &--1 {
            margin-right: 1rem;
        }
    }

    &__text, &__text * {

        display: block;
        text-align: center;
        //font-size: .77rem;
        line-height: 1.7;
        color: $text-color;
        font-size: .66rem;

        @media(min-width: 576px) {
            margin-bottom: 0;
            text-align: left;
        }

        @media(min-width: 768px) {
            text-align: right;
        }

        @media(min-width: 992px) {
            font-weight: 300;
            font-size: .77rem;
        }
    }
}

.social {
    margin-top: 3rem;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: rgba($primary-color, .2);

        @media(min-width: 992px) {
            background-color: rgba(#fff, .2);
        }
        bottom: -.5rem;
        left: 0;
    }

    p {
        font-size: .88rem;
        text-transform: uppercase;
        font-weight: 700;
    }

    &__button {
        @include colored-button($accent-color-1);
        width: 100%;
    }
}

.social-newsletter {

    display: flex;
    justify-content: center;
    text-align: center;

    @media (min-width: 576px) {
        justify-content: flex-start;
    }    

    @media (min-width: 768px) {
        justify-content: flex-end;
    }

    p {        
        font-size: .77rem !important;
        letter-spacing: .7px;
        margin-bottom: 0;

        @media (min-width: 768px) {
            margin-left: auto;
        }
        
        &:hover {
            cursor: pointer;
        }
    }

    a {
        font-size: .77rem;
        color: $accent-color-1 !important;

        &:hover {
            color: lighten($accent-color-1, 15%) !important;
        }
    }
}

.social-list {

    &__link svg {
        font-size: 1.5rem;
        transform: scale(.85);
        line-height: 1;
        transition: all .2s ease;

        &:hover {
            transform: scale(1);
        }           
    }

    &__link:not(:last-child) {
        margin-right: 2rem;     
    }
}

@media (min-width: 992px) {

    .landing-footer, .landing-footer * {
        color: #fff !important;
    }
}


.footer-box {

    background-color: #212D3D;
    padding: 1.5rem;
    box-shadow: 0 25px 80px rgba(0,0,0,.3);

    * {
        color: #fff;
    }

    max-width: 18.6rem;

    &__title {
        font-weight: 300;
        text-transform: uppercase;
        font-size: .77rem;
    }

    &__logo {
        margin: .5rem .5rem 1rem 0;
    }

    &__contact {
        margin: 1.5rem 0 0;

        * {
            display: block;
        }

        span:last-child() {
            color: $accent-color-1 !important;
        }
    }
}

.footer-menu {

    &__list {
        padding-left: 0;
        margin-bottom: 3rem;
        text-align: center;

        @media(min-width: 480px) {
            text-align: left;
        }

        @media(min-width: 992px) {
            margin-bottom: 0;
        }
    }

    &__item, &__item * {
        line-height: 2.5;
        font-size: .88rem;
        font-weight: 400;
    }

    &__item:first-child() {
        font-weight: 700;
        text-transform: uppercase;

    }
}

</style>
