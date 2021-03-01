import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAVKjCxMvk5Nymx6VYSlhc4iOasFoTxuCk',
        libraries: 'places',
    },

})
