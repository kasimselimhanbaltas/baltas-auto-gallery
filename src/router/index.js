import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarDetailsView from '../views/CarDetailsView.vue'
import BrandsView from '../views/BrandsView.vue'
import CarsOfBrandView from '../views/CarsOfBrandView.vue'
import MainCarsView from '../views/MainCarsView.vue'
import ThePractice from '../views/ThePractice'
import LoginPage from '../views/LoginPage'

const routes = [
  {
    path: '/prc',
    name: 'practice',
    component: ThePractice
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/cars",
    name: 'cars',
    component: MainCarsView
  },
  {
    path: "/cars/:carid",
    name: 'details',
    component: CarDetailsView
  },
  {
    path: "/cars/olds/:carid",
    name: 'Olddetails',
    component: CarDetailsView
  },
  {
    path: '/brands',
    name: 'brands',
    component: BrandsView
  },
  {
    path: '/brands/:brand',
    name: 'brandCars',
    component: CarsOfBrandView
  },
  {
    path: '/login',
    name: 'loginpage',
    component: LoginPage
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
