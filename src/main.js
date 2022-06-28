import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faBusSimple, faTruckMedical, faPhone, faUmbrellaBeach, faHotel, faLandmark, faUtensils, faLocationArrow, faHouse, faHeart, faMapLocation, faCompass, faBed } from '@fortawesome/free-solid-svg-icons'

import { faYoutube } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faBusSimple, faTruckMedical, faPhone, faYoutube, faUmbrellaBeach, faHotel, faLandmark, faUtensils, faLocationArrow, faHouse, faHeart, faMapLocation, faCompass, faBed)

/* add font awesome icon component */

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
