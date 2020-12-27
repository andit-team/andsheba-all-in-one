
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
    path: '/service',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/service/Index.vue') },
      { path: 'add', component: () => import('pages/service/Add.vue') },
      { path: 'single', component: () => import('pages/service/single.vue') },
      { path: 'quote', component: () => import('pages/service/cost_calc.vue') },
    ]
  },
  { path: '/user/login', component: () => import('pages/user/Login.vue') },
  { path: '/user/register', component: () => import('pages/user/Register.vue') },
  {
    path: '/user',
    component: () => import('layouts/UserDash.vue'),
    children: [
      { path: '', component: () => import('pages/user/Dashboard.vue') },
      { path: 'dashboard', component: () => import('pages/user/Dashboard.vue') },
      { path: 'services', component: () => import('pages/user/Services.vue') },
      { path: 'add_services', component: () => import('pages/user/AddService.vue') },
      { path: 'booking_list', component: () => import('pages/user/BookingList.vue') },
      { path: 'profile', component: () => import('pages/user/Profile.vue') },
      { path: 'wallet', component: () => import('pages/user/Wallet.vue') },
      { path: 'subscription', component: () => import('pages/user/Subscription.vue') },
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
