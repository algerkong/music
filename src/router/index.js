import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/home/home')
const My = () => import('../views/my/my')
const listenSong = () => import('../views/my/childView/ListenSongRanking')
const Music = () => import('../views/music/music')
const Search = () => import('../views/search/search')
const Login = () => import('../views/login/login')
const Singer = () => import('../views/singer/singer')
const Mv = () => import('../views/mv/mv')
const MusicComments = () => import('../views/music/kidPage/musicComments/musicComments')
const songList = () => import('../views/songList/songList')
const Set = () => import('../views/set/set')
const RecommendSongs = () => import('../views/home/childView/recommendSongs')
const List = () => import('../views/home/childView/songList')


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
    path: '/recommendSongs',
    component: RecommendSongs,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/list',
    component: List,
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
    path: '/set',
    component: Set,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/songList',
    component: songList,
    name: 'songList',
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/listenSong',
    component: listenSong,
    name: 'listenSong',
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
    name: 'mv',
    meta: {
      keepAlive: false
    }
  }
]

const router = new VueRouter({
  routes,
  // mode: 'history'
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router