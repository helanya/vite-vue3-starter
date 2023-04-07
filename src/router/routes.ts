export default [
  {
    name: 'root',
    path: '/',
    redirect: 'login',
    meta: {
      title: 'Root',
    },
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
    },
  },
]
