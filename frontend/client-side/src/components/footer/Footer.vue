<template>
    <div class="footer">
        <div class="container q-py-lg q-mx-md">
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <!-- Footer Widget -->
                    <div class="footer-widget footer-menu">
                        <div class="text-h2 footer-title">Quick Links  </div>
                        <q-list>
                            <div class="footer-link">About Us</div>
                            <div class="footer-link">Contact Us</div>
                            <div class="footer-link">Faq</div>
                            <div class="footer-link">Help</div>
                        </q-list>
                    </div>
                    <!-- /Footer Widget -->
                </div>
                <div class="col-lg-3 col-md-6">
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
                <div class="col-lg-3 col-md-6">
                    <!-- Footer Widget -->
                    <div class="footer-widget footer-contact">
                        <div class="text-h2 footer-title">Contact Us</div>
                        <div class="footer-contact-info">
                            <div class="footer-address">
                                <span><i class="far fa-building"></i></span>
                                <p>367 Hillcrest Lane, Irvine, California, United States</p>
                            </div>
                            <p><i class="fas fa-headphones"></i> 321 546 8764</p>
                            <p class="mb-0"><i class="fas fa-envelope"></i> truelysell@example.com</p>
                        </div>
                    </div>
                    <!-- /Footer Widget -->
                </div>
                <div class="col-lg-3 col-md-6">
                    <!-- Footer Widget -->
                    <div class="footer-widget">
                        <div class="text-h2 footer-title">Follow Us</div>
                        <div class="social-icon">
                            <ul>
                                <li>
                                    <a href="#" target="_blank"><i class="fab fa-facebook-f"></i> </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank"><i class="fab fa-twitter"></i> </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank"><i class="fab fa-youtube"></i></a>
                                </li>
                                <li>
                                    <a href="#" target="_blank"><i class="fab fa-google"></i></a>
                                </li>
                            </ul>
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
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style lang="scss" scoped>
.footer {
    background-color: #fff;
    border-top: 1px solid #e8ecec;
}
.container {
    max-width: 1200px;
    margin: 0 auto;
}
.footer-title {
    color: #171717;
    font-size: 22px;
    font-weight: 700;
    text-transform: capitalize;
}
.footer-link {
    padding: 0;
    color: #000;
    font-weight: bold;
    font-size: 15px;
    transition: all 0.4s ease 0s;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
}
</style>
