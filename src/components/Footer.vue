<template>
    <footer class="footer">
        <div class="row justify-content-between align-items-center">
        <div class="col-md-9">
            <nav class="footer-nav">
            <g-link class="footer-nav__link" to="/inscricao/">Inscrição</g-link>
            <g-link class="footer-nav__link" to="/quem-somos/">Quem&nbsp;Somos</g-link>
            <g-link class="footer-nav__link" to="/noticias/">Notícias</g-link>
            <g-link class="footer-nav__link" to="/duvidas/">Dúvidas</g-link>
            </nav>                  
        </div>
        <div class="col-md-3 mt-3 mt-md-0">
            <div class="footer-social d-flex justify-content-md-end">
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
        <div class="row justify-content-between mt-4">
            <div class="col-xl-6 col-lg-8 mt-3">
                <div class="footer-newsletter">
                    <label class="footer-newsletter__label" for="newsletter">Receba nossa newsletter:</label>
                    <div class="footer-newsletter__input-container">
                        <input type="email" placeholder="Seu e-mail" id="newsletter" name="newsletter">
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-lg-4 mt-3 center">
                <div class="footer-subscribe">
                    <label class="footer-subscribe__label d-md-block d-lg-none d-xl-block">Aproveite a oportunidade:</label>
                    <button class="footer-subscribe__button">Inscreva seu projeto!</button>
                </div>
            </div>
        </div>
        <div class="footer-contact">
            <div class="row">
                <div class="col-lg-3 col-md-6"><small>Rua do Energy Future, 23 <br>Rio de Janeiro, RJ.</small></div>
                <div class="col-lg-3 col-md-6"><small>+55 21 888 888 888 <br>contato@energyfuture.com.br</small></div>
            </div>
        </div>              
    </footer>
</template>

<style lang="scss">

.footer-nav {
    display: flex;

    @media (max-width: 575px) {
        
        text-align: center;
        display: block;
        margin: 1rem 0 -1rem 0;

        &__link {
            display: block;
            text-align: center;
            margin: 0;
            padding-bottom: 2rem;
        }        
    }      

    @media (max-width: 767px) {
        justify-content: center;
    }  
}

.footer {
  
    margin-top: 6rem;
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
    
    @media (max-width: 767px) {
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

    @media (max-width: 991px) {
        margin-top: 1rem;  
    }

    @media (max-width: 767px) {
        text-align: center;
    }    

    &__input-container {
        min-width: 16rem;
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

        @media (max-width: 767px) {
            width: 100%;
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

        @media (min-width: 768px) {
            margin-top: 0;
            margin-bottom: 0;
        }
    }

    &__button {
        @include colored-button($accent-color-2);

        @media (max-width: 767px) {
            width: 100%;
        }        
    }

}

.footer-contact {
    margin-top: 3rem;  
}

</style>
