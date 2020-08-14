import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import ('../views/home/home')
const My = () => import ('../views/my/my')
const Music = () => import('../views/music/music')
const Search = () => import('../views/search/search')
const Login = () => import('../views/login/login')
const Singer = () => import('../views/singer/singer')
const Mv = () => import('../views/mv/mv')
const MusicComments = () => import('../views/music/kidPage/musicComments/musicComments')

const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/my',
    component: My,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/music',
    component: Music,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/comment',
    component: MusicComments,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/singer',
    component: Singer,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/mv',
    component: Mv,
    meta: {
      keepAlive: false
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router