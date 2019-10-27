// --- FontAwesome SVG ---
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(faInstagram, faFacebook, faLinkedin, faArrowRight, faChevronUp)
// --- FontAwesome SVG ---

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/scss/main.scss'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  // Set default fontawesome usage
  Vue.component('font-awesome', FontAwesomeIcon)
  // Self hosted Montserrat typeface
  require('typeface-montserrat')
}
