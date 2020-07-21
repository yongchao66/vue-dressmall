import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')
const Sreach = () => import('views/sreach/Sreach')
const Login = () => import('views/login/Login')

Vue.use(VueRouter)

const routes = [
	{
		path: '',
		redirect: '/home'
	},
	{
		path: '/home',
		name: 'Home',
		component: Home,
    meta: {
      title: "蘑菇街",
      keepAlive: true,
      showTab: true
    }
	},
	{
		path: '/category',
		name: 'Category',
		component: Category,
    meta: {
      keepAlive: true,
      showTab: true
    }
	},
	{
		path: '/cart',
		name: 'Cart',
		component: Cart,
    meta: {
      keepAlive: true,
      showTab: true
    }
	},
	{
		path: '/profile',
		name: 'Profile',
		component: Profile,
    meta: {
      keepAlive: true,
      showTab: true
    }
	},
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/sreach',
    name: 'Sreach',
    component: Sreach,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      keepAlive: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
