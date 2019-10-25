<template>
  <div class="tint">
    <div class='scroll-top'></div>    
    <div class="container">
      <div class="layout">
          <header class="header">
            <strong>
              <!-- <g-link to="/">{{ $static.metadata.siteName }}</g-link> -->
              <g-link to="/">
                <img src="@/assets/images/img-logo.svg">
              </g-link>
            </strong>
            <nav class="header-nav">
              <g-link class="header-nav__link" to="/inscricao/">Inscrição</g-link>
              <g-link class="header-nav__link" to="/quem-somos/">Quem Somos</g-link>
              <g-link class="header-nav__link" to="/noticias/">Notícias</g-link>
              <g-link class="header-nav__link" to="/duvidas/">Dúvidas</g-link>
            </nav>
          </header>      
          <slot/>
          <div class="bottom">
            <footer class="footer">
              <div class="row justify-content-between align-items-center">
                <div class="col-md-9">
                  <nav class="footer-nav">
                    <g-link class="footer-nav__link" to="/inscricao/">Inscrição</g-link>
                    <g-link class="footer-nav__link" to="/quem-somos/">Quem Somos</g-link>
                    <g-link class="footer-nav__link" to="/noticias/">Notícias</g-link>
                    <g-link class="footer-nav__link" to="/duvidas/">Dúvidas</g-link>
                  </nav>                  
                </div>
                <div class="col-md-3 mt-3 mt-md-0">
                  <div class="social d-flex justify-content-md-end">
                    <a href="#" class="social__link" target="_blank" alt="Linkedin">
                      <img src="@/assets/images/ic-linkedin.svg">
                    </a>
                    <a href="#" class="social__link" target="_blank" alt="Instagram">
                      <img src="@/assets/images/ic-instagram.svg">
                    </a>
                    <a href="#" class="social__link" target="_blank" alt="Facebook">
                      <img src="@/assets/images/ic-facebook.svg">
                    </a>
                  </div>
                </div>
              </div>
              <div class="row justify-content-between mt-4">
                <div class="col-xl-6 col-lg-8 mt-3">
                  <div class="newsletter">
                    <label class="label" for="newsletter">Receba nossa newsletter:</label>
                    <div class="input-container">
                      <input class="input-container__input" type="text" placeholder="Seu e-mail" id="newsletter" name="newsletter">
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-4 mt-3 center">
                    <div class="subscribe d-flex justify-content-lg-end align-items-center">
                      <p class="label d-none d-sm-none d-md-block d-lg-none d-xl-block">Aproveite a oportunidade:</p>
                      <button class="button">Inscreva seu projeto!</button>
                    </div>
                </div>
              </div>
              <div class="xaxa">
                <div class="row">
                  <div class="col-lg-3 col-md-6"><small>Rua do Energy Future, 23 <br>Rio de Janeiro, RJ.</small></div>
                  <div class="col-lg-3 col-md-6"><small>+55 21 888 888 888 <br>contato@energyfuture.com.br</small></div>
                </div>
              </div>              
            </footer>
          </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">

.xaxa {
  margin-top: 3rem;
}

.scroll-top {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 2.22rem;
  height: 2.22rem;
  border: 1px solid darken($light-grey, 5%);
  z-index: 99999;
  background-color: #fff;

  &:hover {
    cursor: pointer;
  }

  &::after {
    content: "";
    position: absolute;
    background: url("../assets/images/ic-arrow.svg") no-repeat center;
    transform: rotate(-90deg);
    width: inherit;
    height: inherit;    
    top: 0%;
    left: 0%;
  }
}

.input-container {
  min-width: 16rem;
  position: relative;
  // background-color: yellow;
  border-radius: 1px;
  border: 2px solid $accent-color-2;
  display: inline-block;
  padding: .2rem 0 .2rem .5rem;

  &::before {
    content: "";
    position: absolute;
    background-image: url("../assets/images/ic-arrow.svg");
    background-repeat: no-repeat;
    top: 30%;
    right: 0;
    width: 1.5rem;
    height: 1.5rem;
  }

  &__input {
    height: inherit;
    width: inherit;
    border-style: none;
    background-color: transparent;
    outline: 0;
    padding-right: 2.75rem;

    &::-webkit-input-placeholder {
      color: #A7B2C0;
      font-size: .85rem;
      font-weight: 400;
    }
  }
}

small {
  font-size: .88rem;
  color: $accent-color-2;
  font-weight: 500;
}


.tint {
  position: relative;
  background: linear-gradient(310deg, rgba(0,95,197,0) 0%, rgba(17,84,192,0) 17%, rgba(52,63,184,0) 29%, rgba(0,113,206,0.08) 53%, rgba(82,45,178,0.03) 84%, rgba(82,45,178,0) 100%);  

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: .44rem;
    background-image: linear-gradient(90deg, $secondary-color, $accent-color-2);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 6rem;    
    background-color: #F1F4F7;
    z-index: -999;
  }
}

.label {
  text-transform: uppercase;
  color: $primary-color;
  font-weight: 600;
  font-size: .77rem;
  letter-spacing: .75px;
  margin: 0 1rem 0 0;
  display: inline-block;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 3rem 0 1.5rem 0;
  position: relative;
  margin-bottom: 8rem;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: $light-grey;
    left: 0;
    bottom: 0;
  }
}

.header-nav, .footer-nav {
  display: flex;

  &__link {
    margin-right: 1.75rem;
    color: #A7B2C0;
    text-transform: uppercase;
    font-size: .77rem;
    font-weight: 700;
    line-height: 1;
    letter-spacing: .75px;

    &:hover, &.active--exact {
      color: $primary-color;
    }
  }
  &__link:last-child {
    margin-right: 0;
  }
}

.bottom {
  margin-top: 35vh;
}

.footer {
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

.social {
  &__link:not(:first-child) {
    margin-left: 1.5rem;
  }
}

// @media (max-width: 575px) {
//   .input-container, .button {
//     width: 100%;
//   }
// }

@media (max-width: 991px) {

  .newsletter {
    margin-top: 1rem;
  }  
}

@media (max-width: 767px) {

  .input-container, .button {
    width: 100%;
  }  
  .subscribe, .newsletter {
    text-align: center;
  }
  .footer-nav, .social {
    justify-content: center;
  }
  .social {
    margin-top: 1rem;
  }
}

</style>
