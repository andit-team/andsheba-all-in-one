<template>
  <div class="main-wrapper">
    <!-- Header -->
    <div class="header">
      <div class="header-left">
        <router-link to="/" class="logo logo-small">
          <img src="/img/logo-icon.png" alt="Logo" width="30" height="30" />
        </router-link>
      </div>
      <a href="#" id="toggle_btn">
        <i class="fas fa-align-left"></i>
      </a>
      <a class="mobile_btn" id="mobile_btn" href="#">
        <i class="fas fa-align-left"></i>
      </a>

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
					<a href="javascript:void(0)" class="dropdown-toggle user-link  nav-link" data-toggle="dropdown">
						<span class="user-img">
							<img class="rounded-circle" src="/img/user.jpg" width="40" alt="Admin">
						</span>
					</a>
					<div class="dropdown-menu dropdown-menu-right">
						<a class="dropdown-item" href="admin-profile.html">Profile</a>
						<a class="dropdown-item" href="login.html">Logout</a>
					</div>
				</li>
				<!-- /User Menu -->
      </ul>
    </div>
    <!-- /Header -->

    <!-- Sidebar -->
    <div class="sidebar" id="sidebar">
      <div class="sidebar-logo">
        <router-link to="/">
          <img src="/img/logo-icon.png" class="img-fluid" alt="" />
        </router-link>
      </div>
      <div class="sidebar-inner slimscroll">
        <div id="sidebar-menu" class="sidebar-menu">
          <ul>
            <li v-for="menu in menuItems" :class="{active:activelink === menu.title}" :key="menu.route"  @click="activelinkChange(menu.title)">
              <router-link :to="menu.route"
                ><i :class="menu.icon"></i>
                <span>{{ menu.title }}</span></router-link
              >
            </li>
            <li>
              <a href="#" @click.prevent="logout"
                ><i class="fa fa-sign-out-alt"></i> <span> Logout</span></a
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
import io from "socket.io-client"
import { mapState } from 'vuex'
var data = { soundurl : 'http://soundbible.com/mp3/analog-watch-alarm_daniel-simion.mp3'}
export default {
  data(){
    return {
      activelink: 'Dashboard',
      menuItems:[
        {
          title:'Dashboard',
          icon:'fas fa-columns',
          route:'/'
        },
        {
          title:'Categories',
          icon:'fas fa-layer-group',
          route:'/categories'
        },
        {
          title:'Sub Categories',
          icon:'fab fa-buffer',
          route:'/subcategories'
        },
        {
          title:'Services',
          icon:'fas fa-bullhorn',
          route:'/services'
        },
        {
          title:'Plans',
          icon:'fas fa-calendar-alt',
          route:'/plans'
        },
        {
          title:'Booking List',
          icon:'fas fa-calendar-check',
          route:'/total-report'
        },
        {
          title:'Payments',
          icon:'fas fa-hashtag',
          route:'/payments'
        },
        {
          title:'Rating Type',
          icon:'fas fa-star-half-alt',
          route:'/ratingstype'
        },
        {
          title:'Ratings',
          icon:'fas fa-star',
          route:'/review-reports'
        },
        {
          title:'Wallet',
          icon:'fas fa-wallet',
          route:'/wallet'
        },
        {
          title:'Service Providers',
          icon:'fas fa-user-tie',
          route:'/service-providers'
        },
        {
          title:'Users',
          icon:'fas fa-user',
          route:'/users'
        },
        {
          title:'Settings',
          icon:'fas fa-cog',
          route:'/settings'
        },
      ]
    }
  },
  methods: {
    setupSocket (){
    const token = this.$cookies.get('accessToken')
    if (token && !this.socket) {
      const newSocket = io("http://localhost:5000", {
        query: {
          token: this.$cookies.get('accessToken'),
        },
      });

      newSocket.on("disconnect", () => {
        this.$store.commit('auth/setSocket',null)
        setTimeout(setupSocket, 3000);
        console.log("Socket Connection Failed")
      });

      newSocket.on("connect", () => {
        console.log("Socket Connected")
      });

      newSocket.on("service_added", (data) => {
        let id = data.data._id
        let self = this
        this.$store.commit('service/pushServices',data)
        this.playSound()
        this.$toast.open({
          message: 'New Service Request!',
          type: 'success',
          position:'top-right',
          dismissible:true,
          duration: 10000,
          onClick: function(){
            self.$router.push('services/edit/'+id)
          },
        });
      });

      this.$store.commit('auth/setSocket',newSocket)
    }
  },
  logout(){
      this.$cookies.remove('accessToken');
      this.$store.commit('auth/setStatus')
      this.$router.push({
        path: '/login'
      });
    },
    playSound () {
      var audio = new Audio(data.soundurl);
      audio.play();
    },
    activelinkChange(link){
      this.activelink = link
    }
  },
  computed: mapState({
    socket: state => state.auth.socket
  }),
  mounted() {
    this.setupSocket()
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

      $(document).on("click", "#filter_search", function () {
        $("#filter_inputs").slideToggle("slow");
      });


      // Tooltip

      if ($('[data-toggle="tooltip"]').length > 0) {
        $('[data-toggle="tooltip"]').tooltip();
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
