<template>
    <div>
        <div>
            <div class="container q-pa-md flex justify-between">
                <div class="text-h5 q-my-md" style="color: #2c3038">About Us</div>
                <div class="q-my-md" style="font-size: 15px; opacity: .7; font-weight: 500">Home <span class="q-mx-xs">/</span> About Us</div>
            </div>
        </div>
        <div style="background: #f6f7f8">
            <div class="container q-px-md q-py-lg flex justify-between">
                <div style="max-width: 520px">
                    <div class="text-h5 q-my-md" style="color: #2c3038">Experienced and Reliable</div>
                    <p class="c-about-description">Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scelerisque the mattis, leo quam aliquet congue placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scel erisque the mattis, leo quam aliquet congue justo ut scelerisque. Praesent pharetra, justo ut scelerisque the mattis, leo quam aliquet congue justo ut scelerisque.</p>
                    <p class="c-about-description">Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scelerisque the mattis, leo quam aliquet congue placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scel erisque the mattis, leo quam aliquet congue justo ut scelerisque. Praesent pharetra, justo ut scelerisque the mattis, leo quam aliquet congue justo ut scelerisque.</p>
                </div>
                <div class="q-my-md">
                    <img src="/img/about.jpg" style="border-radius: 10px; width: 550px; max-width: 90vw"/>
                </div>
            </div>
        </div>
        <ProCta/>

        <div style="background: #f7f8f9">
            <div class="container q-px-md q-py-lg">
                <div class="q-my-lg q-py-lg relative-position">
                    <img class="c-bg-image" src="/img/dotted-bg.png"/>
                    <div class="text-weight-bold text-center" style="font-size: 1.75rem;color: #2c3038">Reasons You Should Call Us</div>
                    <div class="text-center text-weight-medium" style="font-size: 18px; opacity: .7">Our Advantages</div>
                </div>
                <div class="row q-mt-lg c-slide-section">
                    <div class="col-12 col-md-4 c-slide">
                        <div class="icon-round q-my-lg">
                            <div class="steps">01</div>
                            <img src="/img/icon-1.png" alt="">
                        </div>
                        <div class="text-h6 text-weight-bold">Choose What To Do</div>
                        <p class="q-pa-md q-mx-auto c-slide-description">Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet.</p>
                    </div>

                    <div class="col-12 col-md-4 c-slide">
                        <div class="icon-round q-my-lg">
                            <div class="steps">02</div>
                            <img src="/img/icon-2.png" alt="">
                        </div>
                        <div class="text-h6 text-weight-bold">Find What You Want</div>
                        <p class="q-pa-md q-mx-auto c-slide-description">Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet.</p>
                    </div>


                    <div class="col-12 col-md-4 c-slide">
                        <div class="icon-round q-my-lg">
                            <div class="steps">03</div>
                            <img src="/img/icon-3.png" alt="">
                        </div>
                        <div class="text-h6 text-weight-bold">Amazing Places</div>
                        <p class="q-pa-md q-mx-auto c-slide-description">Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet.</p>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
</template>

<script>
import Footer from "components/footer/Footer";
import ProCta from "components/homepage/ProCta";
export default {
    name: "AboutUs",
    components: {ProCta, Footer}
}
</script>

<style lang="scss" scoped>
.c-about-description {
    line-height: 24px;
    letter-spacing: .01rem;
}
.c-bg-image {
    position: absolute;
    opacity: 0.3;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -40%);
}
.c-slide-section {
    margin-top: 44px;
    background: url('/img/hiwbg.png') no-repeat center 65px;
    @media (max-width: 1165px) {
        background: transparent;
    }
    .c-slide {
        float: left;
        text-align: center;
        padding: 0 30px;
        .icon-round {
            float: none;
            display: inline-block;
            font-size: 65px;
            background: #fff;
            color: #ff0080;
            width: 120px;
            height: 120px;
            border-radius: 50%;
            text-align: center;
            box-shadow: 0 5px 10px rgba(0,0,0,0.1);
            position: relative;
            .steps {
                position: absolute;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: #ff0080;
                font-size: 16px;
                color: #fff;
                text-align: center;
                line-height: 40px;
                top: 15px;
                left: -15px;
            }
        }
    }
}


.c-slide-description{
    max-width: 280px;
    line-height: 24px;
    letter-spacing: .01rem;
    font-size: 15px;
    font-weight: 500;
    opacity: .7;
}
</style>