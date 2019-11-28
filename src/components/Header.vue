<template>
    <header class="header light-mode">

        <g-link v-if="!darkMode" to="/"><img src="@/assets/images/img-logo-ef.svg"></g-link>
        <g-link v-if="darkMode" to="/"><img src="@/assets/images/img-logo-ef-light.svg"></g-link>

        <div v-if="!darkMode" class="line-break"></div>
        
        <!-- <nav class="desktop-navigation__nav" :class="{ 'dark-mode' : darkMode }">
            <li class="desktop-navigation__nav__link"><g-link class="desktop-navigation__nav__anchor" to="/inscricao/">Inscrição</g-link></li>
            <li class="desktop-navigation__nav__link"><g-link class="desktop-navigation__nav__anchor" to="/quem-somos/">Quem Somos</g-link></li>
            <li class="desktop-navigation__nav__link">Concessionárias&nbsp;&nbsp;
              <ul class="desktop-navigation__dropdown">
                <li><g-link class="desktop-navigation__dropdown-anchor" to="/quem-somos/">AES Tietê</g-link></li>
                <li><g-link class="desktop-navigation__dropdown-anchor" to="/quem-somos/">Energisa</g-link></li>
                <li><g-link class="desktop-navigation__dropdown-anchor" to="/quem-somos/">Enel</g-link></li>
                <li><g-link class="desktop-navigation__dropdown-anchor" to="/quem-somos/">Equatorial</g-link></li>
                <li><g-link class="desktop-navigation__dropdown-anchor" to="/quem-somos/">Light</g-link></li>
                <li><g-link class="desktop-navigation__dropdown-anchor" to="/quem-somos/">Santo Antônio</g-link></li>
              </ul>
            </li>            
            <li class="desktop-navigation__nav__link"><g-link class="desktop-navigation__nav__anchor" to="/noticias/">Notícias</g-link></li>
            <li class="desktop-navigation__nav__link"><g-link class="desktop-navigation__nav__anchor" to="/duvidas/">Dúvidas</g-link></li>
        </nav> -->


        <nav role="navigation" :class="{ 'dark-mode' : darkMode }">
          <ul class="desktop-navigation__nav">
            <li class="desktop-navigation__nav__item"><g-link class="desktop-navigation__nav__anchor" to="/inscricao/">Inscrição</g-link></li>
            <li class="desktop-navigation__nav__item"><g-link class="desktop-navigation__nav__anchor" to="/quem-somos/">Quem Somos</g-link></li>
            <li class="desktop-navigation__nav__item"><g-link class="desktop-navigation__nav__anchor" to="/noticias/">Notícias</g-link></li>
            <li class="desktop-navigation__nav__item">Concessionárias&nbsp;&nbsp;<font-awesome :icon="['fas', 'caret-down']"/>
              <ul>
                <li><g-link to="/author/AES Tietê/">AES Tietê</g-link></li>
                <li><g-link to="/author/Energisa/">Energisa</g-link></li>
                <li><g-link to="/author/Enel/">Enel</g-link></li>
                <li><g-link to="/author/Equatorial/">Equatorial</g-link></li>
                <li><g-link to="/author/Light/">Light</g-link></li>
                <li><g-link to="/author/Santo Antônio/">Santo Antônio</g-link></li>              
              </ul>
            </li>
            <li class="desktop-navigation__nav__item"><g-link class="desktop-navigation__nav__anchor" to="/duvidas/">Dúvidas</g-link></li>
          </ul>
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
                    <li class="mobile-navigation__item"><g-link class="mobile-navigation__link" to="/quem-somos/">Quem Somos</g-link></li>
                    <li class="mobile-navigation__item"><g-link class="mobile-navigation__link" to="/noticias/">Notícias</g-link></li>
                    <li class="mobile-navigation__item"><g-link class="mobile-navigation__link" to="/duvidas/">Dúvidas</g-link></li>
                </ul>
            </nav>
        </div>
    </header>    
</template>

<script>
export default {
  props: {
      darkMode: { type: Boolean, required: false }
  }
}
</script>

<style lang="scss">

// General header style
.header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 1.5rem 0 1.5rem 0;
    transition: padding 0.2s ease;
}

.line-break {
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: $light-grey;
    bottom: 0;
    left: 0;
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


//Desktop version
.desktop-navigation__nav {
  display: none;
  @media (min-width: 992px) {
    display: block;
  }
}

.desktop-navigation__nav,
.footer-nav {
  list-style-type: none;
  margin-bottom: 0 !important;
  @media(min-width: 768px) {
    height: 1.15rem;
  }

  &__item:not(:last-child) {
    @media (min-width: 576px) {
      margin-right: 1.55rem;
    }
  }

  &__item, &__anchor {
    display: inline-block;
    position: relative;
    color: #a7b2c0;
    text-transform: uppercase;
    font-weight: 700;
    font-size: .77rem;
    line-height: 1;
    letter-spacing: 0.75px;
    padding-bottom: 1rem;
    
    ul {
      display: none;
    }
    
    &:hover,
    &.active--exact {
      cursor: pointer;
      color: $primary-color;
    }       
    // initial li:hover
    &:hover {
      //background-color: lightgrey;
      
      // secondary ul visibility change
      ul {
        display: block;
        padding-left: 0;
        border-radius: .11rem;
        width: 10rem;
        left: 0;
        background-color: #fff;
        
        position: absolute;
        z-index: 2000;
        transform: translateY(1rem);
        box-shadow: 0 3rem 5rem -1.5rem rgba($primary-color, .2);

        &::before {
          content: "";
          position: absolute;
          top: -.3rem;
          right: .5rem;
          width: .77rem;
          height: .77rem;
          background-color: #fff;
          transform: rotate(45deg);
        }
        
        // secondary li
        li {
          display: block;
          //font-size: .77rem;
          padding: .5rem .88rem;
          text-align: right;
          color: $primary-color;
          position: relative;

          a {
            display: block;
            font-size: .77rem;            
          }

          &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 1.5rem;
            width: 90%;
            height: 1px;
            background-color: rgba($light-grey, .2);
          }
          
          &:hover a {
            //background-color: rgba($primary-color, .05);
            color: $accent-color-1;
            transform: translateX(-3px);
          }
        }

        li:first-child {
          margin-top: .5rem;
        }
        li:last-child {
          margin-bottom: .5rem;
        }        
      }
    }     
  }
}


// .desktop-navigation__nav,
// .footer-nav {
  
//   list-style: none;

//   &__link {
//     margin-right: 1.55rem;
//     color: #a7b2c0;
//     text-transform: uppercase;
//     font-weight: 700;
//     line-height: 1;
//     letter-spacing: 0.75px;

//     ul li {
//       display: none;
//       position: relative;
//     }

//     &:hover,
//     &.active--exact {
//       cursor: pointer;
//       color: $primary-color;
//     }    

//     &:hover {
//       ul {
//         display: block;
//         margin-top: 15px;
        
//         width: 12.5rem;
//         right: 10.55rem;
//         //margin-top: 2rem;
//         padding-top: -3.5rem;
        
//         position: absolute;
        
//         // secondary li
//         li {
//           display: block;
//           background-color: darken(#fff, 7%);
//           span {
//             float: right;
//             color: #fff;
//             background-color: $blue;
//             padding: 2px 5px;
//             text-align: center;
//             font-size: .8rem;
//             border-radius: 3px;
//           }
          
//           &:hover {
//             background-color: darken(#fff, 10%);
//             span {
//               background-color: darken($blue, 5%);
//             }
//           }
//         }
//       }      
//     }    
//   }
//   &__link:last-child {
//     margin-right: 0;
//   }
//   &__link, &__anchor {
//     font-size: 0.77rem;
//     line-height: 1;
//   }
// }

.dark-mode {
  .desktop-navigation__nav__item, .desktop-navigation__nav__anchor  {
    color: #fff;
  }
}

</style>

