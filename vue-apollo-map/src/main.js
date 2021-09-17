import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAhskY5eqkgqpwZhD3jkAG6P0dcjQ-D7AM',
    libraries: 'places',
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')