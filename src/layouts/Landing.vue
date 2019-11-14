<template>
  <div class="top-bottom">
    
    <div class="hero-svg"></div>

    <div class="container">
      <div class="layout">
        <Header :darkMode="true" />            
          <transition name="fade" appear>
            <main>
              <slot />
            </main>
          </transition>
        <Footer :isCustom="true" />
      </div>
    </div>

    <div class="middle-svg-1"></div>
    <div class="middle-svg-2"></div>
    <div class="bottom-svg"></div>
  </div>    
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
    components: { Header, Footer }
}
</script>


<style lang="scss">

.top-bottom {
  position: relative;
  overflow: hidden;

  background: linear-gradient(
      310deg,
      rgba(0, 95, 197, 0) 0%,
      rgba(17, 84, 192, 0) 17%,
      rgba(52, 63, 184, 0) 29%,
      rgba(0, 113, 206, 0.08) 53%,
      rgba(82, 45, 178, 0.03) 84%,
      rgba(82, 45, 178, 0) 100%
  );
}

.bottom-svg {

  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50rem;
  clip-path: polygon(0 46%, 100% 0, 100% 100%, 0% 100%);
  background-color: #F2F5FA;
  z-index: -999;

  @media(min-width: 992px) {
    height: 100%;
    background: url("../assets/images/img-footer-bg.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
  }
}

.middle-svg-1 {

  @media(min-width: 992px) {
    position: absolute;
    top: 0;
    right: 0;
    width: 27%;
    height: 100%;
    background: url("../assets/images/img-graphism-lp.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position-y: 30%;
    opacity: .7;
    z-index: -999;   
  }
}

.middle-svg-2 {

  @media(min-width: 992px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("../assets/images/img-graphism-bg.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position-y: 75%;
    opacity: .9;
    z-index: -999;   
  }
}

.hero-svg {


  // position: absolute;
  // bottom: 0;
  // left: 0;
  // width: 100%;
  // height: 50rem;
  // clip-path: polygon(0 46%, 100% 0, 100% 100%, 0% 100%);
  // background-color: #F2F5FA;
  // z-index: -999;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 65rem;
  clip-path: polygon(0 0, 100% 0, 100% 74%, 0 59%);
  background: linear-gradient(180deg, rgba(0,113,206,1) 20%, rgba(119,61,189,1) 75%); 
  z-index: -999;
  

  @media(min-width: 576px) {
    width: 240%;
    height: 100%;
    background-color: transparent;
    background: url("../assets/images/img-hero-bg.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;    
  }

  @media(min-width: 768px) {
    width: 200%;
  }

  @media(min-width: 992px) {
    width: 130%;
  }

  @media(min-width: 1200px) {
    width: 100%;
  }
  
  @media(min-width: 1600px) {
    transform: translateY(-3rem);
  } 
  
  @media(min-width: 1700px) {
    transform: translateY(-5rem);
  }  
  
  @media(min-width: 1800px) {
    transform: translateY(-9rem);
  } 
  
  @media(min-width: 1900px) {
    transform: translateY(-12.5rem);
  }   

  @media(min-width: 1921px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 85rem;
    background-image: none;
    clip-path: polygon(0 0, 100% 0, 100% 74%, 0 59%);
    background: linear-gradient(180deg, rgba(0,113,206,1) 20%, rgba(119,61,189,1) 75%);
    //z-index: -999;
  }

}

</style>

