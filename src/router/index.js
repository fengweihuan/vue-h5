import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from '../views/layout/layout'
export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index'),
        meta: {
          keepAlive: false,
          title: '首页'
        }
      },
      {
        path: '/search',
        name: 'search',
        component: () => import('@/views/search/index'),
        meta: {
          title: '搜索'
        }
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('@/views/order/index'),
        meta: {
          login: true,
          title: '订单'
        }
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('@/views/mine/index'),
        meta: {
          title: '我的'
        }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    meta: {
      title: '登录'
    }
  }
]

const createRouter = () =>
  new Router({
    mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

export default createRouter()
