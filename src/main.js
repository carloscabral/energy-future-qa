// --- FontAwesome SVG ---
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faChevronUp, faClock, faInfoCircle, faCheck } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(faInstagram, faFacebook, faLinkedin, faTwitter, faArrowRight, faChevronUp, faClock, faInfoCircle, faCheck)
// --- FontAwesome SVG ---

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/scss/main.scss'

export default function (Vue, { router, head, isClient }) {

  head.htmlAttrs = { lang: "pt-br" }
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  // Set default fontawesome usage
  Vue.component('font-awesome', FontAwesomeIcon)
  // Self hosted Montserrat typeface
  require('typeface-montserrat')
}


// <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
// <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
// <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
// <link rel="manifest" href="/site.webmanifest">
