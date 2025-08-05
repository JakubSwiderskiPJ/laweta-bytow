const routes = [
  {
    path: '/',
    component: () => import('pages/MainPage.vue'),
    children: [{ path: 'loaning', component: () => import('pages/LoaningPage.vue') },
],

  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
