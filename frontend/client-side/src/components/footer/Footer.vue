<template>
    <div>
        <div class="footer">
            <div class="container q-py-lg q-mx-md">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12 cl-xs-12 q-pa-md">
                        <!-- Footer Widget -->
                        <div class="footer-widget footer-menu">
                            <div class="text-h2 footer-title">Quick Links</div>
                            <q-list>
                                <div class="footer-link"> <a href="/#/about_us">About Us</a></div>
                                <div class="footer-link"><a href="/#/contact_us">Contact Us</a></div>
                                <div class="footer-link">Faq</div>
                                <div class="footer-link">Help</div>
                                <div class="footer-link"><a href="/#/agent">Become a Agent</a></div>
                            </q-list>
                        </div>
                        <!-- /Footer Widget -->
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 q-pa-md">
                        <!-- Footer Widget -->
                        <div class="footer-widget footer-menu">
                            <div class="text-h2 footer-title">Categories</div>
                            <q-list>
                                <div class="footer-link">Computer</div>
                                <div class="footer-link">Interior</div>
                                <div class="footer-link">Car Wash</div>
                                <div class="footer-link">Cleaning</div>
                            </q-list>
                        </div>
                        <!-- /Footer Widget -->
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 q-pa-md">
                        <!-- Footer Widget -->
                        <div class="footer-widget footer-contact">
                            <div class="text-h2 footer-title">Contact Us</div>
                            <div class="footer-contact-info">
                                <div class="footer-address">
                                    <i class="far fa-building"></i>
                                    <span>Ahsan Ahmed Road, 32 Choto Mirzapur, Peace Palace, Khulna, 9100</span>
                                </div>
                                <a href="tel:+8801882-453444"><i class="fas fa-headphones"></i> 01882-453444</a>
                                <a href="mailto:andsheba444@gmail.com"><i class="fas fa-envelope"></i> andsheba444@gmail.com</a>
                            </div>
                        </div>
                        <!-- /Footer Widget -->
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 q-pa-md">
                        <!-- Footer Widget -->
                        <div class="footer-widget">
                            <div class="text-h2 footer-title">Follow Us</div>
                            <div class="social-icon q-mb-md">
                                <q-list>
                                    <a href="#" target="_blank"><i class="fab fa-facebook-f"></i> </a>
                                    <a href="#" target="_blank"><i class="fab fa-twitter"></i> </a>
                                    <a href="#" target="_blank"><i class="fab fa-youtube"></i></a>
                                    <a href="#" target="_blank"><i class="fab fa-google"></i></a>
                                </q-list>
                            </div>
                            <div class="subscribe-form">
                                <input type="email" class="form-control" placeholder="Enter your email">
                                <button type="submit" class="btn footer-btn">
                                    <i class="fas fa-paper-plane"></i>
                                </button>
                            </div>
                        </div>
                        <!-- /Footer Widget -->
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <!-- Copyright -->
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-6 col-lg-6 q-pa-md">
                            <div class="copyright-text">
                                <p class="mb-0">© 2020 <a href="index.html">AndSheba</a>. All rights reserved.</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6 q-pa-md">
                            <!-- Copyright Menu -->
                            <div class="copyright-menu">
                                <q-list class="policy-menu">
                                    <a href="term-condition.html">Terms and Conditions</a>
                                    <a href="privacy-policy.html">Privacy</a>
                                </q-list>
                            </div>
                            <!-- /Copyright Menu -->
                        </div>
                    </div>
                </div>
                <!-- /Copyright -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style lang="scss" scoped>
.footer {
    font-family: 'Poppins', sans-serif;
    background-color: #fff;
    border-top: 1px solid #e8ecec;
}

.footer-title {
    color: #171717;
    font-size: 22px;
    font-weight: 600;
    text-transform: capitalize;
}

.footer-link {
    padding: 0;
    color: #000;
    font-weight: 500;
    font-size: 15px;
    transition: all 0.4s ease 0s;
    margin-bottom: 10px;
    cursor: pointer;


    &:hover {
        color: #2b76d2;
    }


    a {
        padding: 0;
        color: #000;
        font-weight: 500;
        font-size: 15px;
        transition: all 0.4s ease 0s;
        margin-bottom: 10px;
        cursor: pointer;
        text-decoration: none;

        &:hover {
            color: #2b76d2;
        }
    }
}

.footer-contact-info {
    color: #000;
    i {
        color: #2b76d2;
        font-size: 18px;
    }

    & > p > i {
        margin-right: 12px;
    }
    & > a  {
        display: block;
        margin-bottom: 10px;
        text-decoration: none;
        color: #000;
        & > i {
            margin-right: 12px;
        }
        &:hover {
            color: #2b76d2;
        }
    }

    .footer-address {
        margin-bottom: 50px;

        span {
            display: inline-block;
            max-width: 200px;
            position: absolute;
            margin-left: 18px;
        }
    }
}

.social-icon {
    a {
        color: #B0B0B0;
        display: inline-flex;
        font-size: 20px;
        transition: all 0.4s ease 0s;
        width: 40px;
        height: 40px;
        border-radius: 14px;
        justify-content: center;
        align-items: center;
        background-color: #f0f0f0;
        margin-right: 12px;
        text-decoration: none;
        &:hover {
            color: #2b76d2;
        }
    }
}

.subscribe-form {
    position: relative;
    .form-control {
        outline: none;
        height: 45px;
        border: 1px solid #8d8d8d;
        border-radius: 50px;
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.08);
        padding-left: 20px;
        font-size: 15px;
        width: 100%;
    }

    .footer-btn {
        width: 35px;
        height: 35px;
        font-size: 16px;
        border-radius: 50%;
        color: #fff;
        background-color: #2b76d2;
        border: none;
        outline: none;
        -webkit-transition: 0.5s all ease;
        transition: 0.5s all ease;
        position: absolute;
        top: 5px;
        right: 6px;
        padding: 0;
        cursor: pointer;
    }
}

.copyright {
    font-family: 'Poppins', sans-serif;
    border-top: 1px solid #e8ecec;
    padding-top: 10px;

    .copyright-text {
        p {
            color: #000;
            font-size: 15px;
            font-weight: 600;
            a {
                color: #2b76d2;
                text-decoration: none;
            }
        }
    }

    .copyright-menu {
        text-align: right;
        .policy-menu {
            font-size: 14px;
            a {
                display: inline-block;
                margin-right: 15px;
                color: #8d8d8d;
                text-decoration: none;
                &:hover {
                    color: #2b76d2;
                }

                &:first-child {
                    &:after {
                        color: #8d8d8d;
                        content: "|";
                        font-weight: 300;
                        position: relative;
                        left: 10px;
                    }
                }
            }
        }
    }
}


</style>
