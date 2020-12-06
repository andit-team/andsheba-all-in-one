<template>
  <div class="main-wrapper">
    <!-- Header -->
    <div class="header">
      <div class="header-left">
        <router-link to="index-2" class="logo logo-small">
          <img src="/img/logo-icon.png" alt="Logo" width="30" height="30" />
        </router-link>
      </div>
      <router-link to="javascript:void(0);" id="toggle_btn">
        <i class="fas fa-align-left"></i>
      </router-link>
      <router-link class="mobile_btn" id="mobile_btn" to="javascript:void(0);">
        <i class="fas fa-align-left"></i>
      </router-link>

      <ul class="nav user-menu">
        <!-- Notifications -->
        <li class="nav-item dropdown noti-dropdown">
          <router-link
            to="#"
            class="dropdown-toggle nav-link"
            data-toggle="dropdown"
          >
            <i class="far fa-bell"></i> <span class="badge badge-pill"></span>
          </router-link>
          <div class="dropdown-menu dropdown-menu-right notifications">
            <div class="topnav-dropdown-header">
              <span class="notification-title">Notifications</span>
              <router-link to="javascript:void(0)" class="clear-noti">
                Clear All
              </router-link>
            </div>
            <div class="noti-content">
              <ul class="notification-list">
                <li class="notification-message">
                  <router-link to="admin-notification">
                    <div class="media">
                      <span class="avatar avatar-sm">
                        <img
                          class="avatar-img rounded-circle"
                          alt=""
                          src="/img/provider/provider-01.jpg"
                        />
                      </span>
                      <div class="media-body">
                        <p class="noti-details">
                          <span class="noti-title"
                            >Thomas Herzberg have been subscribed</span
                          >
                        </p>
                        <p class="noti-time">
                          <span class="notification-time"
                            >15 Sep 2020 10:20 PM</span
                          >
                        </p>
                      </div>
                    </div>
                  </router-link>
                </li>
                <li class="notification-message">
                  <router-link to="admin-notification">
                    <div class="media">
                      <span class="avatar avatar-sm">
                        <img
                          class="avatar-img rounded-circle"
                          alt=""
                          src="/img/provider/provider-02.jpg"
                        />
                      </span>
                      <div class="media-body">
                        <p class="noti-details">
                          <span class="noti-title"
                            >Matthew Garcia have been subscribed</span
                          >
                        </p>
                        <p class="noti-time">
                          <span class="notification-time"
                            >13 Sep 2020 03:56 AM</span
                          >
                        </p>
                      </div>
                    </div>
                  </router-link>
                </li>
                <li class="notification-message">
                  <router-link to="admin-notification">
                    <div class="media">
                      <span class="avatar avatar-sm">
                        <img
                          class="avatar-img rounded-circle"
                          alt=""
                          src="/img/provider/provider-03.jpg"
                        />
                      </span>
                      <div class="media-body">
                        <p class="noti-details">
                          <span class="noti-title"
                            >Yolanda Potter have been subscribed</span
                          >
                        </p>
                        <p class="noti-time">
                          <span class="notification-time"
                            >12 Sep 2020 09:25 PM</span
                          >
                        </p>
                      </div>
                    </div>
                  </router-link>
                </li>
                <li class="notification-message">
                  <router-link to="admin-notification">
                    <div class="media">
                      <span class="avatar avatar-sm">
                        <img
                          class="avatar-img rounded-circle"
                          alt="User Image"
                          src="/img/provider/provider-04.jpg"
                        />
                      </span>
                      <div class="media-body">
                        <p class="noti-details">
                          <span class="noti-title"
                            >Ricardo Flemings have been subscribed</span
                          >
                        </p>
                        <p class="noti-time">
                          <span class="notification-time"
                            >11 Sep 2020 06:36 PM</span
                          >
                        </p>
                      </div>
                    </div>
                  </router-link>
                </li>
                <li class="notification-message">
                  <router-link to="admin-notification">
                    <div class="media">
                      <span class="avatar avatar-sm">
                        <img
                          class="avatar-img rounded-circle"
                          alt="User Image"
                          src="/img/provider/provider-05.jpg"
                        />
                      </span>
                      <div class="media-body">
                        <p class="noti-details">
                          <span class="noti-title"
                            >Maritza Wasson have been subscribed</span
                          >
                        </p>
                        <p class="noti-time">
                          <span class="notification-time"
                            >10 Sep 2020 08:42 AM</span
                          >
                        </p>
                      </div>
                    </div>
                  </router-link>
                </li>
                <li class="notification-message">
                  <router-link to="admin-notification">
                    <div class="media">
                      <span class="avatar avatar-sm">
                        <img
                          class="avatar-img rounded-circle"
                          alt="User Image"
                          src="/img/provider/provider-06.jpg"
                        />
                      </span>
                      <div class="media-body">
                        <p class="noti-details">
                          <span class="noti-title"
                            >Marya Ruiz have been subscribed</span
                          >
                        </p>
                        <p class="noti-time">
                          <span class="notification-time"
                            >9 Sep 2020 11:01 AM</span
                          >
                        </p>
                      </div>
                    </div>
                  </router-link>
                </li>
                <li class="notification-message">
                  <router-link to="admin-notification">
                    <div class="media">
                      <span class="avatar avatar-sm">
                        <img
                          class="avatar-img rounded-circle"
                          alt="User Image"
                          src="/img/provider/provider-07.jpg"
                        />
                      </span>
                      <div class="media-body">
                        <p class="noti-details">
                          <span class="noti-title"
                            >Richard Hughes have been subscribed</span
                          >
                        </p>
                        <p class="noti-time">
                          <span class="notification-time"
                            >8 Sep 2020 06:23 AM</span
                          >
                        </p>
                      </div>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="topnav-dropdown-footer">
              <router-link to="admin-notification"
                >View all Notifications</router-link
              >
            </div>
          </div>
        </li>
        <!-- /Notifications -->

        <!-- User Menu -->
        <li class="nav-item dropdown">
          <router-link
            to="javascript:void(0)"
            class="dropdown-toggle user-link nav-link"
            data-toggle="dropdown"
          >
            <span class="user-img">
              <img
                class="rounded-circle"
                src="/img/user.jpg"
                width="40"
                alt="Admin"
              />
            </span>
          </router-link>
          <div class="dropdown-menu dropdown-menu-right">
            <router-link class="dropdown-item" to="admin-profile"
              >Profile</router-link
            >
            <router-link class="dropdown-item" to="login">Logout</router-link>
          </div>
        </li>
        <!-- /User Menu -->
      </ul>
    </div>
    <!-- /Header -->

    <!-- Sidebar -->
    <div class="sidebar" id="sidebar">
      <div class="sidebar-logo">
        <router-link to="index-2">
          <img src="/img/logo-icon.png" class="img-fluid" alt="" />
        </router-link>
      </div>
      <div class="sidebar-inner slimscroll">
        <div id="sidebar-menu" class="sidebar-menu">
          <ul>
            <li class="active">
              <router-link to="/"
                ><i class="fas fa-columns"></i>
                <span>Dashboard</span></router-link
              >
            </li>
            <li>
              <router-link to="/categories"
                ><i class="fas fa-layer-group"></i>
                <span>Categories</span></router-link
              >
            </li>
            <li>
              <router-link to="/subcategories"
                ><i class="fab fa-buffer"></i>
                <span>Sub Categories</span></router-link
              >
            </li>
            <li>
              <router-link to="/service-list"
                ><i class="fas fa-bullhorn"></i>
                <span> Services</span></router-link
              >
            </li>
            <li>
              <router-link to="/total-report"
                ><i class="far fa-calendar-check"></i>
                <span> Booking List</span></router-link
              >
            </li>
            <li>
              <router-link to="/payment_list"
                ><i class="fas fa-hashtag"></i>
                <span>Payments</span></router-link
              >
            </li>
            <li>
              <router-link to="/ratingstype"
                ><i class="fas fa-star-half-alt"></i>
                <span>Rating Type</span></router-link
              >
            </li>
            <li>
              <router-link to="/review-reports"
                ><i class="fas fa-star"></i> <span>Ratings</span></router-link
              >
            </li>
            <li>
              <router-link to="/subscriptions"
                ><i class="far fa-calendar-alt"></i>
                <span>Subscriptions</span></router-link
              >
            </li>
            <li>
              <router-link to="/wallet"
                ><i class="fas fa-wallet"></i> <span> Wallet</span></router-link
              >
            </li>
            <li>
              <router-link to="/service-providers"
                ><i class="fas fa-user-tie"></i>
                <span> Service Providers</span></router-link
              >
            </li>
            <li>
              <router-link to="/users"
                ><i class="fas fa-user"></i> <span>Users</span></router-link
              >
            </li>
            <li>
              <router-link to="/settings"
                ><i class="fas fa-cog"></i> <span> Settings</span></router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- /Sidebar -->

    <div class="page-wrapper">
      <nuxt />
    </div>
  </div>
</template>

<!-- Bootstrap Core JS -->
<script src="/js/popper.min.js"></script>
<script src="/plugins/bootstrap/js/bootstrap.min.js"></script>
<script src="/js/bootstrapValidator.min.html"></script>


<script>
import $ from "jquery";
import jQuery from "jquery";
export default {
  mounted() {
    window.addEventListener("load", function (event) {
      var $wrapper = $(".main-wrapper");
      var $pageWrapper = $(".page-wrapper");
      var $slimScrolls = $(".slimscroll");

      // Sidebar

      var Sidemenu = function () {
        this.$menuItem = $("#sidebar-menu a");
      };

      function init() {
        var $this = Sidemenu;
        $("#sidebar-menu a").on("click", function (e) {
          if ($(this).parent().hasClass("submenu")) {
            e.preventDefault();
          }
          if (!$(this).hasClass("subdrop")) {
            $("ul", $(this).parents("ul:first")).slideUp(350);
            $("a", $(this).parents("ul:first")).removeClass("subdrop");
            $(this).next("ul").slideDown(350);
            $(this).addClass("subdrop");
          } else if ($(this).hasClass("subdrop")) {
            $(this).removeClass("subdrop");
            $(this).next("ul").slideUp(350);
          }
        });
        $("#sidebar-menu ul li.submenu a.active")
          .parents("li:last")
          .children("a:first")
          .addClass("active")
          .trigger("click");
      }

      // Sidebar Initiate
      init();

      // Mobile menu sidebar overlay

      $("body").append('<div class="sidebar-overlay"></div>');
      $(document).on("click", "#mobile_btn", function () {
        $wrapper.toggleClass("slide-nav");
        $(".sidebar-overlay").toggleClass("opened");
        $("html").addClass("menu-opened");
        return false;
      });

      // Sidebar overlay

      $(".sidebar-overlay").on("click", function () {
        $wrapper.removeClass("slide-nav");
        $(".sidebar-overlay").removeClass("opened");
        $("html").removeClass("menu-opened");
      });

      // Select 2
      if ($(".select").length > 0) {
        console.log(234);
        $(".select").select2({
          minimumResultsForSearch: -1,
          width: "100%",
        });
      }

      $(document).on("click", "#filter_search", function () {
        $("#filter_inputs").slideToggle("slow");
      });

      // Datetimepicker
      if ($(".datetimepicker").length > 0) {
        $(".datetimepicker").datetimepicker({
          format: "DD-MM-YYYY",
          icons: {
            up: "fas fa-angle-up",
            down: "fas fa-angle-down",
            next: "fas fa-angle-right",
            previous: "fas fa-angle-left",
          },
        });
      }

      // Tooltip

      if ($('[data-toggle="tooltip"]').length > 0) {
        $('[data-toggle="tooltip"]').tooltip();
      }

      // Datatable

      if ($(".datatable").length > 0) {
        $(".datatable").DataTable({
          bFilter: false,
        });
      }

      // Owl Carousel

      if ($(".images-carousel").length > 0) {
        $(".images-carousel").owlCarousel({
          loop: true,
          center: true,
          margin: 10,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
            },
            600: {
              items: 1,
            },
            1000: {
              items: 1,
              loop: false,
              margin: 20,
            },
          },
        });
      }

      // Sidebar Slimscroll

      if ($slimScrolls.length > 0) {
        $slimScrolls.slimScroll({
          height: "auto",
          width: "100%",
          position: "right",
          size: "7px",
          color: "#ccc",
          allowPageScroll: false,
          wheelStep: 10,
          touchScrollStep: 100,
        });
        var wHeight = $(window).height() - 60;
        $slimScrolls.height(wHeight);
        $(".sidebar .slimScrollDiv").height(wHeight);
        $(window).resize(function () {
          var rHeight = $(window).height() - 60;
          $slimScrolls.height(rHeight);
          $(".sidebar .slimScrollDiv").height(rHeight);
        });
      }

      // Small Sidebar

      $(document).on("click", "#toggle_btn", function () {
        if ($("body").hasClass("mini-sidebar")) {
          $("body").removeClass("mini-sidebar");
          $(".subdrop + ul").slideDown();
        } else {
          $("body").addClass("mini-sidebar");
          $(".subdrop + ul").slideUp();
        }
        setTimeout(function () {
          mA.redraw();
          mL.redraw();
        }, 300);
        return false;
      });

      $(document).on("mouseover", function (e) {
        e.stopPropagation();
        if (
          $("body").hasClass("mini-sidebar") &&
          $("#toggle_btn").is(":visible")
        ) {
          var targ = $(e.target).closest(".sidebar").length;
          if (targ) {
            $("body").addClass("expand-menu");
            $(".subdrop + ul").slideDown();
          } else {
            $("body").removeClass("expand-menu");
            $(".subdrop + ul").slideUp();
          }
          return false;
        }

        $(window).scroll(function () {
          if ($(window).scrollTop() >= 30) {
            $(".header").addClass("fixed-header");
          } else {
            $(".header").removeClass("fixed-header");
          }
        });

        $(document).on("click", "#loginSubmit", function () {
          $("#adminSignIn").submit();
        });
      });
    });
  },
};
</script>
