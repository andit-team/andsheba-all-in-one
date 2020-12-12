<template>
   <div class="q-item q-field--filled" style="background-color: #f2f2f2">
       <gmap-autocomplete
           class="autocomplete-search q-field__native q-placeholder"
           placeholder="আপনার অবস্থান *"
           :value="address"
           @place_changed="setPlace">
       </gmap-autocomplete>
   </div>
</template>

<script>

export default {
    name: "PlacesAutoComplete",
    props: ['address', 'setAddress'],
    methods: {
        setPlace(place) {
            let address = {
                address: place.formatted_address,
                location: {
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng(),
                }
            }
            this.setAddress(address)
        },
    }


}
</script>

<style scoped>

</style>
