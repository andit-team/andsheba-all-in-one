<template>
    <div>
        <div>
            <div class="container q-pa-md flex justify-between">
                <div class="text-h5 q-my-md text-weight-medium" style="color: #2c3038">Contact Us</div>
                <div class="q-my-md" style="font-size: 15px; opacity: .7; font-weight: 500">Home <span class="q-mx-xs">/</span> Contact Us</div>
            </div>
        </div>
        <div style="background: #f6f7f8">
            <div class="container q-px-md q-py-lg row">
                <div class="col-12 col-md-8">
                    <div class="text-h5 q-my-md text-weight-medium" style="color: #2c3038">Drop your Queries</div>
                    <div class="row">
                        <div class="col-12 col-md-6 q-pr-lg q-my-sm">
                            <div class="q-my-sm c-input-label">First Name</div>
                            <q-input dense outlined/>
                        </div>
                        <div class="col-12 col-md-6 q-pr-lg q-my-sm">
                            <div class="q-my-sm c-input-label">Last Name</div>
                            <q-input dense outlined/>
                        </div>
                        <div class="col-12 col-md-6 q-pr-lg q-my-sm">
                            <div class="q-my-sm c-input-label">Email</div>
                            <q-input dense outlined/>
                        </div>
                        <div class="col-12 col-md-6 q-pr-lg q-my-sm">
                            <div class="q-my-sm c-input-label">Mobile Number</div>
                            <q-input dense outlined/>
                        </div>
                        <div class="col-12 q-pr-lg q-my-sm">
                            <div class="q-my-sm c-input-label">Mobile Number</div>
                            <q-input dense outlined type="textarea"/>
                        </div>
                    </div>
                    <div class="q-mt-lg">
                        <q-btn dense class="q-my-md q-px-md q-py-xs text-white bg-primary">Update</q-btn>
                    </div>
                </div>
                <div class="col-12 col-md-4 q-my-lg">
                    <div class="c-contact-details">
                        <div class="c-contact-info">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="c-contact-data">
                                <div>Address</div>
                                <p>367 Hillcrest Lane, Irvine, California, United States</p>
                            </div>
                        </div>
                        <hr>
                        <div class="c-contact-info">
                            <i class="fas fa-phone-alt"></i>
                            <div class="c-contact-data">
                                <div>Phone</div>
                                <p>+21 256 259 8796</p>
                                <p>+21 895 158 6545</p>
                            </div>
                        </div>
                        <hr>
                        <div class="c-contact-info">
                            <i class="fab fa-skype"></i>
                            <div class="c-contact-data">
                                <div>Skype</div>
                                <p>AndSheba</p>
                            </div>
                        </div>
                        <hr>
                        <div class="c-contact-info">
                            <i class="far fa-envelope"></i>
                            <div class="c-contact-data">
                                <div>Email</div>
                                <p>truelysell@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <GmapMap
            ref="mapRef"
            :center="center"
            :zoom="14"
            map-type-id="terrain"
            style="width: 100vw; height: 400px"
        >
            <GmapMarker
                ref="marker"
                :position="center"
            />
        </GmapMap>

        <Footer/>
    </div>
</template>

<script>
import Footer from "components/footer/Footer";
export default {
    name: "ContactUs",
    components: {Footer},
    data() {
        return {
            center: {
                lat: 22.81385129539432, lng: 89.5657572366762
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.c-input-label {
    font-size: 16px;
    font-weight: 500;
}
.c-contact-details {
    border: 1px solid rgba(0,0,0,.1);
    padding: 20px;
    border-radius: 5px;
    hr {
        opacity: .4;
    }
    .c-contact-info {
        display: flex;
        padding: 5px;
        i {
            font-size: 18px;
            padding-top: 3px;
            min-width: 18px;
        }
        .c-contact-data {
            margin-left: 15px;
            div {
                font-size: 18px;
                margin-bottom: 10px;
                font-weight: 500;
            }
            p {
                font-size: 14px;
                margin-bottom: 0;
                line-height: 1.6;
                font-weight: 400;
            }
        }
    }
}
</style>