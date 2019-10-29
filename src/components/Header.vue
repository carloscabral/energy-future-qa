<template>
    <header class="header">
        <g-link to="/"><img src="@/assets/images/img-logo.svg"></g-link>
        
        <nav class="desktop-navigation__nav">
            <g-link class="desktop-navigation__nav__link" to="/inscricao/">Inscrição</g-link>
            <g-link class="desktop-navigation__nav__link" to="/quemsomos/">Quem Somos</g-link>
            <g-link class="desktop-navigation__nav__link" to="/noticias/">Notícias</g-link>
            <g-link class="desktop-navigation__nav__link" to="/duvidas/">Dúvidas</g-link>
        </nav>

        <div class="mobile-navigation">
            <input type="checkbox" class="mobile-navigation__checkbox" id="navi-toggle">
            <label for="navi-toggle" class="mobile-navigation__button">
              <span class="mobile-navigation__icon"></span>
            </label>
            <div class="mobile-navigation__background">&nbsp;</div>

            <nav class="mobile-navigation__nav">
                <img class="mobile-navigation__brand" src="@/assets/images/img-brand-white.svg" width="100">
                <ul class="mobile-navigation__list">
                    <li class="mobile-navigation__item"><g-link class="mobile-navigation__link" to="/">Home</g-link></li>
                    <li class="mobile-navigation__item"><g-link class="mobile-navigation__link" to="/inscricao/">Inscrição</g-link></li>
                    <li class="mobile-navigation__item"><g-link class="mobile-navigation__link" to="/quemsomos/">Quem Somos</g-link></li>
                    <li class="mobile-navigation__item"><g-link class="mobile-navigation__link" to="/noticias/">Notícias</g-link></li>
                    <li class="mobile-navigation__item"><g-link class="mobile-navigation__link" to="/duvidas/">Dúvidas</g-link></li>
                </ul>
            </nav>
        </div>
    </header>    
</template>

<style lang="scss">

// General header style
.header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 1.5rem 0 1.5rem 0;
    transition: padding 0.2s ease;

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

// Mobile version
.mobile-navigation {
  @media (min-width: 992px) {
    display: none;
  }

  &__checkbox {
    display: none;
  }

  &__button {
    background-color: #fff;
    height: 4rem;
    width: 4rem;
    position: fixed;
    top: 1rem;
    right: 0;
    border-radius: 50%;
    z-index: 2000;
    box-shadow: 0 1rem 3rem rgba($primary-color, 0.12);
    text-align: center;
    cursor: pointer;
  }

  &__background {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    position: fixed;
    top: 1.5rem;
    right: 1.5rem;
    background-image: radial-gradient(
      $secondary-color,
      $accent-color-1,
      $accent-color-2
    );
    z-index: 1000;
    transition: transform 0.6s cubic-bezier(0.86, 0, 0.07, 1);
  }

  &__nav {
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1500;
    opacity: 0;
    width: 0;
    transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  &__brand {
    position: absolute;
    top: 5rem;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.1;
  }

  &__list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
    padding: 0;
    width: 100%;
  }

  &__item {
    margin: 1rem 0;
  }

  &__link {
    font-size: 1.35rem;
    color: #fff;
  }

  &__checkbox:checked ~ &__background {
    transform: scale(48);
  }

  &__checkbox:checked ~ &__nav {
    opacity: 1;
    width: 100%;
  }

  &__icon {
    position: relative;
    margin-top: 2rem;

    &,
    &::before,
    &::after {
      width: 1.5rem;
      height: 2px;
      background-color: $primary-color;
      display: inline-block;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      transition: all 0.2s;
    }

    &::before {
      top: -0.5rem;
    }
    &::after {
      top: 0.5rem;
    }
  }

  &__checkbox:checked + &__button &__icon {
    background-color: transparent;
  }

  &__checkbox:checked + &__button &__icon::before {
    top: 0;
    transform: rotate(135deg);
  }

  &__checkbox:checked + &__button &__icon::after {
    top: 0;
    transform: rotate(-135deg);
  }
}

// Desktop version
.desktop-navigation__nav {
  display: none;
  @media (min-width: 992px) {
    display: flex;
  }
}

.desktop-navigation__nav,
.footer-nav {
  &__link {
    margin-right: 1.75rem;
    color: #a7b2c0;
    text-transform: uppercase;
    font-size: 0.77rem;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0.75px;

    &:hover,
    &.active--exact {
      color: $primary-color;
    }
  }
  &__link:last-child {
    margin-right: 0;
  }
}
</style>

