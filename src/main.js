// --- Vue Disqus ---
import VueDisqus from 'vue-disqus'
// --- FontAwesome SVG ---
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faChevronUp, faClock, faInfoCircle, faCheck, faEnvelope, faSearch, faSadTear, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(
  faInstagram, 
  faFacebook, 
  faLinkedin, 
  faTwitter, 
  faArrowRight, 
  faChevronUp, 
  faClock, 
  faInfoCircle, 
  faCheck,
  faSearch,
  faSadTear,
  faCaretDown, 
  faEnvelope)
// --- FontAwesome SVG ---

import DefaultLayout from '~/layouts/Default.vue'
import LandingLayout from '~/layouts/Landing.vue'
import '~/assets/scss/main.scss'

// import AOS from 'aos';
// import 'aos/dist/aos.css'

// import * as typeformEmbed from '@typeform/embed'

export default function (Vue, { router, head, isClient }) {

  head.htmlAttrs = { lang: "pt-br" }
  // Set Typeform widget
  head.script.push({
    src: 'https://embed.typeform.com/embed.js',
    body: true
  })  
  // Set both layouts as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('Landing', LandingLayout)
  // Set default fontawesome usage
  Vue.component('font-awesome', FontAwesomeIcon)
  // Self hosted Montserrat typeface
  require('typeface-montserrat')
  // Disqus plugin
  Vue.use(VueDisqus)
  // Vue.use(AOS.init())
  // Vue.use(typeformEmbed)
}
