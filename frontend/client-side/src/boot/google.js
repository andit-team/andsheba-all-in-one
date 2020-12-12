import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDtygZ5JPTLgwFLA8nU6bb4d_6SSLlTPGw',
        libraries: 'places',
    },

})
