const internListRoutes = [
  {
    path: '/visao-geral',
    name: 'overview',
    component: () => import('./layout/Overview')
  },
  {
    path: '/produtos',
    name: 'stock',
    component: () => import('./layout/Products')
  },
  {
    path: '/clientes',
    name: 'customer',
    component: () => import('./layout/Customers')
  }
]

export default internListRoutes
