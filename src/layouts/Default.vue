<template>
  <div class="tint">
    <!-- <div class='scroll-top' :class="{ 'is-visible': scroll >= 200 }"  @click="scrollTop"></div>     -->
    <div class="container">
      <div class="layout">
        <Header />            
          <transition name="fade" appear>
            <main>
              <slot />
            </main>
          </transition>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: { Header, Footer },
  // data: () => ({
  //   scroll: 0
  // }),
  // created(){
  //   window.addEventListener('scroll', this.getScrollEvent);
  // },
  // destroyed(){
  //   window.removeEventListener('scroll', this.getScrollEvent);
  // },
  // methods:{
  //   getScrollEvent () {
  //     this.scroll = window.pageYOffset;
  //   },
  //   scrollTop() {
  //     if(window.scrollY!=0) {
  //       setTimeout(() => {
  //         window.scrollTo(0,window.scrollY-30);
  //         this.scrollTop();
  //       }, 5);
  //     }
  //   }
  // }
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}

.tint {
  overflow: hidden;
  position: relative;
  background: linear-gradient(
    310deg,
    rgba(0, 95, 197, 0) 0%,
    rgba(17, 84, 192, 0) 17%,
    rgba(52, 63, 184, 0) 29%,
    rgba(0, 113, 206, 0.08) 53%,
    rgba(82, 45, 178, 0.03) 84%,
    rgba(82, 45, 178, 0) 100%
  );

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.44rem;
    background-image: linear-gradient(90deg, $secondary-color, $accent-color-2);
  }

  &::after {
    @media (min-width: 768px) {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 6rem;
      background-color: #f1f4f7;
      z-index: -999;
    }
  }
}

// .bottom-image {
//   position: absolute;
//   bottom: 0;
//   width: 160%;
//   left: -40rem;
//   z-index: -999;
//   opacity: .3;
//   transform: rotate(45deg);
//   transform-origin: center;
// }

.scroll-top {
  display: none;

  @media (min-width: 992px) {

    display: block;
    position: fixed;
    bottom: 1.5rem;
    right: 1rem;
    width: 2.22rem;
    height: 2.22rem;
    z-index: 99999;
    background-color: #fff;
    box-shadow: 0 1rem 2rem rgba($primary-color, 0.35);

    opacity:0;
    visibility: hidden;
    transition: opacity 0.4s linear;

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
      transition: all .2s ease;
    }
  }  
}

.is-visible {
    opacity: 1;
    visibility: visible;
}

</style>
