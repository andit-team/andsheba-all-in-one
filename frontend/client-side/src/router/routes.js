
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'login', component: () => import('pages/Login.vue') },
      { path: 'register', component: () => import('pages/Register.vue') },

    ]
  },
  {
    path: '/user',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: '', component: () => import('pages/user/Dashboard.vue') },
      { path: 'bookings', component: () => import('pages/user/Bookings.vue') },
      { path: 'profile', component: () => import('pages/user/Profile.vue') },
      { path: 'wallet', component: () => import('pages/user/Wallet.vue') },
      { path: 'subscription', component: () => import('pages/user/Subscription.vue') },
    ]
  },
  {
    path: '/service',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/service/Index.vue') },
      { path: 'add', component: () => import('pages/service/Add.vue') },
      { path: 'single', component: () => import('pages/service/single.vue') },
      { path: 'quote', component: () => import('pages/service/cost_calc.vue') },
    ]
  },
  { path: '/pro/login', component: () => import('pages/pro/Login.vue') },
  { path: '/pro/register', component: () => import('pages/pro/Register.vue') },
  {
    path: '/pro',
    component: () => import('layouts/ProLayout.vue'),
    children: [
      { path: '', component: () => import('pages/pro/Dashboard.vue') },
      { path: 'dashboard', component: () => import('pages/pro/Dashboard.vue') },
      { path: 'services', component: () => import('pages/pro/Services.vue') },
      { path: 'add_services', component: () => import('pages/pro/AddService.vue') },
      { path: 'booking_list', component: () => import('pages/pro/BookingList.vue') },
      { path: 'profile', component: () => import('pages/pro/Profile.vue') },
      { path: 'wallet', component: () => import('pages/pro/Wallet.vue') },
      { path: 'subscription', component: () => import('pages/pro/Subscription.vue') },
    ]
  },
  { path: '/agent/login', component: () => import('pages/agent/Login') },
  { path: '/agent/register', component: () => import('pages/agent/Register') },
  {
    path: '/agent',
    component: () => import('layouts/AgentLayout'),
    children: [
      { path: '', component: () => import('pages/agent/Dashboard.vue') },
      { path: 'dashboard', component: () => import('pages/agent/Dashboard.vue') },
      { path: 'services', component: () => import('pages/agent/Services.vue') },
      { path: 'orders', component: () => import('pages/agent/Orders.vue') },
      { path: 'profile', component: () => import('pages/agent/Profile.vue') },
      { path: 'wallet', component: () => import('pages/agent/Wallet.vue') },
      { path: 'plan', component: () => import('pages/agent/Plan.vue') },
    ]
  },
  {
    path: '/pro',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'single', component: () => import('pages/pro/single.vue') },
    ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
