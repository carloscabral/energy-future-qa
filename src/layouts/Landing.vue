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
        <LandingFooter />
      </div>
    </div>

    <div class="bottom-svg"></div>
  </div>    
</template>

<script>
import Header from "~/components/Header.vue";
import LandingFooter from "~/components/LandingFooter.vue";

export default {
    components: { Header, LandingFooter }
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
    height: 100%;
    background: url("../assets/images/img-footer-bg.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    z-index: -999;
}

.hero-svg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("../assets/images/img-hero-bg.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;
    z-index: -999;
}

</style>

