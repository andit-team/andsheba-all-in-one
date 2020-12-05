import GoogleMapsLoader from 'google-maps'
// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
    Vue.prototype.$gmaps = GoogleMapsLoader
    Vue.prototype.$gmaps.KEY = 'MY-KEY'
    Vue.prototype.$gmaps.LIBRARIES = ['places']
}
