import {
  HomeIcon,
  ChartBarIcon,
  UserIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  ShoppingCartIcon,
  ArchiveBoxIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

export const routes = {
  dashboard: '/dashboard',
  analytics: '/dashboard/analytics',
  users: '/dashboard/users',
  roles: '/dashboard/roles',
  articles: '/dashboard/articles',
  categories: '/dashboard/categories',
  orders: '/dashboard/orders',
  orderStats: '/dashboard/order-stats',
} as const;

export const menuItems = [
  { name: '仪表盘', href: routes.dashboard, icon: HomeIcon },
  { name: '数据分析', href: routes.analytics, icon: ChartBarIcon },
  {
    name: '用户管理',
    icon: UserGroupIcon,
    children: [
      { name: '用户列表', href: routes.users, icon: UserIcon },
      { name: '角色权限', href: routes.roles, icon: Cog6ToothIcon },
    ],
  },
  {
    name: '内容管理',
    icon: DocumentTextIcon,
    children: [
      { name: '文章列表', href: routes.articles, icon: DocumentTextIcon },
      { name: '分类管理', href: routes.categories, icon: ArchiveBoxIcon },
    ],
  },
  {
    name: '订单管理',
    icon: ShoppingCartIcon,
    children: [
      { name: '订单列表', href: routes.orders, icon: ShoppingCartIcon },
      { name: '订单统计', href: routes.orderStats, icon: ChartBarIcon },
    ],
  },
];
