<template>
    <footer class="landing-footer">
        <div class="row cta">
          <div class="col-md-12">
                <div class="cta__item cta__item--blue">
                    <h3>Não perca esta oportunidade!</h3>
                    <p>Seu projeto pode ser selecionado para ajudar a melhorar o fornecimento de energia de <strong>milhões</strong> de brasileiros.</p>
                    <button>Inscrições: 25 de novembro</button>
                </div>
          </div>
        </div> 
        <div class="row mt-5">
            <div class="col-xl-3 col-lg-4 col-md-6">
                <ul class="footer-menu__list">
                    <li class="footer-menu__item">Menu</li>
                    <li class="footer-menu__item"><g-link to="/noticias/">Inscrição</g-link></li>
                    <li class="footer-menu__item"><g-link to="/duvidas/">Quem Somos</g-link></li>
                    <li class="footer-menu__item"><g-link to="/noticias/">Notícias</g-link></li>
                    <li class="footer-menu__item"><g-link to="/inscricoes/">Dúvidas</g-link></li>
                </ul>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6">
                <ul class="footer-menu__list">
                    <li class="footer-menu__item">Outros</li>
                    <li class="footer-menu__item"><g-link to="/">Regulamento Aneel</g-link></li>
                    <li class="footer-menu__item"><g-link to="/">Critérios de Seleção</g-link></li>                    
                    <li class="footer-menu__item"><g-link to="/">Política de Privacidade</g-link></li>
                    <li class="footer-menu__item"><g-link to="/">Termos & Condições</g-link></li>
                </ul>                
            </div>
            <div class="col-xl-4 offset-xl-2 col-lg-4 col-md-6">
                <div class="footer-box">
                    <p class="footer-box__title">Energy Future é uma realização:</p>
                    <g-image class="footer-box__logo" src="../assets/images/img-logo-makeab-light.svg" width="230" />
                    <p class="footer-box__contact">Entre em contato:<span>contato@makeab.com</span></p>
                </div>
            </div>
        </div>

        <div class="row justify-content-between social align-items-end">
            <div class="col-md-6">
                <p>Siga-nos:</p>
                <div class="social-list">
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
            <div class="col-md-6 d-flex justify-content-end">
                <p class="social-newsletter mb-0">Clique aqui para receber a nossa newsletter.</p>
            </div>
        </div>

        <div class="row footer-copyright align-items-end">
            <div class="col-md-6 footer-copyright__logo">
                <g-image src="../assets/images/img-logo-ef-light.svg" />
            </div>
            <small class="col-md-6 footer-copyright__text d-flex justify-content-end">
                Rua São José, 40 - 4º andar, Centro - Rio de Janeiro, RJ.<br>
                © Copyright 2019. Energy Future. Todos os direitos reservados.
            </small>
        </div>             
    </footer>
</template>

<style lang="scss">

.cta {

    h3 {
        color: $primary-color !important;
    }

    p {
        font-size: 1.5rem;
        line-height: 1.5rem;
        font-weight: 300;
        color: $text-color !important;
        margin-bottom: 3rem;

        strong {
            color: $primary-color !important;
            font-size: 1.5rem;
            font-weight: 700;
        }
    }

    button {
        @include colored-button($accent-color-1);
        width: 20rem;
        text-align: center;
    }

  &__item {
    margin: 1.5rem 0;
    width: 95%;
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
    height: 9rem;
    padding-bottom: 2rem;

    &__logo {

        transform: translateY(-15%);
    }

    &__text {
        margin-bottom: 0;
        font-weight: 300;
        font-size: .77rem;
        text-align: right;
    }
}

.social {
    margin-top: 3rem;
    //padding-left: 1.5rem;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: rgba(#fff, .2);
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
    font-size: .77rem !important;
    letter-spacing: .7px;
}

.social-list {

    &__link svg {
        font-size: 1.5rem;
        transform: scale(.85);
        line-height: 1;
        transition: all .2s ease;

        &:hover {
            //color: $accent-color-2;
            transform: scale(1);
        }           
    }

    &__link:not(:last-child) {
        margin-right: 2rem;     
    }
}

.landing-footer, .landing-footer * {
    color: #fff !important;
}

// svg g .makeab {
//     display: none;
// }

// .makeab {
//     fill: #fff !important;
// }

.footer-box {
    background-color: #212D3D;
    padding: 1.5rem;
    box-shadow: 0 25px 80px rgba(0,0,0,.3);

    max-width: 18.6rem;

    &__title {
        font-weight: 300;
        text-transform: uppercase;
        font-size: .77rem;
    }

    &__logo {
        //margin: 1rem 0 1.5rem;
    }

    &__contact {
        margin: 3rem 0 0;

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
